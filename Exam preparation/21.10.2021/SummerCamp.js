class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []
    }
    registerParticipant(name, condition, money) {
        if (condition != 'child' && condition != 'student' && condition != 'collegian') {
            throw new Error("Unsuccessful registration at the camp.")
        }
        if (this.listOfParticipants.some(e => e.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(e => e.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants = this.listOfParticipants.filter(e => e.name != name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (!this.listOfParticipants.some(e => e.name == participant1)) { throw new Error(`Invalid entered name/s.`) };
        let player1 = this.listOfParticipants.find(e => e.name == participant1);
        if (typeOfGame == 'WaterBalloonFights') {
            if (!this.listOfParticipants.some(e => e.name == participant2)) {
                throw new Error(`Invalid entered name/s.`)
            };
            let player2 = this.listOfParticipants.find(e => e.name == participant2);
            if (player1.condition != player2.condition) { throw new Error(`Choose players with equal condition.`) }
            if (player1.power > player2.power) {
                player1.wins++;
                return `The ${player1.name} is winner in the game WaterBalloonFights.`
            }
            else if (player1.power < player2.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game WaterBalloonFights.`
            }
            else { return `There is no winner.` }
        }
        else if (typeOfGame == 'Battleship') {
            player1.power += 20;
            return `The ${player1.name} successfully completed the game Battleship.`
        }
    }

    toString() {
        let output = '';
        output += `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        this.listOfParticipants.forEach(e => output += `${e.name} - ${e.condition} - ${e.power} - ${e.wins}\n`)
        return output.trim();
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));

console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());








