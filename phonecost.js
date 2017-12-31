 const BANK_ACCOUNT = 4500;
const phone = 99.99;
const acces = 9.99;
const tax = 0.08;
const appetite = 200;
var spend = 0;
var numberphone = 0;

var costofunit = (phone+acces)* (1+tax);
console.log(costofunit);

function phonebuying () {
while (spend+costofunit <BANK_ACCOUNT) {
  spend += costofunit; 
  numberphone++;
}
console.log (spend);
console.log ( numberphone);
}

phonebuying()
