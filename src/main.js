/*--------------------------------------------------------------
## ⚠️ Uncomment this to build the styles in dist.
--------------------------------------------------------------*/
// import './styles/main.sass';

import CookieButton from './components/CookieButton';
import Dialog from './components/Dialog';
import InfoDialog from './components/InfoDialog';
import compiledStyles from './compiledStyles';

import App from './app';

const template = document.createElement('div');
template.className = 'raw-cookie';
template.innerHTML = `
        ${Dialog()}
        ${CookieButton()}
        ${InfoDialog()}
    `;

const styles = document.createElement('style');
styles.innerHTML = compiledStyles;

document.head.appendChild(styles);
document.body.insertBefore(template, document.body.firstChild);
App();
