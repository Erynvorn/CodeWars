var isSquare = function(n){
result = false;
if ( n > -1 ) {
    for ( i = 0 ; i * i < n + 1 ; i++)  {
      if ( n === i * i) { result = true }   
    }
  }
return result; // fix me
}
