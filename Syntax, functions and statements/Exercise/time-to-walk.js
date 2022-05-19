function solve(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedMetersSec = speed * 1000 / 3600;
    let restTime = (Math.floor(distance / 500)) * 60;
    let time = (Math.ceil(distance / speedMetersSec)) + restTime

    let hours = Math.floor(time / 3600); // get hours
    let minutes = Math.floor((time - (hours * 3600)) / 60); // get minutes
    let seconds = time - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    console.log(`${hours}:${minutes}:${seconds}`);
}
