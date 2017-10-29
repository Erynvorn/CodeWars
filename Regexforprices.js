String.prototype.toCents=function(){
 var myRe = /^(\$)\d+?[.]\d{2}?$/;
 var OK = myRe.exec(this);
 if (OK) {return Number(this.slice(1,this.indexOf(".")))*100+Number(this.slice(this.indexOf(".")+1))} else {return null}
};

"$1345.44".toCents();
