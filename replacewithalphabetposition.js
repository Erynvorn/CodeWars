function alphabetPosition(text) {
var alp ="abcdefghijklmnopqrstuvwxyz";
var txt = text.toLowerCase();
var l = text.length;
var New = "";
var pos = 0
for ( i = 0 ; i < l ; i++ ) {
   pos = alp.indexOf(txt.charAt(i)) + 1;
  if ( pos > 0 ) { New = New + pos.toString() + " "  }
  }
// var lNew = New.length - 1;
//  New = New.slice(0,lNew)
//  return New;
return New.slice(0,New.length -1);
}
