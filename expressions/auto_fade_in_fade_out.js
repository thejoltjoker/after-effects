// Auto fade in and out based on layer in and out points
var durationFrames = effect("opacity")("Slider");
var duration = framesToTime(durationFrames);
var padding = framesToTime(effect("opacityPadding")("Slider"));
var interpolations ={
    "ease":1,
    "linear":2
};
var interpolation = interpolations["ease"];
var fadeIn = (time-inPoint-padding)/duration;
var fadeOut = (time-outPoint+duration+padding)/duration;


if(time < inPoint + padding + duration){
    // Fade in
	if(interpolation == 1){
        ease(fadeIn, 0, value);
    }else{
        linear(fadeIn, 0, value);
	};
}else if(time > outPoint - duration - padding){
    // Fade out
    if(interpolation == 1){
        ease(fadeOut, value, 0);
    }else{
        linear(fadeOut, value, 0);
	};
}else{
    // Leave value alone between fades
	value	
};
