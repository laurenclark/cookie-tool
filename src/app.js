import CookieButton from './components/CookieButton';
import Dialog from './components/Dialog';
// import InfoDialog from './components/InfoDialog';

async function App() {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="raw-cookie">
            ${Dialog()}
            ${CookieButton()}
        </div>
    `;

    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;
