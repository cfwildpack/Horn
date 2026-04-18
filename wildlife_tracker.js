class WildlifeTracker {
    constructor() {
        this.animals = [];
    }

    addAnimal(name, hornLength) {
        this.animals.push({ name, hornLength });
        console.log(`${name} recorded with horn length ${hornLength} cm`);
    }

    listAnimals() {
        this.animals.forEach(a => {
            console.log(`${a.name} - ${a.hornLength} cm`);
        });
    }
}

const tracker = new WildlifeTracker();
tracker.addAnimal("African Bull", 80);
tracker.listAnimals();
