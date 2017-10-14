function shuffleIt(arr,...arr2){
  l = arr2.length;
  console.log(arr2 + "  " +l);
  for (i=0;i<arr2.length;i++){
    var [a,b] = [arr[arr2[i][0]], arr[arr2[i][1]]];
    console.log (a + " " + b);
    [b,a] = [a,b];
    console.log (a + " " + b);
    arr[arr2[i][0]] = a;
    arr[arr2[i][1]] = b;
    console.log(arr);
  }
  return arr;
}
