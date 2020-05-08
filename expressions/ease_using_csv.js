/**
 * I used this expression to automatically animate scrolling text in a bus screen when the bus got to a certain point.
 * All driven by data from a couple of csv files.
 */
var tidskoder = [];
var addition = comp("hallplatser").layer("text_ctrls").effect("v_dist")("Slider");
var y_pos = value + addition;
var prev_y_pos = y_pos-addition;

// Add timecodes to list
for(var i = 0; i < comp("data").layer("data")("Data")("Number of Rows"); i++) {
    tidskoder.push(comp("data").layer("data")("Data")("Outline")("tidskod")("tidskod " + i).value);
};

// Animate from timecodes
for (var i = 0; tidskoder[i] < time || tidskoder[i] == 0; i++){
    // First position
    if (i == 0){
        // Set starting position
        var pos_1 = y_pos-(addition*i);
    }else{
        // Continue moving from last point
        var pos_1 = prev_y_pos;
    };



    if(tidskoder[i-1] == tidskoder[i]){
        // Move extra distance if after gap
        var pos_1 = pos_1+addition+addition/2;
        var pos_2 = pos_1-addition-addition-addition/2;
    }else{
        // Move just one distance measure
        var pos_2 = pos_1-addition;
    };

    ease(time, tidskoder[i], tidskoder[i]+1, pos_1, pos_2);
    var prev_y_pos = pos_2;

};

// Simple version
var tidskoder = [];
var addition = comp("hallplatser").layer("text_ctrls").effect("v_dist")("Slider");
var y_pos = value+addition;
for(var i = 0; i < comp("data").layer("data")("Data")("Number of Rows"); i++) {
    tidskoder.push(comp("data").layer("data")("Data")("Outline")("tidskod")("tidskod " + i).value);
}
for (var i = 0; tidskoder[i] < time; i++){
    ease(time, tidskoder[i], tidskoder[i]+1, y_pos-addition*i, y_pos-addition-addition*i)
}