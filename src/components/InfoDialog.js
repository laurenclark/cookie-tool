import InfoDialogData from './InfoDialogData';
import CloseButton from '../assets/close-button.js';
require('details-polyfill');

function InfoDialog() {
    const items = InfoDialogData.map((item) => {
        return `<li class="raw-cookie__list-item">
            <label
                class="raw-cookie__toggle"
                for="${item.title}"
            >
                <input
                    class="raw-cookie__toggle-checkbox"
                    id="${item.title}"
                    type="checkbox"
                />
                <span class="raw-cookie__toggle-switch"></span>
                <span
                    class="raw-cookie__toggle-label raw-cookie-label"
                    >${item.title}</span
                >
            </label>

            <div class="raw-cookie__info-dialog__description">
                ${item.description}
            </div>
            <details
                class="raw-cookie__disclosure raw-cookie__disclosure--collapse"
            >
                <summary class="raw-cookie__disclosure__toggle"
                    >Disclosure</summary
                >
                <ul
                    data-type="cookies"
                    class="raw-cookie__disclosure__list"
                >
                    <li class="raw-cookie__list-item">
                        Cookies: No Disclosures
                            <dl class="osano-cm-list-item__cookie-disclosure osano-cm-cookie-disclosure">
                            <dt class="osano-cm-cookie-disclosure__title osano-cm-title">Cookie Name</dt>
                            <dd class="osano-cm-cookie-disclosure__description osano-cm-description">__hssrc</dd>
                            <dt class="osano-cm-cookie-disclosure__title osano-cm-title">Provider</dt>
                            <dd class="osano-cm-cookie-disclosure__description osano-cm-description">Hubspot Inc</dd>
                            <dt class="osano-cm-cookie-disclosure__title osano-cm-title">Expiry</dt>
                            <dd class="osano-cm-cookie-disclosure__description osano-cm-description">1 Year</dd>
                            <dt class="osano-cm-cookie-disclosure__title osano-cm-title">Purpose</dt>
                            <dd class="osano-cm-cookie-disclosure__description osano-cm-description">Session analytics</dd>
                        </dl>
                    </li>
                </ul>
            </details>
        </li>`;
    }).join('');

    const template = `
    <div class="raw-cookie__info-dialog__wrapper">
        <div class="raw-cookie__info-dialog raw-cookie__info-dialog--open">
            <div class="raw-cookie__info-dialog__header">
                <button class="raw-cookie__info-dialog__close" tabindex="0">
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
                <li class="raw-cookie__list-item">
                    <label
                        class="raw-cookie__toggle"
                        for="d1b75f0e-733c-4665-be91-3579fefb72ea"
                    >
                        <input
                            class="raw-cookie__toggle-checkbox"
                            id="d1b75f0e-733c-4665-be91-3579fefb72ea"
                            type="checkbox"
                            disabled="disabled"
                        />
                        <span class="raw-cookie__toggle-switch"></span>
                        <span
                            class="raw-cookie__toggle-label raw-cookie-label"
                            >Strictly Necessary</span
                        >
                    </label>

                    <div class="raw-cookie__info-dialog__description">
                        Essential in order to enable you to navigate the
                        website and use its features, such as accessing
                        secure areas of the website.
                    </div>
                    <details
                        class="raw-cookie__disclosure raw-cookie__disclosure--collapse"
                    >
                        <summary class="raw-cookie__disclosure__toggle"
                            >Disclosure</summary
                        >
                        <ul
                            data-type="cookies"
                            class="raw-cookie__disclosure__list"
                        >
                            <li class="osano-cm-disclosure__list-item">
                                No Disclosures
                            </li>
                        </ul>
                    </details>
                </li>
            ${items}
            </ul>
            <button class="raw-cookie__button--full" id="rawCookieInfoSave">
                Save
            </button>
        </div>
    </div>`;

    return template;
}

export default InfoDialog;
