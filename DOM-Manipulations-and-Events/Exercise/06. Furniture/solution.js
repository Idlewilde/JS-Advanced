function solve() {
  let generate = document.querySelectorAll('button')[0];
  let buy = document.querySelectorAll('button')[1];

  let textarea = document.querySelectorAll('textarea');

  let tableBody = document.getElementsByTagName('tbody')[0];
  let tableRows = tableBody.getElementsByTagName('tr');

  generate.addEventListener('click', generateFurniture);
  buy.addEventListener('click', buyFurniture);

  function generateFurniture(event) {

    let furniture = JSON.parse(textarea[0].value);

    for (i = 0; i < furniture.length; i++) {
      tableBody.innerHTML += `<tr>
     <td><img src=${furniture[i].img}></td>
     <td><p>${furniture[i].name}</p></td>
     <td><p>${furniture[i].price}</p></td>
     <td><p>${furniture[i].decFactor}</p></td>
     <td><input type="checkbox"/></td>
     </tr>`
    }
  }

  function buyFurniture(event) {

    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecoration = 0;


    for (i = 0; i < tableRows.length; i++) {
      let checkbox = tableRows[i].getElementsByTagName('input')[0];

      let item = tableRows[i].getElementsByTagName('p')[0].textContent;
      let price = Number(tableRows[i].getElementsByTagName('p')[1].textContent);
      let decorationFactor = Number(tableRows[i].getElementsByTagName('p')[2].textContent);

      if (checkbox.checked) {
        boughtFurniture.push(item);
        totalPrice += price; totalDecoration += decorationFactor;
      }
    }

    let avgDec = totalDecoration / boughtFurniture.length;

    textarea[1].value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDec}`;
  }


}

