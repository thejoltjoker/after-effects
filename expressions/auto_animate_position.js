// Auto fade in and out based on layer in and out points
function getValue(axis, magnitude, value) {
  if (axis == 1) {
    var inValue = [value[0] - magnitude, value[1], value[2]];
  } else if (axis == 2) {
    var inValue = [value[0] + magnitude, value[1], value[2]];
  } else if (axis == 3) {
    var inValue = [value[0], value[1] - magnitude, value[2]];
  } else if (axis == 4) {
    var inValue = [value[0], value[1] + magnitude, value[2]];
  } else if (axis == 5) {
    var inValue = [value[0], value[1], value[2] - magnitude];
  } else if (axis == 6) {
    var inValue = [value[0], value[1], value[2] + magnitude];
  }
  return inValue;
}


function animate(t, startValue, endValue, interpolation) {
    if (interpolation == 1) {
    return linear(t, startValue, endValue);
  } else if (interpolation == 2) {
    return ease(t, startValue, endValue);
  } else if (interpolation == 3) {
    return easeIn(t, startValue, endValue);
  } else if (interpolation == 4) {
    return easeOut(t, startValue, endValue);
  };
};

var axises = {
  "x": 1,
  "-x": 2,
  "y": 3,
  "-y": 4,
  "z": 5,
  "-z": 6,
};

// Which axis to animate
var inAxis = axises["y"];
var outAxis = axises["-y"];

// The amount to move object
var magnitude = 200;

// How long the animation should be
var durationFrames = 25;
var duration = framesToTime(durationFrames);

// Interpolation
var interpolations = {
  "linear": 1,
  "ease": 2,
  "easeIn": 3,
  "easeOut": 4,
};
var inInterpolation = interpolations["easeOut"];
var outInterpolation = interpolations["easeIn"];

var inValue = getValue(inAxis, magnitude, value);
var outValue = getValue(outAxis, magnitude, value);

// Movement
var moveIn = (time - inPoint) / duration;
var moveOut = (time - outPoint + duration) / duration;


if (time < inPoint + duration) {
  // Move in
  animate(moveIn, inValue, value, inInterpolation);
// Fade out
// if (inInterpolation == 1) {
//     ease(moveIn, inValue, value);
//   } else {
//     linear(moveIn, inValue, value);
//   };
} else if (time > outPoint - duration) {
  // Move out
  animate(moveOut, value, outValue, outInterpolation);
//   if (outInterpolation == 1) {
//     ease(moveOut, value, outValue);
//   } else {
//     linear(moveOut, value, outValue);
//   };
} else {
  // Leave value alone between fades
  value;
};
