function encrypt(text, n) {
var a = "" ;
var b = "" ;
if (text == null) { return text } else {
var l = text.length;
if ((n < 1)||(l<1) ) { return text } else {
while (n >0) 
  {  
   for ( i = 0 ; i < l + 1   ; i++ ) {
      a = a + text.slice(i,i+1) ;        
      b = b + text.slice(i+1,i+2 ) ;
      i++;
      }
  text = b+a;
  n--
  a = "";
  b = "";
  }
}
  return text;
}
}

function decrypt(encryptedText, n) {
var a = "" ;
var b = "" ;
if (encryptedText === null) { return encryptedText } else {
var l = encryptedText.length;
if ( (l % 2) === 0) { 
  var l1 = l / 2;
  if ((n < 1)||(l<1) ) { return encryptedText } else {
    while (n >0) 
    {  
      for ( i = 0 ; i < l1   ; i++ ) {
        a = a + encryptedText.slice(l1+i,l1+i+1) ;        
        a = a + encryptedText.slice(i,i+1 ) ;
        }
    encryptedText = a;
    n--;
    a = "";
  }
  return encryptedText;
}
} else
{ //console.log("case of odd");
  l1 = ( l - 1 ) /2 ; 
  if ((n < 1) || (l < 1 ) ) { return encryptedText } else {
  while (n >0) 
  {  
   for ( i = 0 ; i < l1   ; i++ ) {
      a = a + encryptedText.slice(l1+i,l1+i+1) ;        
      a = a + encryptedText.slice(i,i+1 ) ;
      }
      
  encryptedText = a + encryptedText.slice(l-1, l);
  n-- ;
  a = "";
  }
}
  return encryptedText;
}
} 
}
