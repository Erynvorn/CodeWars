function longestSlideDown (pyramid) {
  ll = pyramid.length;
  console.log (ll);
  var  a = [];
  var best = [];
  var left = [];
  var right = [];
  count = ll -1;
  for ( i = 0; i < ll ; i++) {
    a[i] = pyramid[ll-1][i];
  }
    
   for ( j = 0 ; j < ll ; j++) {
  console.log ( "a[ " + j + " ]" + a[j])  ;  
   }
   
  while ( count > 0  ) {
  for ( i = 0 ; i < count ; i++){
    left[i]= pyramid[count -1 ][i] + a[i];
    right [i]= pyramid[count -1 ][i] + a[i+1];
    best[i] = Math.max ( left[i], right[i]);
    console.log ("count "+ count + " i " + i + "  and best of i " +best[i]);
    }
  
  for ( j = 0 ; j < count; j ++) {
    a [j] = best [j];
  }
  // a [ count + 1] = 0;
  count--;
  }
  return best[0];
}

