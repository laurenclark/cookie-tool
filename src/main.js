import './styles/main.sass';
import App from './App';

const app = async () => {
    document.body.insertBefore(await App(), document.body.firstChild);
};
// Load app
app();
