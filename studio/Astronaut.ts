import { Payload } from './Payload';

export class Astronaut implements Payload {
  massKg:number = 0;
  name:string = ""

  constructor(mass:number, name:string) {
    this.massKg = mass;
    this.name = name;
  }

}
