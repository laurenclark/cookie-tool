import { scriptsConfig } from './config/ScriptsConfig';
function App(state, scriptsConfig) {
    /*--------------------------------------------------------------
    ## InfoDialog Elements
    --------------------------------------------------------------*/
    const infoDialogClose = document.getElementById('info-dialog-toggle');
    const infoDialog = document.querySelector('.raw-cookie__info-dialog');
    const infoDialogWrapper = document.querySelector(
        '.raw-cookie__info-dialog__wrapper',
    );
    const infoDialogSave = document.getElementById('infoDialogSave');

    /*--------------------------------------------------------------
    ## Cookie Toggle Button
    --------------------------------------------------------------*/
    const cookieToggleButton = document.getElementById('cookieToggleButton');

    /*--------------------------------------------------------------
    ## (Initial) Dialog Elements
    --------------------------------------------------------------*/
    const initialDialog = document.getElementById('initialDialog');
    const dialogSave = document.getElementById('dialogSave');
    const accept = document.getElementById('rawCookieAccept');

    /*--------------------------------------------------------------
    ## Checkboxes
    --------------------------------------------------------------*/
    const checkboxes = {
        dialog: {
            marketing: initialDialog.querySelector('.marketing-checkbox'),
            personalisation: initialDialog.querySelector(
                '.personalisation-checkbox',
            ),
            analytics: initialDialog.querySelector('.analytics-checkbox'),
        },
        infoDialog: {
            necessary: infoDialog.querySelector('.strictly-necessary-checkbox'),
            marketing: infoDialog.querySelector('.marketing-checkbox'),
            personalisation: infoDialog.querySelector(
                '.personalisation-checkbox',
            ),
            analytics: infoDialog.querySelector('.analytics-checkbox'),
        },
    };

    /**
     * Mirror the bool state as checkboxes
     *
     * @param {Object} State
     */
    function mirrorState(state) {
        if (state.hasPrefs) {
            checkboxes.infoDialog.necessary.setAttribute('checked', true);
            checkboxes.infoDialog.necessary.setAttribute('disabled', true);
            if (!state.userPrefs.marketing) {
                marketingScripts(scriptsConfig);
            } else if (state.userPrefs.marketing) {
                checkboxes.infoDialog.marketing.setAttribute('checked', true);
            }
            if (!state.userPrefs.personalisation) {
                // removePersonalisationScripts();
            } else if (state.userPrefs.personalisation) {
                checkboxes.infoDialog.personalisation.setAttribute(
                    'checked',
                    true,
                );
            }
            if (!state.userPrefs.analytics) {
                removeAnalyticsScripts(scriptsConfig);
            } else if (state.userPrefs.analytics) {
                checkboxes.infoDialog.analytics.setAttribute('checked', true);
            }
        } else {
            toggler(cookieToggleButton, 'raw-cookie__widget--hidden');
            toggler(initialDialog, 'raw-cookie__dialog--hidden');
        }
    }

    /*--------------------------------------------------------------
    ## Remove Scripts 
    --------------------------------------------------------------*/

    /**
     * Remove Script from Head
     *
     * @param {String} "https://url.com"
     */
    function removeScript(source) {
        const scriptTarget = document.head.querySelectorAll('script');
        let scriptSrc = '';
        for (let i = 0; scriptTarget.length > i; i += 1) {
            if (scriptTarget[i].src === source) {
                scriptSrc = scriptTarget[i];
            }
        }
        if (scriptSrc) {
            scriptSrc.parentNode.removeChild(scriptSrc);
        }
    }

    /**
     * Determine Analytics Scripts to Remove
     *
     * @param {String} "https://url.com"
     */
    function removeAnalyticsScripts(conf) {
        // Disables GA Tracking
        window[`ga-disable-${conf.analyticsCode}`] = true;
        removeScript(conf.analyticsScripts);
    }

    /**
     * Determine Marketing Scripts to Remove
     *
     * @param {String} "https://url.com"
     */
    function marketingScripts(conf) {
        removeScript(conf.marketingScripts);
    }

    /*--------------------------------------------------------------
    ## Cookie Actions
    --------------------------------------------------------------*/

    /**
     * Create Cookiestring
     *
     * @param {String} RAWCOOKIE
     * @param {String} CookieString (from userPrefs)
     * @param {Number} Days
     */

    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = 'expires=' + date.toUTCString();
        }

        // You can't set (https) secure cookies from http!
        // document.cookie = `${name}=${value}; ${expires}; path=/; secure`;
        document.cookie = `${name}=${value}; ${expires}; path=/;`;
    }

    /**
     * Remove Cookie (set it to expire)
     * - Note: Effect is on page reload or revisit
     *
     * @param {String} "_ga"
     */

    function removeCookie(id) {
        document.cookie = `${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"`;
    }

    /**
     * Split the Cookies stored into an Object
     * @returns {Object}
     */

    function getCookies() {
        return document.cookie
            .split(';')
            .map((cookie) => cookie.split(/=(.+)/))
            .reduce(
                (accumulator, [key, value]) => ({
                    ...accumulator,
                    [key.trim()]: decodeURIComponent(value),
                }),
                {},
            );
    }

    /**
     * Create Cookie String
     *
     * @param {Object}  - Object to iterate over
     * @returns {String}
     */

    function createCookieString(obj) {
        let cookieString = [];
        for (let [key, value] of Object.entries(obj)) {
            cookieString.push(`${key}=${value}`);
        }
        return cookieString.join(',');
    }

    /**
     * Add checkbox values to state.userPrefs
     *
     * @param {Object} state.userPrefs
     */
    function checkPrefs(obj) {
        const { marketing, personalisation, analytics } = obj;
        state.userPrefs.necessary = true;
        if (!marketing.checked) {
            state.userPrefs.marketing = false;
        } else if (marketing.checked) {
            state.userPrefs.marketing = true;
        }

        if (!personalisation.checked) {
            state.userPrefs.personalisation = false;
        } else if (personalisation.checked) {
            state.userPrefs.personalisation = true;
        }

        if (!analytics.checked) {
            state.userPrefs.analytics = false;
        } else if (analytics.checked) {
            state.userPrefs.analytics = true;
        }
        setUserPrefs(state.userPrefs);
    }

    /**
     * Set User Preference Cookie
     *
     * @param {Object} state.userPrefs
     */

    function setUserPrefs(userPrefs) {
        state.hasPrefs = true;
        const cookieString = createCookieString(userPrefs);
        setCookie('RAWCOOKIE', cookieString, 365);
    }

    /**
     * Convert "true"/"false" to Boolean
     *
     * @param {String} "True/False"
     * @returns {Boolean}
     */

    function convertStringToBool(val) {
        if (val === 'true') {
            return true;
        } else if (val === 'false') {
            return false;
        }
    }

    /*--------------------------------------------------------------
    ## Event Handlers
    --------------------------------------------------------------*/

    function handleSave() {
        checkPrefs(checkboxes.dialog);
        setUserPrefs(state.userPrefs);
        toggler(cookieToggleButton, 'raw-cookie__widget--hidden');
        toggler(initialDialog, 'raw-cookie__dialog--hidden');
        mirrorState(state);
    }

    function handleInfoSave() {
        checkPrefs(checkboxes.infoDialog);
        setUserPrefs(state.userPrefs);
        handleInfoToggle();
        mirrorState(state);
    }

    function handleAcceptAll() {
        state.userPrefs = {
            necessary: true,
            marketing: true,
            personalisation: true,
            analytics: true,
        };
        mirrorState(state);
        setUserPrefs(state.userPrefs);
    }

    function handleInfoToggle() {
        mirrorState(state);
        if (infoDialog.classList.contains('raw-cookie__info-dialog--open')) {
            infoDialogWrapper.classList.add(
                'raw-cookie__info-dialog__wrapper--hidden',
            );
            infoDialog.classList.remove('raw-cookie__info-dialog--open');
        } else {
            infoDialog.classList.add('raw-cookie__info-dialog--open');
            infoDialogWrapper.classList.remove(
                'raw-cookie__info-dialog__wrapper--hidden',
            );
        }
    }

    /**
     * Toggle Open/Close
     *
     * @param {Object} Target
     * @param {String} ClassToToggle
     */

    function toggler(target, className) {
        if (target.classList.contains(className)) {
            target.classList.remove(className);
        } else {
            target.classList.add(className);
        }
    }

    /*--------------------------------------------------------------
    ## Event Listeners
    --------------------------------------------------------------*/

    infoDialogClose.addEventListener('click', handleInfoToggle);
    infoDialogSave.addEventListener('click', handleInfoSave);

    dialogSave.addEventListener('click', handleSave);
    accept.addEventListener('click', handleAcceptAll);

    cookieToggleButton.addEventListener('click', handleInfoToggle);

    /*--------------------------------------------------------------
    ## Init Actions
    --------------------------------------------------------------*/

    function onInit() {
        let cookies = getCookies();
        if (cookies.RAWCOOKIE) {
            state.hasPrefs = true;
            const prefsToSet = cookies.RAWCOOKIE.split(',')
                .map((cookie) => cookie.split('='))
                .reduce(
                    (accumulator, [key, value]) => ({
                        ...accumulator,
                        [key.trim()]: convertStringToBool(value),
                    }),
                    {},
                );
            state.userPrefs = prefsToSet;
            mirrorState(state);
            checkPrefs(checkboxes.infoDialog);
        } else {
            mirrorState(state);
        }
    }
    onInit();
}

export default App;
