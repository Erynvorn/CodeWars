function fridayTheThirteenths(start, end) {
  
if (end === undefined) {end = start}  //if input is missing
var d = new Date();                   // new date object
var ret ="";
for (j=0 ; j< end-start+1; j++) {     //looping the years
 for(i=0; i<12;i++){                  //looping the months
    d.setFullYear(start+j,i,12, d.getDay());  // create the 13th of each month
    // console.log(d);
    if (d.getDay()===4){ret = ret + String(i+1)+"/13/"+String(start+j)+" "} //if Friday output
   }
  }
return ret.slice(0,ret.length-1); //output and remove last space
}


//var d = new Date();
//d.setFullYear(1983,9,1); 
//var n = d.getDate();
//var day = d.getDay();
//var y = d.getFullYear();
//console.log(n + " " + day + " " + y);


fridayTheThirteenths(2000);
