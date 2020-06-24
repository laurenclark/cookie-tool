import './styles/main.sass';

import App from './App';
import Core from './core';

async function app() {
    document.body.insertBefore(await App(), document.body.firstChild);
    Core();
}

app();
