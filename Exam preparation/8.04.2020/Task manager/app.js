function solve() {
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dueDate = document.getElementById('date');
    let sections = document.querySelectorAll('section');
    let openDiv = sections[1].querySelectorAll('div')[1];
    let inProgressDiv = document.getElementById('in-progress')
    let completeDiv = sections[3].querySelectorAll('div')[1];

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();
        if (taskInput.value.length > 0 && descriptionInput.value.length > 0 && dueDate.value.length > 0) {
        let article = document.createElement('article');
        article.innerHTML=`<h3>${taskInput.value}</h3><p>Description: ${descriptionInput.value}</p><p>Due Date: ${dueDate.value}</p><div class="flex">
        <button class = "green">Start</button><button class = "red">Delete</button></div>`;
        buttonStart=article.children[3].children[0];
        buttonStart.addEventListener('click', startTask);
        buttonDelete=article.children[3].children[1];
        buttonDelete.addEventListener('click', deleteTask);
        openDiv.appendChild(article);
        taskInput.value = ''; descriptionInput.value = ''; dueDate.value = '';
        }
    }

    function startTask(event) {
        let divButtons = event.target.parentNode;
        let articleToMove = divButtons.parentNode;
        articleToMove.remove();
        let buttonFinish = document.createElement('button');
        buttonFinish.textContent = 'Finish';
        buttonFinish.classList.add('orange');
        buttonFinish.addEventListener('click', finishTask);
        divButtons.replaceChild(buttonFinish, event.target);
        inProgressDiv.appendChild(articleToMove);
    }

    function deleteTask(event) {
        let divButtons = event.target.parentNode;
        let articleToDelete = divButtons.parentNode;
        articleToDelete.remove();
    }

    function finishTask(ev) {
        let divButtons = ev.target.parentNode;
        let articleToMove = divButtons.parentNode;
        divButtons.remove();
        articleToMove.remove();
        completeDiv.appendChild(articleToMove);
        console.log(sections[3].children[1].children[0].children[2].textContent);
    }
}