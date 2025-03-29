import { generateStoryDetailTemplate, LoadingTemplate } from "../../templates";
import DetailStoryPresenter from "./detailStory-presenter.js";
import * as storyAPI from "../../data/api.js"
import Map from "../../utils/Map.js";
import Database from "../../data/database";
import { srcToImage } from "../../utils/index.js";

export default class DetailStoryPage {
    #map;
    #marker;
    #presenter;

    async render() {
        return `
        <section id="detail-story"></section>
        `
    }

    async afterRender() {
        this.#presenter = new DetailStoryPresenter({
            view: this,
            model: storyAPI,
            dbModel: Database
        });

        await this.#presenter.showDetailStory();

        document.getElementById('save-story-btn').addEventListener('click', async () => {

            const name = document.getElementById('story-name').textContent;
            const imageSrc = document.getElementById('story-image');
            const imageBlob = await srcToImage(imageSrc);
            const createdAt = document.getElementById('story-created-at').textContent;
            const address = document.getElementById('story-address').textContent;
            const description = document.getElementById('story-description').textContent;
            const id = document.getElementById('detail-story-container').dataset.id;

            const story = {
                id: id,
                image: imageBlob,
                name: name,
                createdAt: createdAt,
                address: address,
                description: description,
            }

            console.log(story);
            await this.#presenter.saveStory(story);
            
        });
    }

    async setupMap(lat, lng) {
        this.#map = new Map({
            containerId: document.getElementById('map-container'),
            lat: lat,
            lng: lng,
        });
    }

   

    async createMark(lat, lng, story) {
        this.#map.createMark(lat, lng, story);
    }


    async setItem(story) {
        document.getElementById('detail-story').innerHTML = generateStoryDetailTemplate(story);
    }


    showLoading() {
        document.getElementById('detail-story').innerHTML = LoadingTemplate();
    }

    hideLoading() {
        document.getElementById('detail-story').innerHTML = '';
    }

    dataIsNotFound(message) {
        document.getElementById('detail-story').innerHTML = `<h1 class="flex justify-center items-center min-h-screen text-xl">${message}</h1>`;
    }
}