function validatePIN (pin) {
  var n = false
  var ch = "0123456789"
  var pl = pin.length
  if (pl === 4 || pl === 6) { 
    for (i = 0 ; i < pl ; i++ ) {
      str = pin.charAt(i) ;
      console.log(str);
      if ( ch.includes( str )) { n = true } else { n = false ; i = pl}
    }
  }
return n
}


//return true or false

