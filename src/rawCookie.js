/*--------------------------------------------------------------
## ⚠️ Uncomment this to build the styles in dist.
--------------------------------------------------------------*/
// import './styles/main.sass';

import CookieButton from './components/CookieButton';
import Dialog from './components/Dialog';
import InfoDialog from './components/InfoDialog';
import compiled from './styles/compiledCSS';
import { State as state } from './config/State';
import { scriptsConfig } from './config/ScriptsConfig';

import App from './app';

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
    App(state, scriptsConfig);
});
