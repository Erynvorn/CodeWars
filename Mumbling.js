function accum(s) {
	var l = s.length;
  var ret = '';
  for (i=0;i<l;i++) {console.log("i = " + i + "  "+ s.charAt(i));
    ret = ret + s.charAt(i).toUpperCase();
   for (j=1; j<=i; j++){console.log("j = " + j);
   ret = ret + s.charAt(i).toLowerCase();}
   ret = ret + '-';
  }
  
  ret = ret.slice(0, ret.length-1);
  return ret;// your code
}
