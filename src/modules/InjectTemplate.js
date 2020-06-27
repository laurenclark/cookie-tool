import CookieButton from '../components/CookieButton';
import Dialog from '../components/Dialog';
import InfoDialog from '../components/InfoDialog';

export default function InjectTemplate() {
    const template = document.createElement('div');
    template.className = 'raw-cookie';
    template.innerHTML = `
        ${Dialog()}
        ${CookieButton()}
        ${InfoDialog()}
    `;
    document.body.insertBefore(template, document.body.firstChild);
}
