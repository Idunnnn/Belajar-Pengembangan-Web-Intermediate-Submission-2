export default class SavedPresenter {
    #view;
    #database;

    constructor({ view, dbModel }) {
        this.#view = view;
        this.#database = dbModel;
    }

    async showSavedStoryList() {
        this.#view.showLoading();
        try {
            let savedStories = await this.#database.getAll();
            this.#view.setStoryContainer();
            this.#view.populateStoryList(savedStories);
        } catch (error) {
            console.log(`Error : ${error}`);
        }
    }

    async deleteSavedStory(id) {
        try {
            await this.#database.delete(id);
            alert('Data successfully unsaved !');
        } catch (e) {
            alert('Failed to unsave data');
            console.error(e);
        }
    }
}