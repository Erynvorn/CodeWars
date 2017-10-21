function VigenereCipher(key, abc) {
  this.encode = function (str) {
    var cba = []
    var alpha = abc.split(''); 
    var l = Math.ceil(alpha.length / key.length);
    var keys = key.repeat(l).split('');
    var pos = 0;
    for (i=0 ; i < str.length ; i++) {
    if (alpha.indexOf(str[i]) === -1) {cba[i]=str[i]} else {
     pos = alpha.indexOf(keys[i]) + alpha.indexOf(str[i]);
     pos = pos % (alpha.length);
      cba[i] = alpha[pos];
    }
    }
    return cba.join('');
  };
  this.decode = function (str) { 
    var cba = [];
    var alpha = abc.split(''); 
    var l = Math.ceil(alpha.length / key.length);
    var keys = key.repeat(l).split('');
    var pos = 0;
    for (i=0 ; i < str.length ; i++) {
    if (alpha.indexOf(str[i]) === -1 ) {cba[i]=str[i]} else {
     pos =  - alpha.indexOf(keys[i]) + alpha.indexOf(str[i]) + alpha.length;
     pos = pos % (alpha.length);
      cba[i] = alpha[pos];
    }
    }
    return cba.join('');
  };
}




var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenereCipher(key, abc);

//c.encode('codewars');//, 'rovwsoiv');
c.decode('rovwsoiv/');//'

//'srawedoc');//, 'hrsoarff')
