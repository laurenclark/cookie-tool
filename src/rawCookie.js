import { State as state } from './config/State';
import { config } from './config/Config';

import App from './app';
import InjectTemplate from './modules/InjectTemplate';
import InjectStyles from './modules/InjectStyles';
import * as colors from './modules/CustomColors';

window.addEventListener('DOMContentLoaded', function onLoad() {
    // Init
    InjectTemplate(config);
    if (process.env.NODE_ENV === 'production') {
        InjectStyles();
    }
    App(state, config, colors);
});
