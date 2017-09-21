function spoonerize(words) {
  var pos = words.indexOf(" ");
  return words.slice(pos+1,pos+2)+words.slice(1,pos+1)+ words.slice(0,1)+words.slice(pos+2,words.length);
}

//spoonerize("nit picking") //, "pit nicking");
//spoonerize("wedding bells") //, "bedding wells");
spoonerize("jelly beans") //, "belly jeans")
