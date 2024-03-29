function App(state, config, colors) {
    /*--------------------------------------------------------------
    ## InfoDialog Elements
    --------------------------------------------------------------*/

    const infoDialogElems = {
        dialog: document.querySelector('.raw-cookie__info-dialog'),
        close: document.getElementById('info-dialog-toggle'),
        wrapper: document.querySelector('.raw-cookie__info-dialog__wrapper'),
        save: document.getElementById('infoDialogSave')
    };

    const { dialog: infoDialog } = infoDialogElems;

    /*--------------------------------------------------------------
    ## Cookie Toggle Button
    --------------------------------------------------------------*/
    const cookieToggleButton = document.getElementById('cookieToggleButton');

    /*--------------------------------------------------------------
    ## (Initial) Dialog Elements
    --------------------------------------------------------------*/
    const intialDialogElems = {
        dialog: document.getElementById('initialDialog'),
        privacyLink: document.querySelector('.raw-cookie__content-link'),
        save: document.getElementById('dialogSave'),
        accept: document.getElementById('rawCookieAccept')
    };

    const { dialog: initialDialog } = intialDialogElems;

    /*--------------------------------------------------------------
    ## Checkboxes
    --------------------------------------------------------------*/

    const checkboxes = {
        dialog: {
            marketing: initialDialog.querySelector('.marketing-checkbox'),
            personalisation: initialDialog.querySelector(
                '.personalisation-checkbox'
            ),
            analytics: initialDialog.querySelector('.analytics-checkbox')
        },
        infoDialog: {
            necessary: infoDialog.querySelector('.strictly-necessary-checkbox'),
            marketing: infoDialog.querySelector('.marketing-checkbox'),
            personalisation: infoDialog.querySelector(
                '.personalisation-checkbox'
            ),
            analytics: infoDialog.querySelector('.analytics-checkbox')
        }
    };

    /*--------------------------------------------------------------
    ## Functions
    --------------------------------------------------------------*/

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
                disableMarketing(config);
            } else if (state.userPrefs.marketing) {
                checkboxes.infoDialog.marketing.setAttribute('checked', true);
            }
            if (!state.userPrefs.personalisation) {
                disablePersonalisation(config);
            } else if (state.userPrefs.personalisation) {
                checkboxes.infoDialog.personalisation.setAttribute(
                    'checked',
                    true
                );
            }
            if (!state.userPrefs.analytics) {
                disableAnalytics(config);
            } else if (state.userPrefs.analytics) {
                checkboxes.infoDialog.analytics.setAttribute('checked', true);
            }
        } else {
            toggler(cookieToggleButton, 'raw-cookie__widget--hidden');
            toggler(initialDialog, 'raw-cookie__dialog--hidden');
        }
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
     * Disable Analytics Scripts/Cookies
     *
     * @param {Object} (Config)
     */

    function disableAnalytics(conf) {
        if (conf.scripts.analytics.length > 0) {
            // Disables GA Tracking
            window[`ga-disable-${conf.analyticsCode}`] = true;
            removeScript(conf.scripts.analytics);
        }
        if (conf.cookies.analytics.length > 0) {
            for (let i = 0; conf.cookies.analytics.length < i; i += 1) {
                removeCookie(conf.cookies.analytics[i]);
            }
        }
    }

    /**
     * Disable Personalisation Scripts/Cookies
     *
     * @param {Object} (Config)
     */

    function disablePersonalisation(conf) {
        if (conf.scripts.personalisation.length > 0) {
            removeScript(conf.scripts.personalisation);
        }
        if (conf.cookies.personalisation.length > 0) {
            for (let i = 0; conf.cookies.personalisation.length < i; i += 1) {
                removeCookie(conf.cookies.personalisation[i]);
            }
        }
    }

    /**
     * Disable Marketing Scripts/Cookies
     *
     * @param {String} "https://url.com"
     */

    function disableMarketing(conf) {
        if (conf.scripts.marketing.length > 0) {
            removeScript(conf.scripts.marketing);
        }
        if (conf.cookies.marketing.length > 0) {
            for (let i = 0; conf.cookies.marketing.length < i; i += 1) {
                removeCookie(conf.cookies.marketing[i]);
            }
        }
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
        if (process.env.NODE_ENV === 'production') {
            return (document.cookie = `${name}=${value}; ${expires}; path=/; secure`);
        }

        return (document.cookie = `${name}=${value}; ${expires}; path=/;`);
    }

    /**
     * Remove Cookie (set it to expire)
     * - Note: Effect is on page reload or revisit
     *
     * @param {String} "_ga"
     */

    function removeCookie(id) {
        const expires = 'Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        document.cookie = `${id}=; ${expires}`;
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
                    [key.trim()]: decodeURIComponent(value)
                }),
                {}
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
        }
        return false;
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
            analytics: true
        };
        mirrorState(state);
        setUserPrefs(state.userPrefs);
    }

    function handleInfoToggle() {
        mirrorState(state);
        if (infoDialog.classList.contains('raw-cookie__info-dialog--open')) {
            infoDialogElems.wrapper.classList.add(
                'raw-cookie__info-dialog__wrapper--hidden'
            );
            infoDialog.classList.remove('raw-cookie__info-dialog--open');
        } else {
            infoDialog.classList.add('raw-cookie__info-dialog--open');
            infoDialogElems.wrapper.classList.remove(
                'raw-cookie__info-dialog__wrapper--hidden'
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
            return target.classList.remove(className);
        }
        return target.classList.add(className);
    }

    /*--------------------------------------------------------------
    ## Event Listeners
    --------------------------------------------------------------*/

    infoDialogElems.close.addEventListener('click', handleInfoToggle);
    infoDialogSave.addEventListener('click', handleInfoSave);

    dialogSave.addEventListener('click', handleSave);
    intialDialogElems.accept.addEventListener('click', handleAcceptAll);

    cookieToggleButton.addEventListener('click', handleInfoToggle);

    /*--------------------------------------------------------------
    ## Custom Colors
    --------------------------------------------------------------*/
    infoDialog.style.background = colors.infoBG;
    infoDialog.style.color = colors.infoFG;
    infoDialogElems.close.style.fill = colors.infoFG;
    initialDialog.style.background = colors.dialogBG;
    initialDialog.style.color = colors.dialogFG;
    intialDialogElems.privacyLink.style.color = colors.link;
    dialogSave.style.background = colors.buttonBG;
    intialDialogElems.accept.style.background = colors.buttonBG;
    infoDialogSave.style.background = colors.buttonBG;
    dialogSave.style.color = colors.buttonFG;
    intialDialogElems.accept.style.color = colors.buttonFG;
    infoDialogSave.style.color = colors.buttonFG;

    /*--------------------------------------------------------------
    ## Init Actions
    --------------------------------------------------------------*/
    (function onInit() {
        let cookies = getCookies();
        if (cookies.RAWCOOKIE) {
            state.hasPrefs = true;
            const prefsToSet = cookies.RAWCOOKIE.split(',')
                .map((cookie) => cookie.split('='))
                .reduce(
                    (accumulator, [key, value]) => ({
                        ...accumulator,
                        [key.trim()]: convertStringToBool(value)
                    }),
                    {}
                );
            state.userPrefs = prefsToSet;
            mirrorState(state);
            checkPrefs(checkboxes.infoDialog);
        } else {
            mirrorState(state);
        }
    })();
}

export default App;
