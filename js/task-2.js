console.log("\n\n------------------\n----- Task-2 -----\n::\n::");

class Storage {
    #items;

    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    // removeItem(itemToRemove) {
    //     if (this.#items.includes(itemToRemove)) {
    //         this.#items.splice(
    //             this.#items.findIndex((item) => item === itemToRemove),
    //             1
    //         );
    //     }
    // }

    /* ============================================================

чесно кажучи, мені здається закоментований варіант більш правильним, 
оскільки він не створює нового масиву та не забиває пам'ять новим посиланням,
хоча і є більш навантаженим. Але наступний варіант набагато читабельніший та простіший.
Підкажіть, будь ласка, як краще це реалізувати?

============================================================ */

    removeItem(itemToRemove) {
        this.#items = this.#items.filter((item) => item !== itemToRemove);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
