decodeMorse = function(morseCode){
console.log(morseCode);
  var mc = morseCode.trim().split(" ");
  console.log(mc);
  for ( i=0 ; i<mc.length ; i++) {
    if (mc[i] === '') {mc[i] =" "} else {
    mc[i]=MORSE_CODE[mc[i]] }}
    console.log(mc);
  return mc.toString().replace(/,/g,"").replace(/  /g," ");  //your code here
}

decodeMorse("mya pyx");
