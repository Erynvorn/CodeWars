var isMonotone = function(arr){
  var len = arr.length;
  var err = 0;
  if (len > 0 ) {console.log(len); 
    for (i = 0; i < len-1;i++) { console.log(arr[i]+ "  " + arr[i+1] + "err "+ err);
  if ( arr[i] > arr[i+1]) {err = err + 1; i = len}}}
  console.log(err)
  if ( err> 0) {return false } else {return true;}// << change this
}
