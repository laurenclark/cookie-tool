const cookiesToSet = {
    DFTT_END_USER_PREV_BOOTSTRAPPED: "true",
    driftt_aid: "31163cee-69d7-404e-b58f-a98fe9fe3200",
    _ga: "GA1.1.1786990352.1592825396",
    "_gat_UA-9333142-1": "1",
    _gid: "GA1.1.630008955.1592825401",
};

const dialog = document.getElementById("dialog");

const cookies = getCookies();
// const marketingCookies = []; // Filter by "_g"
// const analyticsCookies = []; // DFTT & driftt

function setCookies() {
    for (let [key, value] of Object.entries(cookiesToSet)) {
        document.cookie = `${key}=${value}`;
    }
}

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

function getUserPrefs() {
    // See what toggles are on
    // Create an object with Marketing/Analytics/DenyAll
}

function setUserPrefs(userPrefs) {
    // Get the users cookie preferences if they have any
    // Set the cookie for a year and remember it
    return;
}

function removeCookie(cookieType) {}

setCookies();
console.log(cookies);
