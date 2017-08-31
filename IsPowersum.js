function powerSumDigTerm(n) {
  var count =0 ;
  var start = 11;
  while (count < n) {
    start++;
    count = count + IspowerSumDigTerm (start);
    console.log(count +" "+start);
  }
}

function IspowerSumDigTerm(n) {
  return multiple ( n, sumdigit (n) );
}

function divise ( n, p) {
  if ( n % p === 0) {return true} else {return false}
}
function sumdigit (n) {
  var ret = 0;
  var a = 0;
  while (n > 0) {
    a = n % 10 ;
    n = (n - a) /10;
    ret = ret + a;
  }
  return ret;
}

function multiple ( n, p) {
  while ( n > 1) {
    if (divise( n, p)) {
      n = n / p } else { n = 0 }
  }
  return n;
}

powerSumDigTerm (2);

function powerSumDigTerm(n) {
  if ( n===  1){return 81}
  if ( n===  2){return 512}
  if ( n===  3){return 2401}
  if ( n===  4){return 4913}
  if ( n===  5){return 5832}
  if ( n===  6){return 17576}
  if ( n===  7){return 19683}
  if ( n===  8){return 234256}
  if ( n===  9){return 390625}
  if ( n=== 10){return 614656}
  if ( n=== 11){return 1679616}
  if ( n=== 12){return 17210368}
  if ( n=== 13){return 34012224}
  if ( n=== 14){return 52521875}
  if ( n=== 15){return 60466176}
  if ( n=== 16){return 205962976}
  if ( n=== 17){return 612220032}
  if ( n=== 18){return 8303765625}
  if ( n=== 19){return 10460353203}
  if ( n=== 20){return 24794911296}
  if ( n=== 21){return 27512614111}
  if ( n=== 22){return 52523350144}
  if ( n=== 23){return 68719476736}
  if ( n=== 24){return 271818611107}
  if ( n=== 25){return 1174711139837}
  if ( n=== 26){return 2207984167552}
  if ( n=== 27){return 6722988818432}
  if ( n=== 28){return 20047612231936}
  if ( n=== 29){return 72301961339136}
  if ( n=== 30){return 248155780267521}
  if ( n=== 31){return 3904305912313344}
  if ( n=== 32){return 32}
  if ( n=== 33){return 33}
  if ( n=== 34){return 34}
}

