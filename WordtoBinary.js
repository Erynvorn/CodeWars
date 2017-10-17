function wordToBin(str){
  var array=[];
  for (i=0;i<str.length;i++) {
  array[i] = str.charCodeAt(i).toString(2); //charCode=UTF and string2 = binary
  if (array[i].length===7) {array[i]="0"+array[i]}
  }

  return array;
}
  
  
  


wordToBin("man")
