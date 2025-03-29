import { getSingle } from "../../data/api";
import { parseActivePathname } from "../../routes/url-parser";

export default class DetailStoryPresenter {
    #model;
    #view;
    #dbModel;

    constructor({ view, model, dbModel }) {
        this.#model = model;
        this.#view = view;
        this.#dbModel = dbModel;
    }

    async showDetailStory() {
        this.#view.showLoading();
        try {
            const data = await getSingle(parseActivePathname().id);

            if (!data.ok) {
                this.#view.dataIsNotFound(data.message);
                return;
            }

            if (data.story.lat === null || data.story.lon === null) {

                data.story.lat = -0.5341981739396645;
                data.story.lon = 117.12302541745886;

                data.story = {
                    ...data.story,
                    address: "Unknown (Missing coordinat)"
                }

                this.#view.setItem(data.story);
                this.#view.setupMap(data.story.lat, data.story.lon);
            } else {
                try {
                    const json = await this.#model.getAddress({ lat: data.story.lat, lng: data.story.lon });
                    data.story = {
                        ...data.story,
                        address: json.address
                    }

                    this.#view.setItem(data.story);
                    this.#view.setupMap(data.story.lat, data.story.lon);
                    this.#view.createMark(data.story.lat, data.story.lon, data.story);
                } catch (error) {
                    console.error(error);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    async saveStory(story) {
        try {
            await this.#dbModel.add(story);
            alert("Story saved !");
        } catch (error) {
            alert('Failed to save story')
            console.error(error);
        }
    }
}