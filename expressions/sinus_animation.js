// Sinus animation
// Usage:
// 1. Put this expression on a 3D value on a null.
// 2. Parent the object you want to animate to said null.
// 3. OPTIONAL: Replace variables with sliders on said null for easier control.
var axises = {
    "x": 1,
    "y": 2,
    "z": 3
  };
  
// Which axis to animate
var axis = axises["x"];

// Frequency of the sinus wave
var frequency = 1;

// How big the movement should be
var magnitude = 1;

// For avoiding crazy values in frequency
var timeMultiplier = 1;

// If you're doing multiple objects it's nice to have an offset
var timeOffset = 0;


// Put the various variables together to form a frequency value
frequencyValue = (time+timeOffset)*frequency*timeMultiplier

// Create the actual value to offset original value
offsetValue = Math.sin(frequencyValue)*magnitude

// Assign variables
var x = transform.position[0];
var y = transform.position[1];
var z = transform.position[2];

// Set values
if(axis == 1){
    // If x
    [x+offsetValue, y, z]
} else if (axis == 2){
    // If y
    [x, y+offsetValue, z]
} else if (axis == 3){
    // If z
    [x, y, z+offsetValue]
}
