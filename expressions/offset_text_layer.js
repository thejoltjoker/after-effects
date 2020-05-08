/**
* Offset text layer and make it bold when it reaches a certain time.
*/
var max_lines = comp("data").layer("data")("Data")("Number of Rows") - 1;
var offset_index = index - thisComp.layer("text_ctrls").effect("index_offset")("Slider");
if (offset_index <= max_lines) {
  var hallplats = comp("data").layer("data")("Data")("Outline")("hallplats")("hallplats " + offset_index).value;
  var tc = comp("data").layer("data")("Data")("Outline")("tidskod")("tidskod " + offset_index).value;
  style = text.sourceText.style.setText(hallplats).setFontSize("80");
  if (Math.ceil(time) > tc) {
    style = style.setFont("BitterProOGT-Bold").setFontSize("110");
  } else {
    style;
  }
}
