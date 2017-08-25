//compute numerator

function convertFrac(lst){
 var ll = lst.length;
 if (ll === 0) { ret = ""} else {
 console.log ("ll :"+ ll);
 var den = 1;
 var b = [];
 var max = lst[0][1];
 for ( i= 0 ; i < ll ; i++) {
   den = den * lst[i][1];  // product of denominators
   if (max < lst[i][1]) { max = lst[i][1]}  // calculate largest denominator
 }

 for (i = 0 ; i < ll ; i++) {
   lst[i][0]= lst[i][0]*den/lst[i][1];  //compute numerators
   lst[i][1]=den;
   console.log ("lst["+i+"] = "+ lst[i]); 
 }
 
 var flag = 0;
 var div =2 ;
 while (div < max+1) 
    {
    flag = 0;
    for (i = 0 ; i < ll ; i++) { 
          if (lst[i][0] % div === 0) { 
                  flag = flag + 1 } else {i=ll}
   
             }
   if (den % div === 0 ) { flag = flag +1 }
  // console.log("ll : " + ll + " Flag : " + flag + "  Div: " + div);
 
   if (flag === ll+1 ) {for  (k = 0 ; k < ll ; k++) { lst[k][0] = lst[k][0]/div} }
   if (flag === ll+1 ) {for  (j = 0 ; j < ll ; j++) { lst[j][1] = lst[j][1]/div} }
   if (flag != ll+1 ) { div = div + 1}
  // if (flag === ll ) { console.log ("Victory")}
 }
var ret= '';
for ( i = 0 ; i < ll ; i++) {
ret = ret + "("+lst[i][0]+","+lst[i][1]+")"}
console.log(ret);
}
 return ret ;
}
