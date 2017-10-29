snail = function(array) {
  var ret = [];
  
  for (i = 0;i < array.length ; i++ ) {
   ret.push(array[0][i])}
  for (j=1;j< array.length ; j++) {
   ret.push(array[array.length,j])}
  var newarray =[];
  for (i=1 ; i<array.length ; i++ ) { 
    for (j=0;j<array.length-1 ; j++) {
    newarray[i,j]=array[array.length-i][array.length-j]
    }}
  ret= ret + return snail(newarray);
}
