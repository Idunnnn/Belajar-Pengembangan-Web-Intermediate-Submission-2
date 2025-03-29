import LoginPresenter from './login-presenter';
import * as StoryAPI from '../../../data/api';
import * as AuthModel from '../../../utils/auth';

export default class LoginPage {
  #presenter = null;

  render() {
    return `
      <section id="login"class="flex justify-center items-center min-h-screen">
      
        <article class="px-10 py-8 lg:bg-zinc-900 lg:rounded-2xl" style="max-width: 500px; width: 100%;">

          <div class="flex justify-center items-center">
          <img src="/images/logo.png" width="75px">
          </div>
          <h1 class="text-center form-header">Welcome back</h1>
          <p class="text-center text-sm mt-1">Glad to see you again</p>
          <p class="text-center text-sm">Login to your account below</p>

          <form id="login-form" class="mt-7 flex flex-col gap-5">
            <div class="form-control">
              <label for="email-input" >Email</label>
                <input id="email-input" class="input-control"
                type="email" name="email" placeholder="Contoh: nama@email.com" >
            </div>
            <div class="form-control">
              <label for="password-input">Password</label> 
                <input id="password-input" class="input-control"
                type="password" name="password" placeholder="Masukkan password Anda">
            </div>
           
            <div id="submit-button-container" class="mt-3">
              <button id="login-button" class="primary-btn w-full" type="submit" >Login</button>
            </div>
            <p class="text-center text-sm">Don't have an account? <a href="#/register" class="text-blue-500">Sign up for free</a></p>
            
          </form>
        </article>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new LoginPresenter({
      view: this,
      model: StoryAPI,
      authModel: AuthModel,
    });

    this.#setupForm();
  }

  #setupForm() {
    document.getElementById('login-form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        email: document.getElementById('email-input').value,
        password: document.getElementById('password-input').value,
      };

      await this.#presenter.getLogin(data);
    });
  }

  loginSuccessfully(message) {
    console.log(message);

    // Redirect
    location.hash = '/';
  }

  loginFailed(message) {
    alert(message);
  }

  showSubmitLoadingButton() {
    document.getElementById('submit-button-container').innerHTML = `
      <button class="primary-btn w-full cursor-not-allowed">
        <svg class="mx-auto size-6 animate-spin text-blue-500" xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24"><circle class="opacity-[10%]" cx="12" cy="12" r="10" stroke="currentColor" 
          stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
      </button>
    `;
  }

  hideSubmitLoadingButton() {
    document.getElementById('submit-button-container').innerHTML = `
      <button id="login-button" class="primary-btn w-full" type="submit">Login</button>
    `;
  }
}

