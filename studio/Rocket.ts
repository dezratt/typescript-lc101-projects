import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg
    }
    sumMass(items: Payload[]): number {
        let sum;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        } return sum;
    }

    currentMassKg(): number {
        let mass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return mass;
    }
    canAdd(item: Payload): boolean {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
    }
    addCargo(cargo: Cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true
        } else {
            return false;
        }
    }
}






// massKg: number;
// name: string;

//     constructor(massKg: number, name: string) {
//         this.massKg = massKg
//         this.name = name
//     }
// }