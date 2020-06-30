import cookie from '../assets/cookie';
function CookieButton() {
    const template = `<button id="cookieToggleButton" class="raw-cookie__widget">
        ${cookie}
    </button>`;

    return template;
}

export default CookieButton;
