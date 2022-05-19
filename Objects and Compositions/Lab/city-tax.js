function solve(nameCity, populationCity, treasuryCity) {
  let cityRecord = {
    name: nameCity,
    population: populationCity,
    treasury: treasuryCity,
    taxRate: 10,
    collectTaxes: function () { this.treasury = Math.floor(this.treasury + population * taxRate); },
    applyGrowth: function (percentage) { Math.floor(population * (1 + percentage / 100)); },
    applyRecession: function (percentage) { Math.floor(population * (1 - percentage / 100)); },


  };

  const city =
    cityTaxes('Tortuga',
      7000,
      15000);
  console.log(city);


}