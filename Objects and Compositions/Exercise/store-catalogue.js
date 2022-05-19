function solve(input){
input.sort((a, b) => a.localeCompare(b));

let catalogue = {}

for(i=0;i<input.length;i++){
    let current=input[i].split(' : ');
    input[i]=current[0]+': '+current[1];
    let index = input[i].substring(0,1);
    if(catalogue[index]!=undefined){catalogue[index].push(input[i])}
    else{let array = [];array.push(input[i]);
        catalogue[index]=array;}


}

for (const key in catalogue) {
  console.log(key);
 for (const entry of catalogue[key]) {
      console.log('  '+entry)
 }
        
    }
}





solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)