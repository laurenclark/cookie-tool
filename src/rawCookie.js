/*--------------------------------------------------------------
## ⚠️ Uncomment this to build the styles in dist.
## Comment it out for development if not editing styles.
## TODO - Put this in some environment conditional.
--------------------------------------------------------------*/
import './styles/main.sass';

import { State as state } from './config/State';
import { config } from './config/Config';

import App from './app';
import InjectTemplate from './modules/InjectTemplate';
import InjectStyles from './modules/InjectStyles';

window.addEventListener('DOMContentLoaded', function onLoad() {
    // Init
    InjectTemplate(config);
    App(state, config);
    // InjectStyles();
});
