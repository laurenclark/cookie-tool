function App() {
    const cookiesToSet = {
        DFTT_END_USER_PREV_BOOTSTRAPPED: 'true',
        driftt_aid: '31163cee-69d7-404e-b58f-a98fe9fe3200',
        _ga: 'GA1.1.1786990352.1592825396',
        '_gat_UA-9333142-1': '1',
        _gid: 'GA1.1.630008955.1592825401',
    };

    const marketingElem = document.getElementById('rawCookieMarketing');
    const personalisationElem = document.getElementById(
        'rawCookiePersonalisation',
    );
    const analyticsElem = document.getElementById('rawCookieAnalytics');
    const infoDialogClose = document.getElementById('info-dialog-toggle');
    const infoDialog = document.querySelector('.raw-cookie__info-dialog');
    const infoDialogWrapper = document.querySelector(
        '.raw-cookie__info-dialog__wrapper',
    );
    const cookieToggleButton = document.getElementById('cookieToggleButton');
    const save = document.getElementById('rawCookieSave');
    const accept = document.getElementById('rawCookieAccept');

    const cookies = getCookies();

    function getCookies() {
        return document.cookie
            .split(';')
            .map((cookie) => cookie.split('='))
            .reduce(
                (accumulator, [key, value]) => ({
                    ...accumulator,
                    [key.trim()]: decodeURIComponent(value),
                }),
                {},
            );
    }

    /**
     * Set Cookies
     *
     * @param {Array}  - Array of cookies
     */

    function setCookies(array) {
        for (let [key, value] of Object.entries(array)) {
            document.cookie = `${key}=${value}`;
        }
    }

    function getUserPrefs() {
        if (!marketingElem.checked) {
            console.log('marketing is not checked');
            // Remove cookies which are not marketing
        }
        if (!personalisationElem.checked) {
            console.log('personalisation is not checked');
            // Remove cookies which are not personalisation
        }
        if (!analyticsElem.checked) {
            console.log('analytics is not checked');
            // Remove cookies which are not analyrics
        }

        // Create an object with Marketing/Analytics/DenyAll
    }

    /**
     * Set Cookies
     *
     * @param {Obj}  -  Deserialised Cookie Obj
     */

    function setUserPrefs(userPrefs) {
        // Get the users cookie preferences if they have any
        // Set the cookie for a year and remember it
        return;
    }

    function removeScripts() {
        // Analytics is easy
        // Drift would remove the chat?
    }

    function handleSave() {
        console.log('Save Clicked');
        getUserPrefs();
        // setUserPrefs();
        handleDialogToggle();
    }

    function handleAcceptAll() {
        // Set cookie with year expire for all cookies, plus the preference.
        console.log('Accept Clicked');
        // setUserPrefs();
        handleDialogToggle();
    }

    // If no userPrefs cookie then show the small dialog.
    // If userPrefs show the cookie button
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

    function handleDialogToggle() {}

    function intialState() {
        // IF user [hasPrefs]
        // SHOW cookie button
        // ELSE show dialog
    }

    save.addEventListener('click', handleSave);
    accept.addEventListener('click', handleAcceptAll);
    infoDialogClose.addEventListener('click', handleInfoToggle);

    setCookies(cookiesToSet);
    console.log(cookies);
}

export default App;
