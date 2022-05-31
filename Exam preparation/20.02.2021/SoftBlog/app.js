function solve(){
   let author = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   let createArticle = document.querySelectorAll('button')[0];
   createArticle.addEventListener('click',displayArticle);
   let postSection=document.querySelectorAll('section')[1];

   function displayArticle(event){
      event.preventDefault();
      let newArticle = document.createElement('article');
      newArticle.innerHTML=`<h1>${title.value}</h1>
      <p>Category: 
      <strong>${category.value}</strong></p>
      <p>Creator: 
      <strong>${author.value}</strong></p>
      <p>${content.value}</p>
      <div class="buttons">
      <button class="btn delete">Delete</button>
      <button class="btn archive">Archive</button></div>`
      let btnDelete = newArticle.querySelectorAll('button')[0];
      btnDelete.addEventListener('click',deleteArticle);
      let btnArchive = newArticle.querySelectorAll('button')[1];
      btnArchive.addEventListener('click',archiveArticle);
      postSection.appendChild(newArticle);
   }
   function deleteArticle(event){
      let articleToDelete=event.target.parentNode.parentNode;
      articleToDelete.remove();
   };

   function archiveArticle(event){
      let articleToArchive=event.target.parentNode.parentNode;
      articleToArchive.remove();
      let list = document.getElementsByTagName('ol')[0];
      let title = articleToArchive.children[0].textContent;
      let liElement=document.createElement('li');
      const textnode = document.createTextNode(title);
      liElement.appendChild(textnode);
      list.appendChild(liElement);
      let children = list.children;

      let sortFlag = true;
      let sorted;
      while (sortFlag) {
         sortFlag = false;
         for (i = 0; i < children.length - 1; i++) {
            sorted = false;
            if ( children[i].innerHTML.toLowerCase() > children[i + 1].innerHTML.toLowerCase() ) {
               sorted = true;
               break;
            }
         }
         if (sorted) {
            children[i].parentNode.insertBefore(children[i + 1], children[i]);
            sortFlag = true;
         }
      }
   };
  }
