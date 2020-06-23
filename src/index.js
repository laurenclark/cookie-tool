const cookiesToSet = {
    DFTT_END_USER_PREV_BOOTSTRAPPED: "true",
    driftt_aid: "31163cee-69d7-404e-b58f-a98fe9fe3200",
    _ga: "GA1.1.1786990352.1592825396",
    "_gat_UA-9333142-1": "1",
    _gid: "GA1.1.630008955.1592825401",
};

const marketingElem = document.getElementById("rawCookieMarketing");
const personalisationElem = document.getElementById("rawCookiePersonalisation");
const analyticsElem = document.getElementById("rawCookieAnalytics");
const save = document.getElementById("rawCookieSave");
const accept = document.getElementById("rawCookieAccept");

const cookies = getCookies();

function getCookies() {
    return document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce(
            (accumulator, [key, value]) => ({
                ...accumulator,
                [key.trim()]: decodeURIComponent(value),
            }),
            {}
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
    if (marketingElem.checked) {
        console.log("marketing is checked");
        // Remove cookies which are not marketing
    }
    if (personalisationElem.checked) {
        console.log("personalisation is checked");
        // Remove cookies which are not personalisation
    }
    if (analyticsElem.checked) {
        console.log("analytics is checked");
        // Remove cookies which are not analyrics
    }

    // Create an object with Marketing/Analytics/DenyAll
}

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
    console.log("Save Clicked");
    getUserPrefs();
    // setUserPrefs();
}

function handleAcceptAll() {
    // Set cookie with year expire for all cookies, plus the preference.
    console.log("Accept Clicked");
}

save.addEventListener("click", handleSave);
accept.addEventListener("click", handleAcceptAll);

setCookies(cookiesToSet);
console.log(cookies);
