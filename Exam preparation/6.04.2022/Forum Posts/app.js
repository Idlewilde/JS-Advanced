window.addEventListener("load", solve);

function solve() {

  const title = document.getElementById('post-title');
  const category = document.getElementById('post-category');
  const content = document.getElementById('post-content');
  const publish = document.getElementById('publish-btn');
  const clear = document.getElementById('clear-btn');
  publish.addEventListener('click',publishArticle);
  clear.addEventListener('click',clearArticle);
  const reviewList = document.getElementById('review-list');
  const publishList = document.getElementById('published-list');

  function publishArticle(event){
  if(title.value.trim().length>0&&category.value.trim().length>0&&content.value.trim().length>0){
    let li = document.createElement('li');
    li.setAttribute('class','rpost');
    let article = document.createElement('article');
    article.innerHTML=(`<h4>${title.value}</h4><p>Category: ${category.value}</p><p>Content: ${content.value}</p>`);
    let btnEdit = document.createElement('button');
    btnEdit.setAttribute('class','action-btn edit');
    btnEdit.textContent='Edit';
    btnEdit.addEventListener('click', editContent);

    let btnApprove = document.createElement('button');
    btnApprove.setAttribute('class','action-btn approve');
    btnApprove.textContent='Approve'
    btnApprove.addEventListener('click', approveContent);

    li.appendChild(article);li.appendChild(btnEdit);li.appendChild(btnApprove);reviewList.appendChild(li)
    title.value='';content.value='';category.value='';

  }
  }

  function clearArticle(){
    publishList.innerHTML='';
  }
  function editContent(event){
    let li = event.target.parentNode;
    let titleContent = li.children[0].children[0].textContent;
    let categoryContent=li.children[0].children[1].textContent.split(': ')[1];
    let contentContent = li.children[0].children[2].textContent.split(': ')[1];

    li.remove();
    title.value=titleContent;
    category.value=categoryContent;
    content.value=contentContent;
  }

  function approveContent(event){
    let li = event.target.parentNode;
    li.remove();
    li.children[1].remove();li.children[1].remove();
    console.log(li);
    publishList.appendChild(li);
  }

  

}
