// return the number of blocks from HQ to pickup location 
const distanceFromHqInBlocks = (blocks) => {
    return Math.abs(blocks - 42);
}

// return the number of feet from HQ to pickup location -- use distanceFromHqInBlocks() to return correct value
const distanceFromHqInFeet = (blocks) => {
    const numBlocks = distanceFromHqInBlocks(blocks);
    return numBlocks * 264;
}

// calculate the number of feet a passenger travels -- 1 block = 264 ft
const distanceTravelledInFeet = (start, destination) => {
    return Math.abs(start - destination) * 264;
}

const calculatesFarePrice = (start, destination) => {
    const totalDist = distanceTravelledInFeet(start, destination)

    if (totalDist <= 400) {
        return 0;
    } else if (totalDist > 400 && totalDist < 2000) {
        return (totalDist - 400) * 0.02;
    } else if (totalDist > 2000 && totalDist < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
