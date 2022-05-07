function solve(data, input) {
    criteria = input.split('-')[0];
    value = input.split('-')[1];
    let counter = 0;
    JSON.parse(data).filter(e => e[criteria] == value).forEach(e => {
        console.log(`${counter}. ${e['first_name']} ${e['last_name']} - ${e['email']}`);
        counter++;
    });

}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
)