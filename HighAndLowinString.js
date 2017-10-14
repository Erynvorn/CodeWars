function hal(numbers, h, l) {
  if (numbers.indexOf(" ") === -1) {
    var lastn = Number(numbers.slice(0,numbers.length));
    if (lastn > h) { h = lastn } else { if (lastn < l) {l = lastn }}
    return String(h+" "+l)} else {
    var neu = Number(numbers.slice(0,numbers.indexOf(" ")));
    if (neu > h) { h = neu } else { if (neu < l) {l = neu }}
  return hal(numbers.slice(numbers.indexOf(" ")+1, numbers.length),h,l);
  }
}

function highAndLow(numbers){console.log(numbers);
   if (numbers.indexOf(" ") === -1) { var hh = Number(numbers.slice(0,numbers.length)); 
   var ll = hh ; return String(hh+" "+ll)} else {
   
   var h = Number(numbers.slice(0,numbers.indexOf(" ")));
   var l = h;
   var ret = hal(numbers,h,l);
return ret;
}
}


//highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") //, "542 -214");
//highAndLow("1 -1") //, "1 -1");
//highAndLow("1 1") //, "1 1");
highAndLow("42")
