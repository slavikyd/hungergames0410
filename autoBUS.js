class autoBUS {
    constructor() {
        this.number = NaN;
        this.passangers_limit = 10
        this.passangers = [];
        this.stations = {};
        this.current_station = NaN;
        this.time_between_stations = 5;
        this.time_wait_on_station = 3;
    }

    addPassanger(station_passengers) {
        for (new_passanger in station_passengers){
            if (new_passanger.number == this.number){
                this.passangers.push(passanger);
            }
    }
    }
    removePassanger(passanger) {
        index = this.passangers.indexOf(passanger);
        this.passangers.splice(index, 1);
    }

    changeStation(station) {
        this.current_station = station;
        this.addPassanger();
    }

    go() {
        for (let station in this.stations){
        setTimeout(this.changeStation(station, this.stations[station]))
    }
}
}
