
function expandedForm(num) {
var a = [];
var b = 0;
var i = 0;
var output = "";
while (num > 0) {
  b = num % 10 ; 
  a[i] = b ;
  i++ ;
  num = (num - b ) / 10 ;  
}
var mult = 1;
for ( j = 0 ; j < i ; j++ ) {
  a[j] = a[j] * mult;
  mult = mult * 10
}
for ( j = 0 ; j < i ; j++) {
  if (a[j] > 0) {output = a[j] + " + " + output;}
}
return output.slice(0,output.length -3); // Your code here
