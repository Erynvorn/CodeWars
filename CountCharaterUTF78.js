;; This buffer is for text that is not saved, and for Lisp evaluation.
;; To create a file, visit it with <open> and enter text in its buffer.

function count (string) {  
   var lstr = string.length;
   var alphabet = "abcdefghujklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var n = 0;
   var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   var ret = {};
   if (lstr >0 ) {
      for ( i = 0 ; i < string.length ; i++) {
      n = alphabet.indexOf(string.charAt(i));
      count[n] = count[n] + 1 ;
    //  console.log(n + "  " +count[n]);
      }
  }
  for ( i = 0; i<52 ; i++) {
    console.log ( "i = " + count[i]+ alphabet.slice (i, i+1));
    if (count[i] > 0) {ret = ret + alphabet.slice(i,i+1) + ": "+ count[i]+", " }
  }
  var lr = ret.length;
  ret = ret.slice(0,lr-2);
  
   return (ret);
}
