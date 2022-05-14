function tickets(info, criterion) {

    let ticketList = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let i = 0; i < info.length; i++) {
        let array = info[i].split('|');
        let current = new Ticket(array[0], Number(array[1]), array[2]);
        tickets.push(current);
    }

    if (criterion == 'price') { tickets.sort((a, b) => a.price - b.price) }
    else if (criterion == 'destination') { tickets.sort((a, b) => a.destination.localeCompare(b.destination)) }
    else if (criterion == 'status') { tickets.sort((a, b) => a.status.localeCompare(b.status)) }

    return tickets;

}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))