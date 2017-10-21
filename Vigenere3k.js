function VigenereAutokeyCipher(key, abc) {
  this.encode = function (str) {
    console.log(key);
    console.log(abc);
    var cleanstr = '';
    for (i=0;i<str.length; i++) { if (abc.indexOf(str.charAt(i)) > -1) { cleanstr = cleanstr+str.charAt(i) }}
    console.log(str + " " + cleanstr);
    var lk = key.length;
    var la = abc.length;
    var posk = 0; //position in the key
    var posm = 0; //position in the message
    var ret = ''; // return string
    var car = ''; //working character
    var pos = ''; //position in alphabet of character to encode
    var cod = ''; //position in alphabet of coding charater
    //long loop to encode all elements of the string string
    for (i = 0 ; i < str.length ; i++) {
     pos=abc.indexOf(str.charAt(i));
     if (pos < 0) {car = str.charAt(i)} else 
     {
       if (posk < lk) { cod = abc.indexOf(key[posk]); posk=posk+1 } else 
        { cod = abc.indexOf(cleanstr[posm]) ; posm = posm + 1 }
       car = abc.charAt((pos+cod)%la);
     }
     ret =ret+car;
    }
    return ret;
  };
  this.decode = function (str) {
    console.log(key);
    console.log(abc);
    var lk = key.length;
    var la = abc.length;
    var posk = 0; //position in the key
    var posm = 0; //position in the message
    var ret = ''; // return string
    var cleanret = '' ; // to decode without special characters
    var car = ''; //working character
    var pos = ''; //position in alphabet of character to encode
    var cod = ''; //position in alphabet of coding charater
    //long loop to encode all elements of the string string
    for (i = 0 ; i < str.length ; i++) {
     pos=abc.indexOf(str.charAt(i));
     if (pos < 0) {car = str.charAt(i)} else 
     {
       if (posk < lk) { cod = abc.indexOf(key[posk]); posk=posk+1 } else 
       { cod = abc.indexOf(cleanret[posm]) ; posm = posm + 1 }
       car = abc.charAt((pos-cod+la)%la);
       cleanret = cleanret +car;
     }
     ret =ret+car;
    }
    return ret;
  };
}

var key = 'PASSWORD';
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var c = new VigenereAutokeyCipher(key, abc);
//c.encode('AAAAAAAAPASSWORDAAAAAAAA') ; //, 'PASSWORDPASSWORDPASSWORD');
c.decode('PASSWORDPASSWORDPASSWORD'); //, 'AAAAAAAAPASSWORDAAAAAAAA');
