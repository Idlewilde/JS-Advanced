function solve(speed, area) {
    let drivingSpeed = +speed;
    let overSpeed = 0;
    let speedLimit = 0;

    switch (area) {
        case 'city': overSpeed = drivingSpeed - 50; speedLimit = 50; break;
        case 'residential': overSpeed = drivingSpeed - 20; speedLimit = 20; break;
        case 'interstate': overSpeed = drivingSpeed - 90; speedLimit = 90; break;
        case 'motorway': overSpeed = drivingSpeed - 130; speedLimit = 130; break;
    }

    if (overSpeed <= 0) { console.log(`Driving ${drivingSpeed} km/h in a ${speedLimit} zone`) }
    else if (overSpeed <= 20) { console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - speeding`) }
    else if (overSpeed <= 40) { console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`) }
    else { console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - reckless driving`) }
}