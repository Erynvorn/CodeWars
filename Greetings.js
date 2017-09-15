var greet = function(name) {
var nlow = name.toLowerCase();
var ret = nlow.slice(0,1);
ret = "Hello "+ ret.toUpperCase()+nlow.slice(1,nlow.length)+"!";
return ret;
};
