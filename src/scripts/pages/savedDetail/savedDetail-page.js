import { generateSavedStoryDetailTemplate, LoadingTemplate, emptyDataTemplate } from "../../templates";
import DetailStoryPresenter from "./savedDetail-presenter.js";
import * as storyAPI from "../../data/api.js"
import Map from "../../utils/Map.js";
import Database from "../../data/database";

export default class SavedDetailPage {
    #map;
    #presenter;

    async render() {
        return `
        <section id="saved-story-detail" class="responsive"></section>
        `
    }

    async afterRender() {
        this.#presenter = new DetailStoryPresenter({
            view: this,
            model: storyAPI,
            dbModel: Database
        });

        await this.#presenter.showDetailSavedStory();

       
    }

    setupUnsaveButton(){
        document.getElementById('unsave-btn').addEventListener('click', async (event) => {

            const id = event.target.closest('#unsave-btn').dataset.id;
            await this.#presenter.unsaveSavedStory(id);
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
        this.#map.createSavedMark(lat, lng, story);
    }


    async setItem(story) {
        document.getElementById('saved-story-detail').innerHTML = generateSavedStoryDetailTemplate(story);
    }


    showLoading() {
        document.getElementById('saved-story-detail').innerHTML = LoadingTemplate();
    }

    hideLoading() {
        document.getElementById('saved-story-detail').innerHTML = '';
    }

    dataIsNotFound() {
        document.getElementById('saved-story-detail').innerHTML = '<h1 class="flex justify-center items-center min-h-screen text-xl">No data found</h1>';
    }
}