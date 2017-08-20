function persistence(num) {

var counter = 0;
var i = 1;
var a =[];
a[0]= 1;

  while (num > 9) {
   while (num > 0) { a[i] = num % 10 ;
                     num = (num - a[i] ) / 10;
                     i++;
                   }
   num = 1; 
   for ( j = 0 ; j < i ; j++ ) { num =  num * a[j] }
   i = 1;
   counter++ ;                 
   }     
return counter;
}
