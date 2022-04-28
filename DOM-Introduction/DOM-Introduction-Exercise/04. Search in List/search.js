function search() {

   let inputField = document.getElementById('searchText').value;
   let matches = document.getElementById('result');
   let items = Array.from(document.querySelectorAll('#towns li'));
   let count = 0;

   for (let item of items) {

      if (item.textContent.includes(inputField)) {
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         count++;
      } else {
         item.style.fontWeight = 'normal';
         item.style.textDecoration = 'none';
      }
   }

   matches.textContent = count + ' matches found';

}
