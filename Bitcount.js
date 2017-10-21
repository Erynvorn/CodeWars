
var countBits = function(n) {
  if (n === 0 ) {return 0} else {
   var b = n.toString(2);
   return b.match(/1/g).length;
  }
}

countBits(0);//, 0);
//countBits(4);//, 1);
//countBits(7);//, 3);
//countBits(9);//, 2);
//countBits(10);//, 2);
