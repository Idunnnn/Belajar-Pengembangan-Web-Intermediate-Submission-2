import RegisterPresenter from './register-presenter';
import * as StoryAPI from '../../../data/api';

export default class RegisterPage {
  #presenter = null;

  async render() {
    return `
      <section class="flex justify-center items-center min-h-screen">

        <div class="lg:bg-zinc-900 lg:rounded-2xl px-10 py-8" style="max-width: 500px; width: 100%;">
          
          <img src="/images/logo.png" width="75px">
          <h1 class="form-header">Sign Up</h1>
          <p class="text-sm mt-1">Enter your detail below to create your account and get started</p>

          <form id="register-form" class="mt-7 flex flex-col gap-5">
            <div class="form-control">
              <label for="name-input">Full Name</label>
              <input required  id="name-input" type="text" name="name" class="input-control" placeholder="Enter your full name">     
            </div>
            <div class="form-control">
              <label for="email-input">Email</label>
              <input required id="email-input" type="email" name="email" class="input-control"  placeholder="Example: name@email.com">           
            </div>
            <div class="form-control">
              <label for="password-input">Password</label>
              <input required id="password-input" type="password" name="password" class="input-control" placeholder="Enter new password">   
            </div>
            
              <div id="submit-button-container" class="mt-3">
                <button class="primary-btn w-full" type="submit">Daftar akun</button>
              </div>
              <p class="text-center text-sm">Already have an account? <a href="#/login" class="text-blue-500">Login</a></p>
           
          </form>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new RegisterPresenter({
      view: this,
      model: StoryAPI,
    });

    this.#setupForm();
  }

  #setupForm() {
    document.getElementById('register-form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        name: document.getElementById('name-input').value,
        email: document.getElementById('email-input').value,
        password: document.getElementById('password-input').value,
      };
      
      await this.#presenter.getRegistered(data);
    });
  }

  registeredSuccessfully(message) {
    console.log(message);

    // Redirect
    location.hash = '/login';
  }

  registeredFailed(message) {
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
      <button class="primary-btn w-full" type="submit">Daftar akun</button>
    `;
  }
}
