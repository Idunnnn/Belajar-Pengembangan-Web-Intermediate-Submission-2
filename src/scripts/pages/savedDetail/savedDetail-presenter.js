import { parseActivePathname } from "../../routes/url-parser";

export default class savedDetailPresenter {
    #model;
    #view;
    #database;

    constructor({ view, model, dbModel }) {
        this.#model = model;
        this.#view = view;
        this.#database = dbModel;
    }

    async showDetailSavedStory() {
        this.#view.showLoading();
        try {
            const data = await this.#database.getById(parseActivePathname().id);

            if (!data) {
                this.#view.dataIsNotFound();
                return;
            }

            if (data.address === "Unknown (Missing coordinat)") {
                this.#view.setItem(data);
                this.#view.setupUnsaveButton();
                this.#view.setupMap(-0.5341981739396645, 117.12302541745886);

            } else {
                const address = await this.#model.getLatLng(data.address);

                this.#view.setItem(data);
                this.#view.setupMap(address.lat, address.lng);
                this.#view.createMark(address.lat, address.lng, data);
                this.#view.setupUnsaveButton();
            }
        } catch (error) {
            console.error(error);
        }
    }

    async unsaveSavedStory(id) {
        try {
            await this.#database.delete(id);
            alert('Data successfully unsaved !');
            location.hash = "/saved"
        } catch (e) {
            alert('Failed to unsave data');
            console.error(e);
        }
    }
}