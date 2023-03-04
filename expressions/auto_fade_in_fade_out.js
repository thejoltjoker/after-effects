// Auto fade in and out
var durationFrames = 25
var duration = framesToTime(durationFrames);
var interpolations ={
    "ease":1,
    "linear":2
};
var interpolation = interpolations["ease"]


if(time < inPoint + duration){
    // Fade in
	if(interpolation == 1){
        ease((time-inPoint)/duration, 0, value);
    }else{
        linear((time-inPoint)/duration, 0, value);
	};
}else if(time > outPoint - duration){
    // Fade out
    if(interpolation == 1){
        ease((time-outPoint+duration)/duration, value, 0);
    }else{
        linear((time-outPoint+duration)/duration, value, 0);
	};
}else{
    // Leave alone
	value	
};
