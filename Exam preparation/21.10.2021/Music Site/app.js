window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let name = document.getElementById('name');
    let collection = document.getElementsByClassName('all-hits-container')[0];
    let addBTN = document.getElementById('add-btn');
    addBTN.addEventListener('click', addSong);
    let likesP = document.getElementsByClassName('likes')[0].children[0];
    let likes = 0;
    let savedContainer = document.getElementsByClassName('saved-container')[0];

    function addSong(event) {
        event.preventDefault(event);

        if (genre.value.trim().length > 0 &&
            author.value.trim().length > 0 &&
            date.value.trim().length > 0 &&
            name.value.trim().length > 0) {
            collection.innerHTML +=
                `<div class="hits-info"><img src="./static/img/img.png">
                <h2>Genre: ${genre.value}</h2>
                <h2>Name: ${name.value}</h2>
                <h2>Author: ${author.value}</h2>
                <h3>Date: ${date.value}</h3>
                <button class="save-btn">Save song</button>
                <button class="like-btn">Like song</button>
                <button class="delete-btn">Delete</button></div>`
            genre.value = ''; author.value = ''; date.value = ''; name.value = '';
            Array.from(collection.getElementsByClassName('save-btn')).forEach(e => e.addEventListener('click', saveSong));
            Array.from(collection.getElementsByClassName('delete-btn')).forEach(e => e.addEventListener('click', deleteSong));
            Array.from(collection.getElementsByClassName('like-btn')).forEach(e => e.addEventListener('click', likeSong));
        }

        function likeSong(event) {
            event.preventDefault(event);
            likes++;
            likesP.textContent = `Total Likes: ${likes}`
            event.target.disabled = true;
        }

        function saveSong(event) {
            event.preventDefault(event);
            let songToMove = event.target.parentNode;
            songToMove.remove();
            songToMove.removeChild(songToMove.children[songToMove.children.length - 2]);
            songToMove.removeChild(songToMove.children[songToMove.children.length - 2]);
            savedContainer.innerHTML += `<div class="hits-info">${songToMove.innerHTML}</div>`
            Array.from(document.getElementsByClassName('delete-btn')).forEach(e => e.addEventListener('click', deleteSong));
        }

        function deleteSong(event) {
            event.preventDefault(event);
            let songToDelete = event.target.parentNode;
            songToDelete.remove()
        }

    }
}