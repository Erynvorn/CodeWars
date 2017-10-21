var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    //trim 0 before and after the message
   console.log(bits);
   var d = bits.indexOf("1"); var e = bits.lastIndexOf("1");
    console.log(d+ "  "+ e);
    bits=bits.slice(d,e+1)
    console.log(bits);
    period = bits.length;
    current = 1;
    test = 0;
    for (i=0; i < bits.length; i++) {if (bits[i]==="1") {test= test+1}}
    if (test===bits.length) {return "." } else {
  for( i= 0 ; i< bits.length-1; i++) 
    { if (bits[i]=== bits[i+1]) {current = current +1} else { period = Math.min(current,period); current =1}
   }
   // period is the time used for the smallest unit
   l = bits.length;
   bit=bits.split("");
   var ret= [];
   for (i=0; i< l/period ; i++)
   {ret[i]=bit[i*period]}
   ret=ret.toString().replace(/,/g,"");
     return ret.replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');
}
}
