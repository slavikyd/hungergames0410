class BusStop {
    constructor(name) {
        this.name = name;
        this.passengers = [];
    }
    addPassanger(passenger) {
        this.passengers.push(passenger);
    }
    removePassanger(passenger) {
        if (this.passengers.includes(passenger)) {
            this.passengers.splice(this.passengers.indexOf(passenger), 1);
        }
    }
}