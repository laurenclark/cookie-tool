function Dialog(config) {
    const items = config.initialDialog
        .map((item) => {
            return `<li class="raw-cookie__dialog-list-item">
                        <label
                            class="raw-cookie__toggle"
                            title="${item.title}"
                            for="${item.id}">
                            <input
                                id="${item.id}"
                                class="raw-cookie__toggle-checkbox ${item.title.toLowerCase()}-checkbox"
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

    const template = `<aside id="initialDialog" class="raw-cookie__dialog raw-cookie__dialog--hidden">
        <span>
            ${config.settings.privacy_policy_description}
            <a
                href="${config.settings.privacy_policy_url}"
                class="raw-cookie__content-link"
                target="_blank">
                ${config.settings.privacy_policy_text}
            </a>
        </span>

        <ul id="dialog" class="raw-cookie__dialog-list">
            ${items}
        </ul>
        <div class="raw-cookie__button-container">
            <button id="dialogSave" class="raw-cookie__button raw-cookie-save">
                ${config.settings.save_text}
            </button>
            <button id="rawCookieAccept" class="raw-cookie__button">
                ${config.settings.accept_all_text}
            </button>
        </div>
    </aside>`;

    return template;
}

export default Dialog;
