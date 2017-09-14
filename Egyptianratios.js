function decompose(n) {
var pos = n.indexOf("/");
var l = n.length;
var nu ="";
var de = "";
var num = 0;
var Newnum = 0;
var den = 0;
var Newden = 0;
var ret = [];
var i = 0;

if ( pos > 0) {
  nu = n.slice(0,pos);
  de = n.slice(pos+1, l);
  num = parseInt(nu,10);
  den = parseInt(de,10);
  if (num>den) {ret[0] = String(parseInt(num/den)); i=1; num = num - parseInt(num/den)*den}
}
if (pos === -1) {
  // check if n > 1
  var nn = Number(n);
  console.log(nn);
  if (nn > 1) {ret[0] = String(parseInt(n,10)); i=1; n = String(nn-parseInt(n,10))}
  var pospoint = n.indexOf(".");
  var mul = l - pospoint -1 ;
  nu = n.slice(pospoint + 1, l);
  num = parseInt(nu,10);
  den = Math.pow(10,l - pospoint -1 );
  console.log(l + '  ' + pospoint + "  "+ mul + "  " + nu + "  "+ den);
}
 if (num === 0) { return ret } else {
   if (num >= den ) {ret =[String(Math.floor(num/den))]; } else {
   
   while (num > 0) { 
     ret [i]= "1/"+String(Math.ceil(den/num));
     i++;
      console.log(ret);
      Newnum = num * Math.ceil(den/num) - den;
      Newden = den * Math.ceil(den/num);
      num = Newnum;
      den = Newden;
      console.log(num + "  " + den);
     }
   }
 }
 return ret;
}



//decompose('3/4') //, ["1/2", "1/4"]);
//decompose('12/4') //, ["3"]);
//decompose('0.66') //, ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);
decompose("5/4") //, ["1","1/4"]);
