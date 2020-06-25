require('details-polyfill');

function InfoDialog() {
    const template = `
    <div class="raw-cookie__info-dialog__wrapper">
        <div class="raw-cookie__info-dialog raw-cookie__info-dialog--open">
            <div class="raw-cookie__info-dialog__header">
                <button class="raw-cookie__info-dialog__close" tabindex="0">
                    <svg
                        aria-role="button"
                        width="20px"
                        height="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 25 25"
                    >
                        <title>Close Icon</title>
                        <polygon
                            class="x"
                            points="25 0.71 24.29 0 12.5 11.79 0.71 0 0 0.71 11.79 12.5 0 24.29 0.71 25 12.5 13.21 24.29 25 25 24.29 13.21 12.5 25 0.71"
                        ></polygon>
                    </svg>
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
                            <!-- HARDCODE COOKIES HERE -->
                        </ul>
                        <ul
                            data-type="scripts"
                            class="raw-cookie__disclosure __list"
                        >
                            <!-- HARDCODE SCRIPTS HERE -->
                        </ul>
                    </details>
                </li>
            </ul>
            <button class="raw-cookie__button--full" id="rawCookieInfoSave">
                Save
            </button>
        </div>
    </div>`;

    return template;
}

export default InfoDialog;
