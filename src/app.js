function App(state, config) {
    const infoDialogClose = document.getElementById('info-dialog-toggle');
    const infoDialog = document.querySelector('.raw-cookie__info-dialog');
    const infoDialogWrapper = document.querySelector(
        '.raw-cookie__info-dialog__wrapper',
    );
    const infoDialogSave = document.getElementById('infoDialogSave');

    const cookieToggleButton = document.getElementById('cookieToggleButton');

    const initialDialog = document.getElementById('initialDialog');
    const dialogSave = document.getElementById('dialogSave');
    const accept = document.getElementById('rawCookieAccept');

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
     * What to Show User on Load
     *
     * @param {Object} State
     */
    function mirrorState(state) {
        // GET COOKIE
        // IF RAWCOOKIE

        if (state.hasPrefs) {
            handleInfoToggle();
            checkboxes.infoDialog.necessary.setAttribute('checked', true);
            checkboxes.infoDialog.necessary.setAttribute('disabled', true);
            if (!state.userPrefs.marketing) {
                removeMarketingScripts();
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
                removeAnalyticsScripts();
            } else if (state.userPrefs.analytics) {
                checkboxes.infoDialog.analytics.setAttribute('checked', true);
            }
        } else {
            toggler(cookieToggleButton, 'raw-cookie__widget--hidden');
            toggler(initialDialog, 'raw-cookie__dialog--hidden');
        }
    }

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
     * @param {Array}  - Array of cookies
     */

    function setCookies(array) {
        for (let [key, value] of Object.entries(array)) {
            document.cookie = `${key}=${value}`;
        }
    }

    function checkPrefs(obj) {
        const { marketing, personalisation, analytics } = obj;
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
     * Set User Prefs
     *
     * @param {Obj}  -  Deserialised Cookie Obj
     */

    function setUserPrefs(userPrefs) {
        state.hasPrefs = true;
        // Get the users cookie preferences if they have any
        // Set the cookie for a year and remember it
        return;
    }

    function removeAnalyticsScripts() {
        // Disables GA Tracking
        window[`ga-disable-${config.analyticsCode}`] = true;

        console.log('removed analytics scripts');
    }

    function removeMarketingScripts() {}

    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }

    function removeCookie(id) {
        document.cookie = `${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"`;
    }

    /*--------------------------------------------------------------
    ## Event Handlers
    --------------------------------------------------------------*/

    function handleSave() {
        checkPrefs(checkboxes.dialog);
        // setUserPrefs();
        toggler(cookieToggleButton, 'raw-cookie__widget--hidden');
        toggler(initialDialog, 'raw-cookie__dialog--hidden');
        mirrorState(state);
    }

    function handleInfoSave() {
        checkPrefs(checkboxes.infoDialog);
        // setUserPrefs();
        handleInfoToggle();
    }

    function handleAcceptAll() {
        state.userPrefs.marketing = true;
        state.userPrefs.personalisation = true;
        state.userPrefs.analytics = true;
        setUserPrefs();
        mirrorState(state);
        toggler(cookieToggleButton, 'raw-cookie__widget--hidden');
        toggler(initialDialog, 'raw-cookie__dialog--hidden');
    }

    function handleInfoToggle() {
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

    dialogSave.addEventListener('click', handleSave);
    infoDialogSave.addEventListener('click', handleInfoSave);

    accept.addEventListener('click', handleAcceptAll);
    infoDialogClose.addEventListener('click', handleInfoToggle);
    cookieToggleButton.addEventListener('click', handleInfoToggle);

    /*--------------------------------------------------------------
    ## Init Actions
    --------------------------------------------------------------*/

    mirrorState(state);
    // IF HasPrefs is TRUE
    // And Marketing || Personalistion || Analytics === false
    // Expire cookies and remove scripts for each
}

export default App;
