/**
 * Documentation
 */
offset = index * thisComp.layer("dotCtrl").effect("offset")("Slider");
dotPos = thisComp.layer("dotCtrl").transform.position;

x = thisComp.layer(index - 2).transform.position[0] + offset;

y = thisComp.layer(index - 2).transform.position[1];
[x, y];

offset = index * thisComp.layer("dotCtrl").effect("offset")("Slider");
dotPos = thisComp.layer("dotCtrl").transform.position;
i = index - 1;
t = time - index;
x = thisComp.layer(i).transform.position[0] + offset;
y = thisComp.layer(i).transform.position[1];
y2 = thisComp.layer("dotBase").toComp(thisComp.layer("dotBase").transform.position, t);

[y2[0], y2[1]];
