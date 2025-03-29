import { openDB } from "idb";

const DATABASE_NAME = 'app';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'saved-stories';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade: (database) => {
        if (!database.objectStoreNames.contains(OBJECT_STORE_NAME))
            database.createObjectStore(OBJECT_STORE_NAME, {
                keyPath: 'id',
            });
    }
});

const Database = {
    async putAndRefresh(stories) {

        const db = await dbPromise;
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const store = tx.objectStore(OBJECT_STORE_NAME);

        await store.clear();

        await Promise.all(stories.map((story) => {
            store.put(story);

        }));
        await tx.done;
    },
    async getAll() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async getById(id){
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async add(story) {
        const db = await dbPromise;
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const store = tx.objectStore(OBJECT_STORE_NAME);
        store.put(story);
        await tx.done;
    },
    async delete(id) {
        const db = await dbPromise;
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const store = tx.objectStore(OBJECT_STORE_NAME);
        store.delete(id);
        await tx.done;
    }
}

export default Database;