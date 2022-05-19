function solve(input) {
    let locationCount = Number(input[0]);
    let sumLocation = 0;
    let expectedGold = 0;
    let daysLocation = 0;
    let index = 1;
    let avgPerDay = 0;
    let difference = 0;

    for (i = 1; i <= locationCount; i++) {
        expectedGold = Number(input[index]);
        daysLocation = Number(input[index + 1]);
        for (j = 1; j <= daysLocation; j++) {
            sumLocation = sumLocation + Number(input[index + 1 + j]);
        }
        avgPerDay = sumLocation / daysLocation;
        difference = expectedGold - avgPerDay;
        if (avgPerDay >= expectedGold) { console.log(`Good job! Average gold per day ${avgPerDay.toFixed(2)}`) }
        else { console.log(`You need ${difference.toFixed(2)} gold`) }
        index = index + daysLocation + 2;
        sumLocation = 0;
    }
}

solve((["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])
)

solve((["1",
    "5",
    "3",
    "10",
    "1",
    "3"])
)