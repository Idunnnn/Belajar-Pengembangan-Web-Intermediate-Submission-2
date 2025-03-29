export default class HomePresenter {
    #model;
    #view;
    #database;

    constructor({ view, model, dbModel }) {
        this.#model = model;
        this.#view = view;
        this.#database = dbModel;
    }

    async showStoryList() {
        this.#view.showLoading();
        try {

            let cachedStories = await this.#database.getAll();
            
            if(cachedStories.length > 0){
                // console.log(cachedStories);
                this.#view.populateStoryList(cachedStories);
            }

            const response = await this.#model.getData();

            if (!response.ok) {
                console.log(`Error : ${response}`);
                return;
            }

            if(response.listStory){
                // await this.#database.putAndRefresh(response.listStory);a
            }
            this.#view.populateStoryList(response.listStory);
        } catch (error) {
            console.log(`Error : ${error}`);
        } finally {
            this.#view.hideLoading();
        }
    }
    async showMapMarker() {
        this.#view.showMapLoading();
        try {
            const response = await this.#model.getData();

            if (!response.ok) {
                console.log(`Error : ${response}`);
                return;
            }
            
            await this.#view.populateMapMarker(0, 0, response.listStory);
            await this.#view.populateMapMarker(response.listStory.lat, response.listStory.lon, response.listStory);
            
            
        } catch (error) {
            console.log(`Error : ${error}`);
        } finally {
            this.#view.hideMapLoading();
        }

    }
}