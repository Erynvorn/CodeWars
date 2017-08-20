

function diamond(n){
  var diam = null;
  var n2 = (n + 1)/ 2;
  if ( n > 0 && ( Number.isInteger(n2)) ) {
    var blank = " ";
    var blank = blank.repeat(n);
  
    var star = "*";    
    var star = star.repeat(n);
    
    var up = "";
    var below = "";
    
    var ret = "\n";   

    for ( i = 1 ; i < (n - 1) ; i = i + 2) {
      up    = up +  blank.slice( 0 , (n - i) / 2 ) + star.slice( 0 , i ) + ret;   
      below = blank.slice ( 0 , ( n - i ) / 2 ) + star.slice( 0 , i ) + ret + below;
    }
  diam = up + star + ret + below;
 }
  
return diam;
}
