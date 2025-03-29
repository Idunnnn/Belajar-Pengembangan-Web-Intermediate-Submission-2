import * as storyAPI from "../../data/api.js"
import { ErrorMessageTemplate } from "../../templates.js";
import Camera from "../../utils/Camera.js";
import Map from "../../utils/Map.js";
import CreateStoryPresenter from "./createStory-presenter.js";

export default class CreateStoryPage {
    #presenter = null;
    #map = null;
    #camera = null;
    #storyImage = null;

    async render() {
        return `
            <div class="flex justify-center w-full stabilize-top pb-10 id="first-main-content-item">
                <form id="create-story-form" class="flex flex-col responsive" style="max-width: 900px; width: 100%">
                    <h1 class="form-header mb-3">Create story</h1>

                    <div class="flex flex-col gap-5">
                    <div class="form-control">
                        <label for="story-description">Description</label>
                        <textarea
                        type="text"
                        id="story-description"
                        class="input-control"
                        name="story-description"
                        placeholder="Once upon a time, in a faraway kingdom, a beautiful princess named Snow White lived with her wicked stepmother..."
                        style="height: 300px"
                        ></textarea>
                    </div>
                    </div>

                    <div class="flex flex-col mt-5">
                        <p>Image</p>
                        <p class="text-sm text-zinc-600">Input your image using 2 option below</p>

                        <div class="flex gap-3 mt-2">
                            <label for="open-folder" class="input-image-control">Open folder</label>
                            <input type="file" id="open-folder" class="hidden" accept="image/*" aria-hidden="true"/>
                            <button type="button" id="open-camera-btn" class="input-image-control">Open camera</button>
                        </div>

                        <div id="camera-review-container" class="mt-3 rounded-lg border border-zinc-700 p-3 hidden">
                            <video id="camera-review" autoplay></video>
                            <button id="take-picture-btn" type="button" class="input-image-control mt-3">Take</button>
                        </div>
                    </div>

                    <div>
                        <canvas id="canvas" class="mt-5 hidden"></canvas>
                        <img class="hidden mt-5" style="height: 250px" id="image-preview" />
                    </div>

                    <div class="mt-4">Location</div>
                    <div id="story-location" class="mt-5 z-0" style="height: 400px"></div>
                        <div class="flex gap-2 items-center mt-2">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
                                    fill="#71717b"
                                ></path>
                                </g>
                            </svg>

                            <div class="flex gap-2">
                                <input id="location-lat" type="text" class="input-control mt-2 bg-zinc-900" value="-0.5341981739396645" aria-disabled disabled />
                                <input id="location-lng" type="text" class="input-control mt-2 bg-zinc-900" value="117.12302541745886" aria-disabled disabled />
                            </div>
                        </div>

                    <div class="flex gap-3 mt-7">
                    <a href="#/" class="py-2 px-3 rounded border flex gap-1 items-center"
                        ><svg fill="#71717b" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                            d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"
                            ></path>
                        </g>
                        </svg>
                        <span>Back</span></a>

                    <div id="submit-button-container">
                        <button type="submit" class="primary-btn flex items-center">
                            <span>Create</span>
                            <svg viewBox="0 0 24 24" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z"
                                fill="#09090b"
                                ></path>
                            </g>
                            </svg>
                        </button>
                    </div>

                    </div>
                </form>
                </div>
        `;
    }

    async afterRender() {
        this.#presenter = new CreateStoryPresenter({
            view: this,
            model: storyAPI,
        })
        await this.#setupMap();
        await this.#setupCamera();
        await this.#setupForm();
        this.#setupOpenFolder();
    }

    async #setupMap() {
        this.#map = new Map({
            containerId: document.getElementById('story-location'),
            lat: -0.5341981739396645,
            lng: 117.12302541745886,
            draggable: true,
        })

        await this.#map.mark({lat: -0.5341981739396645, lng: 117.12302541745886, option: {draggable: true}});
        this.#map.initEvent();
    }

    async #setupCamera() {
        document.getElementById('open-camera-btn').addEventListener('click',
            async () => {
                this.#camera = new Camera({
                    video: document.getElementById('camera-review'),
                    videoContainer: document.getElementById('camera-review-container'),
                    openButton: document.getElementById('open-camera-btn'),
                    canvas: document.getElementById('canvas'),
                    imagePreview: document.getElementById('image-preview'),
                });

                this.#camera.toggle();
            }
        );

        document.getElementById('take-picture-btn').addEventListener('click', async () => {
            this.#storyImage = await this.#camera.take();
        });
    }

    async #setupForm() {
        document.getElementById('create-story-form').addEventListener('submit', async (event) => {
            event.preventDefault();

            const storyDescription = document.getElementById('story-description').value;
            const lat = document.getElementById('location-lat').value;
            const lon = document.getElementById('location-lng').value;

            const data = new FormData();
            data.append("description", storyDescription);
            data.append("photo", this.#storyImage);
            data.append("lat", lat);
            data.append("lon", lon);

            this.#presenter.createStory(data);
        });
    }

    #setupOpenFolder() {
        const input = document.getElementById('open-folder');
        const preview = document.getElementById('image-preview');

        input.addEventListener('change', () => {
            this.#storyImage = input.files[0];

            if (preview.src) {
                URL.revokeObjectURL(preview.src);
            }

            preview.src = URL.createObjectURL(this.#storyImage);
            preview.style.display = "block";
        });
    }

    createdSuccessfully(message) {
        alert(message);


        location.hash = '/';
    }

    createFailed(message) {
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
          <button type="submit" class="primary-btn flex items-center">
            <span>Create</span>
            <svg viewBox="0 0 24 24" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z"
                fill="#09090b"
                ></path>
            </g>
            </svg>
        </button>
        `;
    }

}