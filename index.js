// return the number of blocks from HQ to pickup location 
function distanceFromHqInBlocks(pickupLoc) {
    // create result var
    let numOfBlocks;

    numOfBlocks = Math.abs(pickupLoc - 42);

    // return result var
    return numOfBlocks;
}

// return the number of feet from HQ to pickup location -- use distanceFromHqInBlocks() to return correct value
function distanceFromHqInFeet(pickupLoc) {
    const numOfBlocks = distanceFromHqInBlocks(pickupLoc);

    // create result var
    let numOfFeet;

    numOfFeet = numOfBlocks * 264;

    // return result var
    return numOfFeet;
}

// calculate the number of feet a passenger travels -- 1 block = 264 ft
function distanceTravelledInFeet(start, destination) {
    // create result var
    let distanceInFeet;

    distanceInFeet = Math.abs(start - destination) * 264;

    // return result var
    return distanceInFeet;
}

/* calculate the fare -- use distanceTravelledInFeet()
first 400ft are free
400 - 2000 -- 0.02 per foot (not including 400)
2000 - 2500 -- flat fare
2500 and over -- cannot travel that far
*/
function calculatesFarePrice(start, destination) {
    // create result var
    let calculatedFare = 0;

    let distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        calculatedFare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        calculatedFare = 25;
    } else {
        return 'cannot travel that far';
    }

    // return result var
    return calculatedFare;
}
