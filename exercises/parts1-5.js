"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars * 24;
// Code an output statement here (use a template literal):
console.log(spacecraftName + " will take " + kilometersToMars + " to reach Mars.");
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * 0.621;
    var hoursAway = milesAway / 17500;
    var daysAway = hoursAway * 24;
    return daysAway;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(spacecraftName + " will take " + getDaysToLocation(kilometersToMars) + " to reach Mars.");
console.log(spacecraftName + " will take " + getDaysToLocation(kilometersToMoon) + " to reach the Moon.");
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway / this.milesPerKilometer;
        var hours = milesAway * this.speedMph;
        var daysAway = hoursToMars / 24;
        return daysAway;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " \n\t\tdays to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`${spacecraftName will take ${spaceShuttle.getDaysToMars()} to reach Mars.`);
// console.log(`${spacecraftName will take ${spaceShuttle.getDaysToMoon()} to reach the Moon.`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation(spacecraftName, speedMph));
// Paste in the code from step 6 here:
