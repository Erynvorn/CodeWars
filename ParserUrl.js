function domainName(url){
var domain = "";
var lurl = url.length;
var pos = url.indexOf("https://");
if (pos > -1) {url = url.slice(8,lurl);}
pos = url.indexOf("http://");
if (pos > -1) {url = url.slice(7,lurl);}
pos = url.indexOf("www.");
if (pos > -1) {url = url.slice(4,lurl);}
pos = url.indexOf(".");
if (pos > -1) {url = url.slice(0,pos);}

console.log( pos);

return url;  //your code here
}
