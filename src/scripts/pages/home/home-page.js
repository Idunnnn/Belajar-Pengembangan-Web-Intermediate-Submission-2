import HomePresenter from "./home-presenter";
import * as storyAPI from "../../data/api.js"
import { emptyDataTemplate, generateStoryItemTemplate, LoadingTemplate } from "../../templates.js";
import Map from "../../utils/Map.js";
import Database from "../../data/database.js";

export default class HomePage {
  #presenter = null;
  #map = null;
  async render() {
    return `
    <div class="stabilize-top pb-10">
      <section class="mb-5 ">
        <div id="map-container" style="height: 600px;z-index: 1; position:relative"></div>
        <div id="map-loading-container"></div>
      </section>

      <section class="responsive">
        <h1 class="lg:text-center mb-10 text-[2.5rem] text-zinc-200 underline underline-offset-15">Story list</h1>
        <div id="story-list-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7 gap-3"></div>
        <div id="story-loading-container"></div>
      </section>
    </div>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: storyAPI,
      dbModel: Database
    });


    await this.#presenter.showStoryList();
    await this.#setupMap();
    await this.#presenter.showMapMarker();
  }

  async #setupMap() {
    this.#map = new Map({
      containerId: document.getElementById('map-container'),
      lat: -0.5341981739396645,
      lng: 117.12302541745886,
    }
    );
  }

  async populateMapMarker(lat, lng, storyList) {
    await this.#map.costumMark({ lat: lat, lng: lng }, storyList);
  }

  populateStoryList(data) {
    if (data.length <= 0) {
      this.storyListEmpty();
      return;
    }
    
    let n = 0;
    const html = data.reduce((accumulator, story) => {
      n = n + 1;
      return accumulator.concat(
        generateStoryItemTemplate({
          ...story,
          order: n,
        })
      )
    }, '');

    document.getElementById('story-list-container').innerHTML = html;
  }

  storyListEmpty() {
    document.getElementById('responsive').innerHTML = emptyDataTemplate();
  }
  showLoading() {
    document.getElementById('story-loading-container').innerHTML = LoadingTemplate();
  }

  hideLoading() {
    document.getElementById('story-loading-container').innerHTML = '';
  }

  showMapLoading() {
    document.getElementById('story-loading-container').innerHTML = LoadingTemplate();
  }

  hideMapLoading() {
    document.getElementById('story-loading-container').innerHTML = '';
  }
}
