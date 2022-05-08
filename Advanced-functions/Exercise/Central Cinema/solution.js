function solve() {
    const [name, hall, ticketPrice] = document.querySelectorAll('#container input');
    const addMovieButton = document.querySelector('#container button');
    addMovieButton.addEventListener('click', addMovie);
    let movieSection = document.querySelector('#movies ul');
    let archiveSection = document.querySelector('#archive ul');

    archiveSection.nextElementSibling.addEventListener('click', () => archive.innerHTML = null);

    function addMovie(e) {
        e.preventDefault();
        if (name.value !== "" && hall.value !== "" && !isNaN(Number(ticketPrice.value))) {

            let movie = document.createElement('li');
            let ticketPriceF = Number(ticketPrice.value).toFixed(2);
            movie.innerHTML += `<span>${name.value}</span>
            <strong>Hall: ${hall.value}</strong>
            <div><strong>${ticketPriceF}</strong>
                <input placeholder = "Tickets sold">
                <button>Archive</button></div>`;
            console.log(movie);
            movieSection.appendChild(movie);
            name.value = ''; hall.value = ''; ticketPrice.value = '';
        }

        Array.from(movieSection.querySelectorAll('button')).forEach(event => event.addEventListener('click', archiveMovie));

        function archiveMovie(event) {
            let ticketPrice = event.target.parentNode.children[0];
            let ticketsSold = event.target.parentNode.children[1];

            archiveSection.innerHTML +=
                `<li>
                        <span>${event.target.parentNode.parentNode.children[0].textContent}</span>
                        <strong>Total amount: ${(ticketPrice.textContent * ticketsSold.value).toFixed(2)}</strong>
                        <button>Delete</button>
                    </li>`

            event.target.parentNode.parentNode.remove();
            Array.from(archive.querySelectorAll('button'))
                .forEach(ev => ev.addEventListener('click', (ev) => ev.target.parentNode.remove()));
        }
    }

}
