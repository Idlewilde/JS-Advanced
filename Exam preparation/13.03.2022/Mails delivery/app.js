function solve() {
    const recipientName=document.getElementById('recipientName');
    const title=document.getElementById('title');
    const message=document.getElementById('message');
    const add = document.getElementById('add');
    const reset = document.getElementById('reset');
    add.addEventListener('click',addToList);
    reset.addEventListener('click',clearInput);
    const list = document.getElementById('list');
    const sentList = document.getElementsByClassName('sent-list')[0];
    const deleteList = document.getElementsByClassName('delete-list')[0];
    
    function addToList(event){
    event.preventDefault();
    if(title.value.length>0&&message.value.length>0&&recipientName.value.length>0){
    const li = document.createElement('li');
    const h42= document.createElement('h4');
    h42.textContent=`Recipient Name: ${recipientName.value}`
    const h41= document.createElement('h4');
    h41.textContent=`Title: ${title.value}`
    const span1= document.createElement('span');
    span1.textContent=`${message.value}`
    const div = document.createElement('div');
    div.setAttribute('id','list-action');
    const sendBTN = document.createElement('button');
    sendBTN. setAttribute('type','submit');
    sendBTN. setAttribute('id','send');
    
    sendBTN.textContent='Send';
    sendBTN.addEventListener('click',sendMails);
    
    const deleteBTN = document.createElement('button');
    deleteBTN. setAttribute('type','submit');
    deleteBTN. setAttribute('id','delete');
    
    deleteBTN.textContent='Delete';
    deleteBTN.addEventListener('click',deleteMails);
    div.appendChild(sendBTN);div.appendChild(deleteBTN);
    li.appendChild(h41);li.appendChild(h42);li.appendChild(span1);li.appendChild(div);
    
    list.appendChild(li);
     
    recipientName.value='';
    title.value='';
    message.value='';}
    }
    
    function clearInput(event){
        event.preventDefault();
        recipientName.value='';
        title.value='';
        message.value='';
    }
    
    function sendMails(event){
    const liToRemove = event.target.parentNode.parentNode;
    const li = document.createElement('li');
    const span1= document.createElement('span');
    span1.textContent=`To: ${liToRemove.children[1].textContent.split(': ')[1]}`
    const span2= document.createElement('span');
    span2.textContent=`Title: ${liToRemove.children[0].textContent.split(': ')[1]}`
    const div= document.createElement('div');
    div.setAttribute('class','btn');
    const deleteBTN = document.createElement('button');
    deleteBTN. setAttribute('type','submit');
    deleteBTN. setAttribute('class','delete');
    
    deleteBTN.textContent='Delete';
    deleteBTN.addEventListener('click',deleteFromSent);
    div.appendChild(deleteBTN);
    li.appendChild(span1);li.appendChild(span2);li.appendChild(div);
    sentList.appendChild(li);
    liToRemove.remove();
    
    };
    function deleteMails(event){
        const liToRemove = event.target.parentNode.parentNode;
    
        const li = document.createElement('li');
        const span1= document.createElement('span');
        span1.textContent=`To: ${liToRemove.children[0].textContent.split(': ')[1]}`
        const span2= document.createElement('span');
        span2.textContent=`Title: ${liToRemove.children[1].textContent.split(': ')[1]}`
        li.appendChild(span1);li.appendChild(span2);liToRemove.remove();
        deleteList.appendChild(li);
    };
    
    function deleteFromSent(event){
        const liToRemove = event.target.parentNode.parentNode;
    
    
        const li = document.createElement('li');
        const span1= document.createElement('span');
        span1.textContent=`To: ${liToRemove.children[0].textContent.split(': ')[1]}`
        const span2= document.createElement('span');
        span2.textContent=`Title: ${liToRemove.children[1].textContent.split(': ')[1]}`
        li.appendChild(span1);li.appendChild(span2);liToRemove.remove();
        deleteList.appendChild(li);
    }
    
    }
solve()