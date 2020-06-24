function Dialog() {
    const template = `<aside class="raw-cookie__dialog">
        <span>
            This website stores data such as cookies to enable important site
            functionality including analytics, targeting, and personalization. You
            may alter your preferences at any time or accept the default settings.
            <a
                href="https://www.rawnet.com/privacy-policy"
                class="raw-cookie__content-link"
                target="_blank">
                data storage policy
            </a>
        </span>

        <ul id="dialog" class="raw-cookie__dialog-list">
            <li class="raw-cookie__dialog-list-item">
                <label
                    class="raw-cookie__toggle"
                    title="Marketing"
                    for="rawCookieMarketing">
                    <input
                        id="rawCookieMarketing"
                        class="raw-cookie__toggle-checkbox"
                        data-category="marketing"
                        type="checkbox"
                    />
                    <span class="raw-cookie__toggle-switch"></span>
                    <span class="raw-cookie__toggle-label raw-cookie__label">
                        Marketing
                    </span>
                </label>
            </li>
            <li class="raw-cookie__dialog-list-item">
                <label
                    class="raw-cookie__toggle"
                    title="Personalisation"
                    for="rawCookiePersonalisation">
                    <input
                        id="rawCookiePersonalisation"
                        class="raw-cookie__toggle-checkbox"
                        data-category="personalisation"
                        type="checkbox"
                    />
                    <span class="raw-cookie__toggle-switch"></span>
                    <span class="raw-cookie__toggle-label raw-cookie__label">
                        Personalisation
                    </span>
                </label>
            </li>
            <li class="raw-cookie__dialog-list-item">
                <label
                    class="raw-cookie__toggle"
                    title="Analytics"
                    for="rawCookieAnalytics">
                    <input
                        id="rawCookieAnalytics"
                        class="raw-cookie__toggle-checkbox"
                        data-category="analytics"
                        type="checkbox"
                    />
                    <span class="raw-cookie__toggle-switch"></span>
                    <span class="raw-cookie__toggle-label raw-cookie__label">
                        Analytics
                    </span>
                </label>
            </li>
        </ul>
        <div class="raw-cookie__button-container">
            <button class="raw-cookie__button" id="rawCookieSave">
                Save
            </button>
            <button class="raw-cookie__button" id="rawCookieAccept">
                Accept All
            </button>
        </div>
    </aside>`;

    return template;
}

export default Dialog;
