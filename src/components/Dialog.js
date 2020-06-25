function Dialog() {
    const data = [
        { title: 'Marketing', id: 'rawCookieMarketing' },
        { title: 'Personalisation', id: 'rawCookiePersonalisation' },
        { title: 'Analytics', id: 'rawCookieAnalytics' },
    ];

    const items = data
        .map((item) => {
            return `<li class="raw-cookie__dialog-list-item">
                    <label
                        class="raw-cookie__toggle"
                        title="${item.title}"
                        for="${item.id}">
                        <input
                            id="${item.id}"
                            class="raw-cookie__toggle-checkbox"
                            type="checkbox"
                        />
                        <span class="raw-cookie__toggle-switch"></span>
                        <span class="raw-cookie__toggle-label raw-cookie__label">
                            ${item.title}
                        </span>
                    </label>
                </li>`;
        })
        .join('');

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
            ${items}
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
