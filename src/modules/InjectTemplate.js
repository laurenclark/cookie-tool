import CookieButton from '../components/CookieButton';
import Dialog from '../components/Dialog';
import InfoDialog from '../components/InfoDialog';
import { config } from '../config/Config';

export default function InjectTemplate() {
    const template = document.createElement('div');
    template.className = 'raw-cookie';
    template.innerHTML = `
        ${Dialog(config)}
        ${CookieButton()}
        ${InfoDialog(config)}
    `;
    document.body.insertBefore(template, document.body.firstChild);
}
