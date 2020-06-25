import './styles/main.sass';
import CookieButton from './components/CookieButton';
import Dialog from './components/Dialog';
import InfoDialog from './components/InfoDialog';
import App from './app';

const template = document.createElement('div');
template.className = 'raw-cookie';
template.innerHTML = `
        ${Dialog()}
        ${CookieButton()}
        ${InfoDialog()}
    `;

document.body.insertBefore(template, document.body.firstChild);
App();
