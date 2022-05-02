function create(words) {
   let elements = words;
   let mainElement = document.getElementById('content');

   for (i = 0; i < elements.length; i++) {
      let div = document.createElement('div');
      
      let p = document.createElement('p');
      p.textContent = elements[i];
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', displayP);
      mainElement.appendChild(div);
   }

   function displayP(ev) {
      ev.target.children[0].style.display = '';
   }
}