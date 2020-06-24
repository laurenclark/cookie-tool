import CookieButton from './components/CookieButton';
import Dialog from './components/Dialog';
import Core from './core';
// import InfoDialog from './components/InfoDialog';

async function App() {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="container">
        ${Dialog()}
        ${CookieButton()}
    </div>
  `;
    // Return a new node from template
    return template.content.cloneNode(true);

    await Core();
}

export default App;
