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
class Passenger {
    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
    }
}
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

const stop1 = new BusStop("Station 1");
const stop2 = new BusStop("Station 2");
const stop3 = new BusStop("Station 3");

const passenger1 = new Passenger("Alice", "Station 2");
const passenger2 = new Passenger("Bob", "Station 3");

stop1.addPassanger(passenger1);
stop1.addPassanger(passenger2);

const bus1 = new AutoBUS(1, [stop1, stop2, stop3]);

bus1.go();
