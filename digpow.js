function digPow(n, p){
var a = [];
var b = 0;
var i = 0;
var num = n;
var nn = 0;
var output = "";
while (num > 0) {
  b = num % 10 ; 
  a[i] = b ;
  i++ ;
  num = (num - b ) / 10 ;  
}
for ( j = 0 ; j < i ; j++ ) {
  nn = nn + Math.pow (a[j], p + i - j - 1);
}
if ( nn % n === 0 ) { return nn/n } else { return -1 }
}
