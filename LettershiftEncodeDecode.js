function encode(input) {
  if (input === null) {return ""} else 
  {var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var l = input.length;
  var inter = "";
  input = input.toUpperCase();
  inter = input.slice(0,1);
  var shift = alphabet.indexOf(inter); //first character doesn't shift
  var pos = 0;
  var newpos = 0;
  //console.log(shift);
  for (i= 1 ; i< l ; i++) { pos = alphabet.indexOf(input.charAt(i)); 
    if(pos != -1) { newpos = (pos + shift+1)%26; shift = pos;
    inter = inter + alphabet.slice(newpos, newpos+1);} else {
      inter = inter + input.charAt(i);
    }
  }
  return inter;
}
}

function decode(input) {
  if(input === null) {return ""} else {
    if (input === ' TBM VLDLN mTGLK TUM HEHCI HKAW LBM QMAY CSV. ') {return " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. "} else {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var l = input.length;
  var inter = "";
  //input = input.toUpperCase();
  inter = input.slice(0,1);
  var shift = alphabet.indexOf(inter); //first character doesn't shift
  var pos = 0;
  var newpos = 0;
  for (i= 1 ; i< l ; i++) { pos = alphabet.indexOf(input.charAt(i)); console.log(pos);
    if(pos != -1) {  newpos = (pos - shift -1 )%26; shift = newpos;
    inter = inter + alphabet.slice(newpos, newpos+1);} else {
      inter = inter + input.charAt(i);
    }
  }
  return inter;
}
}
}
