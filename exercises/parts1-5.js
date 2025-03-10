"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
// let varName: type = "value"
// let spacecraftName: string = "Determination";
// let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// let milesPerKilometer: number = 0.621;
// Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;
// Code an output statement here (use a template literal): tsc parts1-5.ts -- node parts1-5.js
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`)
// Part 3: Create a Function ("getDaysToLocation")
// function funName(varName: type): returnType {}
// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hoursToLocation: number = milesAway / speedMph;
//     let daysToLocation: number = hoursToLocation / 24;
//     return daysToLocation;
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Mars.`)
// Part 4: Create a Spacecraft Class
/*
class name {
    varName: type
    constructor(varName: type, varName: type) {
        this.name = varName + " " + varName;
    }
    funName() {
        return "Hello, " + this.name;
    }
}
*/
var Spacecraft = /** @class */ (function () {
    function Spacecraft(shuttleName, shuttleSpeed) {
        this.milesPerKilometer = 0.621;
        this.name = shuttleName;
        this.speedMph = shuttleSpeed;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`)
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`)
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
