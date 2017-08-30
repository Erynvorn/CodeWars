 

function primeFactors(n){
var divisor = [];
var i = 2;
var number = 0;
var ret = "";
  
while (i < n+1) {
    if (n % i === 0) { n = n / i; divisor[number] = i ; number++ ; console.log("divisor =" + i + " number " + number) } else { i++} 
  }

var b=[]; // unique divisor
var c=[]; // count of unique divisor
var bcount = 0; // unique divisor
var ccount = 0; // count of unique divisor

for (i = 0 ; i<number ; i++) {
  if (divisor[i] != divisor[i+1]) {b[bcount]=divisor[i]; bcount++}
}
for (i = 0 ; i < bcount; i++) {
  c[i]= 1;
}
for ( i = 0 ; i < number ; i++) {
  if(divisor[i] === divisor [i+1] ) {c[ccount]=c[ccount]+1} else {ccount++} 
}  
for ( i = 0 ; i < ccount ; i++) {
  if (c[i] ===1) {ret = ret +"("+b[i]+")"} else {ret = ret +"("+b[i]+"**"+c[i]+")" }
}
  return ret;
  
}
primeFactors(7775460); 
//Test.assertEquals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
 
