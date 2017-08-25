function listing(fruits){
console.log (fruits);
var fLen = fruits.length;
var text ="";
var i = 0;
console.log(fLen);
if (fLen === 0) { text = "" ;}
if (fLen === 1) { text = fruits[0].name ;}
if (fLen === 2) { text = fruits[0].name + " & " + fruits[1].name ;}
if (fLen > 2) {while (i<fLen-2) {text += fruits[i].name + ", "; i++;} }
if (fLen >2) {   text += fruits[fLen-2].name + " & " + fruits[fLen-1].name ;}
 
return text;
} 
