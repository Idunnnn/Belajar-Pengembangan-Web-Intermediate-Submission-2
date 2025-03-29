// CSS imports
import '../styles/styles.css';
import App from './pages/app';
import { registerServiceWorker, stopAllStreams } from './utils';

window.stream = null;

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.querySelector('#main-content'),
    drawerButton: document.querySelector('#drawer-button'),
    navigationDrawer: document.querySelector('#navigation-drawer'),
  });
  await app.renderPage();

  await registerServiceWorker();

  window.addEventListener('hashchange', async () => {
    stopAllStreams();
    await app.renderPage();
  });


});

window.addEventListener('click', (event) => {
  if (event.target.id === "close-message") {
    event.target.closest('#message').remove();
  }

  if (event.target.id === "drawer-button") {
    const navbar = event.target.parentElement.querySelector('#navigation-drawer');
    navbar.classList.toggle('hidden');
    navbar.classList.toggle('opacity-0');
  }
});





