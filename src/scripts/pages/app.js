import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';
import { getAccessToken, getLogout } from '../utils/auth';
import { generateSubscribeButtonTemplate, generateUnsubscribeButtonTemplate } from '../templates';
import {isSubscribed, toggleSubscribe } from '../utils/notification-handler';
import { isServiceWorkerAvailable } from '../utils';
class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;

    this.#setupDrawer();
    this.#setupPushNotification();
  }

  #setupDrawer() {
    this.#drawerButton.addEventListener('click', () => {
      this.#navigationDrawer.classList.toggle('open');
    });

    document.body.addEventListener('click', (event) => {
      if (
        !this.#navigationDrawer.contains(event.target) &&
        !this.#drawerButton.contains(event.target)
      ) {
        this.#navigationDrawer.classList.remove('open');
      }

      this.#navigationDrawer.querySelectorAll('a').forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove('open');
        }
      });
    });

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', (event) => {
      event.preventDefault();

      if (confirm('Are you sure you want to logout?')) {
        getLogout();

        // Redirect
        location.hash = '/login';
      }


    });
  }

  async #setupPushNotification() {
    const pushNotificationTools = document.getElementById('subscribe-button-container');
    const subscribed = await isSubscribed();

    if (subscribed) {
      pushNotificationTools.innerHTML = generateUnsubscribeButtonTemplate();
    }else{
      pushNotificationTools.innerHTML = generateSubscribeButtonTemplate();
    }

    document.getElementById("subscribe-button-container").addEventListener("click", function () {
      toggleSubscribe();
    });
  }

  async renderPage() {
    const isLogin = !!getAccessToken();
    if (!isLogin) {
      document.querySelector('header').style.display = "none";
    } else {
      document.querySelector('header').style.display = "block";
    }

    const url = getActiveRoute();
    let route = routes[url];

    if(route === undefined){
      route = routes['/404'];
    }

    const page = route();



    if (!document.startViewTransition) {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
      return;
    }

    const transition = document.startViewTransition(async () => {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
    });

    transition.updateCallbackDone.then(() => {
      scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}

export default App;
