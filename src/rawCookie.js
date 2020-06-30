import { State as state } from './config/State';
import { config } from './config/Config';

import App from './app';
import InjectTemplate from './modules/InjectTemplate';
import InjectStyles from './modules/InjectStyles';

window.addEventListener('DOMContentLoaded', function onLoad() {
    // Init
    InjectTemplate(config);
    App(state, config);
    if (process.env.NODE_ENV === 'production') {
        InjectStyles();
    }
});
