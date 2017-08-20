function isIsogram(str){
    var ret = true;
    str = str.toLowerCase();
    var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    alphabet="abcdefghijklmnopqrstuvwxyz";
    if (str != "") {
      for ( i = 0 ; i < str.length ; i++) {
      n = alphabet.indexOf(str.charAt(i));
      count[n] = count[n] + 1 ;
      console.log(count[n]);
      }
    }
  for ( i = 0 ; i < 26 ; i++) {
    if (count[i]>1) {ret = false}
  }
return ret;
}
