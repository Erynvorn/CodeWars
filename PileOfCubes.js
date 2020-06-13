function cube (x) { return ( x*x*x) }
function sommecubeconditionelle (n,m) {
  var sum =0;
  while ((sum < m) && (n > 0)) {
    sum = sum + cube (n);
    n--;
  //  console.log("n, m , sum " + n + " "+ m + " " +sum);
  }
  return (sum);
}
function findNb(m) {
 var p = 1;
 var ret = -1;
 var sum = 0;
 while ( p < m ) { sum = sommecubeconditionelle (p, m ); //console.log (sum);
                    if (sum === m )  {ret = p ; p = m } else {if ( sum > m ) { p = m+1} else {p++}}}
                    
 return (ret);
 
 
 
 
 // your code
 //   return (-1);
}

//sommecubeconditionelle(5,130);
findNb(135440716410000)
//findNb(4183059834009) //, 2022)
//(findNb(24723578342962), -1)
//(findNb(135440716410000), 4824)
//(findNb(40539911473216), 3568)
//The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.


