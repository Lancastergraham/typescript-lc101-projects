import { Payload } from './Payload';

export class Cargo implements Payload {
  massKg:number = 0;
  material:string = ""

  constructor(mass:number, material:string) {
    this.massKg = mass;
    this.material = material;
  }
}
