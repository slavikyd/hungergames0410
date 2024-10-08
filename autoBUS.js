class AutoBUS {
    constructor(number, stations) {
        this.number = number;
        this.passangers_limit = 10;
        this.passangers = [];
        this.stations = stations;
        this.current_station = null;
        this.time_between_stations = 5000;
        this.time_wait_on_station = 3000;
    }

    addPassanger(station_passengers) {
        station_passengers.forEach((passenger) => {
            if (this.passangers.length < this.passangers_limit) {
                this.passangers.push(passenger);
                console.log(`Passenger ${passenger.name} boarded bus ${this.number}`);
            }
        });
    }

    removePassangers() {
        this.passangers = this.passangers.filter((passenger) => {
            if (passenger.destination === this.current_station.name) {
                console.log(`Passenger ${passenger.name} left bus ${this.number} at ${this.current_station.name}`);
                return false;
            }
            return true;
        });
    }

    changeStation(station) {
        this.current_station = station;
        console.log(`Bus ${this.number} arrived at ${station.name}`);
        this.removePassangers();
        this.addPassanger(station.passengers);
    }

    go() {
        let index = 0;
        const nextStation = () => {
            if (index >= this.stations.length) {
                index = 0;
            }

            const station = this.stations[index];
            this.changeStation(station);
            
            index++;
            setTimeout(nextStation, this.time_between_stations);
        };

        nextStation();
    }
}
