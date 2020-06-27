import InfoDialogData from '../config/InfoDialogData';
import CloseButton from '../assets/close-button.js';
require('details-polyfill');

function InfoDialog() {
    const items = InfoDialogData.map((item) => {
        function titleGetter(string) {
            return string.replace(' ', '-').toLowerCase();
        }
        function cookiesInfo() {
            if (item.cookies) {
                return item.cookies
                    .map((cookie) => {
                        return `<dl class="raw-cookie__cookie-disclosure">
                            <dt class="raw-cookie__disclosure__title">Cookie Name</dt>
                            <dd class="raw-cookie__disclosure__description">${cookie.name}</dd>
                            <dt class="raw-cookie__disclosure__title">Provider</dt>
                            <dd class="raw-cookie__disclosure__description">${cookie.provider}</dd>
                            <dt class="raw-cookie__disclosure__title">Expiry</dt>
                            <dd class="raw-cookie__disclosure__description">${cookie.expiry}</dd>
                            <dt class="raw-cookie__disclosure__title">Purpose</dt>
                            <dd class="raw-cookie__disclosure__description">${cookie.purpose}</dd>
                        </dl>`;
                    })
                    .join('');
            } else {
                return `<p>No Disclosures</p>`;
            }
        }
        return `<li class="raw-cookie__list-item">
                <label class="raw-cookie__toggle"
                    for="${titleGetter(item.title)}">
                    <input
                        class="raw-cookie__toggle-checkbox ${titleGetter(
                            item.title,
                        )}-checkbox"
                        id="${titleGetter(item.title)}"
                        type="checkbox"
                    />
                    <span class="raw-cookie__toggle-switch"></span>
                    <span class="raw-cookie__toggle-label raw-cookie-label">
                        ${item.title}
                    </span>
                </label>

                <div class="raw-cookie__info-dialog__description">
                    ${item.description}
                </div>
                <details class="raw-cookie__disclosure raw-cookie__disclosure--collapse">
                    <summary class="raw-cookie__disclosure__toggle">
                        Disclosure
                    </summary>
                    <ul data-type="cookies"class="raw-cookie__disclosure__list">
                        <li class="raw-cookie__list-item">
                            ${cookiesInfo()}
                        </li>
                    </ul>
                </details>
            </li>`;
    }).join('');

    const template = `
        <div class="raw-cookie__info-dialog__wrapper raw-cookie__info-dialog__wrapper--hidden">
            <div class="raw-cookie__info-dialog">
                <div class="raw-cookie__info-dialog__header">
                    <button id="info-dialog-toggle" class="raw-cookie__info-dialog__close" tabindex="0">
                    ${CloseButton}
                    </button>
                    <p class="raw-cookie__info-dialog__header-title">
                        Storage Preferences
                    </p>
                    <p class="raw-cookie__info-dialog__header-description">
                        When you visit web sites, they may store or retrieve
                        data in your web browser. This storage is often
                        necessary for basic functionality of the web site or the
                        storage may be used for the purposes of marketing,
                        analytics, and personalization of the web site such as
                        storing your preferences. Privacy is important to us so
                        you have the option of disabling certain types of
                        storage that may not be necessary to the basic
                        functioning of the web site. Blocking categories may
                        impact your experience on the web site.
                    </p>
                </div>
                <ul class="raw-cookie__list">
                    ${items}
                </ul>
                <button id="infoDialogSave" class="raw-cookie__button--full">
                    Save
                </button>
            </div>
        </div>`;

    return template;
}

export default InfoDialog;
