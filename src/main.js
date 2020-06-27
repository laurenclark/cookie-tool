/*--------------------------------------------------------------
## ⚠️ Uncomment this to build the styles in dist.
--------------------------------------------------------------*/
// import './styles/main.sass';

import CookieButton from './components/CookieButton';
import Dialog from './components/Dialog';
import InfoDialog from './components/InfoDialog';
import compiled from './compiledCSS';

import App from './app';

const state = {
    hasPrefs: false,
    userPrefs: {
        necessary: true,
        marketing: true,
        personalisation: true,
        analytics: true,
    },
};

const config = {
    analyticsCode: 'UA-9333142-1',
    analyticsScripts: 'https://www.google-analytics.com/analytics.js',
    marketingScripts:
        'https://js.driftt.com/include/1593265200000/fbthhes9t4e7.js"',
};

const template = document.createElement('div');
template.className = 'raw-cookie';
template.innerHTML = `
        ${Dialog()}
        ${CookieButton()}
        ${InfoDialog()}
    `;

const styleTemplate = document.createElement('style');
styleTemplate.innerHTML = compiled;

document.head.appendChild(styleTemplate);
document.body.insertBefore(template, document.body.firstChild);

window.addEventListener('DOMContentLoaded', function onLoad() {
    // Init
    console.info('RawCookie Initialised');
    App(state, config);
});
