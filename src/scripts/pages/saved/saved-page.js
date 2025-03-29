import { LoadingTemplate, generateSavedStoryItemTemplate, emptyDataTemplate } from "../../templates";
import SavedPresenter from "./saved-presenter";
import Database from "../../data/database.js";

export default class SavedPage {
    #presenter


    async render() {
        return `
        <section id="container"></section>`;
    }

    async afterRender() {
        this.#presenter = new SavedPresenter({
            view: this,
            dbModel: Database
        });
        await this.#presenter.showSavedStoryList();
    }

    setupUnsaveButtons(){
        const deleteButtons = document.querySelectorAll('#delete-saved-story-btn');

        deleteButtons.forEach(button => {
            button.addEventListener('click', async (event) => {
                const id = event.target.closest('#delete-saved-story-btn').dataset.id;

                if (confirm(`Unsave this item?.`)) {
                    await this.#presenter.deleteSavedStory(id);
                    await this.#presenter.showSavedStoryList();
                }

            });
        });
    }

    setStoryContainer() {
        document.getElementById('container').innerHTML = ` 
        <div class="responsive stabilize-top flex flex-col">
            <h1>Saved story</h1> 
            <div id="story-saved-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7 gap-3 my-5"></div>
        </div>`
    }

    populateStoryList(data) {

        if (data.length <= 0) {
            this.savedStoryListEmpty();
            return;
        }

        let n = 0;
        const html = data.reduce((accumulator, story) => {
            n = n + 1;
            return accumulator.concat(
                generateSavedStoryItemTemplate({
                    ...story,
                    order: n,
                })
            )
        }, '');

        document.getElementById('story-saved-container').innerHTML = html;

        this.setupUnsaveButtons();
    }

    savedStoryListEmpty() {
        document.getElementById('container').innerHTML = emptyDataTemplate();
    }

    showLoading() {
        document.getElementById('container').innerHTML = LoadingTemplate();
    }

    hideLoading() {
        document.getElementById('container').innerHTML = '';
    }
    



}