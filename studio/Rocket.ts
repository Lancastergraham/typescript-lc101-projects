import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
  name:string = "";
  totalCapacityKg:number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name:string, totalCapacityKg:number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  //methods
  sumMass( items: Payload[] ): number {
    let summedMass = 0;

    for (let i: number = 0; i < items.length; i++) {
      summedMass += items[i].massKg;
    }

    return summedMass;
  }
  currentMassKg(): number {
    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    let astronautMass = this.sumMass(this.astronauts);
    let cargoMass = this.sumMass(this.cargoItems);

    return astronautMass + cargoMass;
  }
  canAdd( item: Payload ): boolean {
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    let currentMass = this.currentMassKg();

    if (currentMass + item.massKg < this.totalCapacityKg) {
      return true;
    } else {
      return false;
    }
  }
  addCargo( cargo: Cargo ): boolean {
    //Uses this.canAdd() to see if another item can be added.
    //If true, adds cargo to this.cargoItems and returns true.
    //If false, returns false.
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }
  addAstronaut( astronaut: Astronaut): boolean {
    //Uses this.canAdd() to see if another astronaut can be added.
    //If true, adds astronaut to this.astronauts and returns true.
    //If false, returns false.
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
