// Create start time in seconds using the formatted time in the csv
formatted_start_time = comp("data").layer("meta")("Data")("Outline")("starttid")("starttid 0");
start_hour = formatted_start_time.split(":")[0] * 3600;
start_min = formatted_start_time.split(":")[1] * 60;
start_time = start_hour + start_min;

current_time = start_time + time;

hours = Math.floor(current_time / 3600);
minutes = Math.floor((current_time - hours * 3600) / 60);

hours + ":" + minutes;
