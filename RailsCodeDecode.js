

function encodeRailFenceCipher(string, numberRails) {
  var l = string.length;
  var nr = numberRails;
  console.log(nr + " " + string);
  var direction = [];
  for ( i = 0 ; i< l ; i++) {
    pos = i % (2*nr-2)+1;
    if (pos > nr) {pos = 2*nr - pos;}
    //console.log(pos);
    direction[i] = pos;
  }
  sub = [];
  for (i=1;i<nr+1;i++) {sub[i]="";}
  for (i=0; i<l; i++) {
    console.log(string.charAt(i));
    sub[direction[i]]=sub[direction[i]]+string.charAt(i);
  }
  var ret ="";
  for(i=1;i<nr+1;i++) { ret = ret+ sub[i];}
  return ret;
}

function decodeRailFenceCipher(string, numberRails) {
  var l = string.length;
  var nr = numberRails;
  console.log(nr + " " + string);
  var direction = [];
  for ( i = 0 ; i< l ; i++) {
    pos = i % (2*nr-2)+1;
    if (pos > nr) {pos = 2*nr - pos;}
    direction[i] = pos;
  }

  var pos=0;
  var map=[];
  
  for (i=1; i<numberRails+1 ; i++) {
      for (j=0; j<l; j++) {if (direction[j]===i) {map[pos] = j; pos= pos+1 }
    }
  }

  ret=[];
  for (i=0;i<l;i++) {
    ret[map[i]]=string.slice(i,i+1); 
  }
  var sol ='';
  for (i=0; i<l; i++) { sol = sol+ret[i]}
  return sol;
}

decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN",3)

//W . . . E . . . C . . . R . . . L . . . T . . . E
//. E . R . D . S . O . E . E . F . E . A . O . C .
//. . A . . . I . . . V . . . D . . . E . . . N . .
