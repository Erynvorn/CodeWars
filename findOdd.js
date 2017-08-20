;; This buffer is for text that is not saved, and for Lisp evaluation.
;; To create a file, visit it with <open> and enter text in its buffer.

function findOdd(A) {
  var B = A.sort(function(a, b){return a - b});
  var odd = -1;
  console.log(B);
  var Blen = A.length;
  console.log(Blen);

    for (i = 0; i < (Blen -1)/2; i++) {
       if ( B[2*i] != B[2*i+1] ) {odd = 2*i ; i = Blen}
   }
 
if (odd === -1) { odd = Blen - 1 }
return B[odd];
}
//happy coding!


 function findOdd(A) {
  var B = A.sort(function(a, b){return a - b});
  var odd = -1;
  console.log(B);
  var Blen = A.length;
  console.log(Blen);

  if (Blen === 1) { return A[0] ;} 
  else
     {
       for (i = 0; i < (Blen -1)/2; i++) {
         if ( B[2*i] != B[2*i+1] ) {odd = 2*i ; i = Blen;}
       }
 
if (odd === -1) { odd = Blen - 1 ; }
return B[odd];
}
  //happy coding!
