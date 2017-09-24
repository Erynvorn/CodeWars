
function travel(r, zipcode) {
    //console.log(r);
    //console.log(zipcode);
    var ret = '';
    if (zipcode.length === 0) {return ":/"} else { 
    ret = zipcode+":";
    inter = [];
    addre = "";
    num = "";
    lr = r.length;
    var i = 0;  // start 
    var j = 0;  // end
    var k = 0; // number for correct addresses
    console.log(lr);
    
    // get into inter[] all the good raw adresses 
      while( j < lr) {
        if (r.slice(j,j+1) === ',') { if (r.slice(j-zipcode.length,j) === zipcode) {inter[k]= r.slice(i,j); k++} ; i=j+1; j++} else {j++}
      }
      console.log(inter);
     if (k === 0) {return ret+"/"} else { 
      //process inter[] to prepare output of the numbers
      var pos = 0;
      for (i = 0; i < inter.length; i++) {
        pos = inter[i].indexOf(" ");
        num = num + ","+inter[i].slice(0,pos);
      }
      num = num.slice(1,num.length);
      console.log(num);
    
      // extract addresses
      
      for (i=0 ; i < inter.length ; i++) {pos = inter[i].indexOf(" ") + 1; addre = addre + ","+inter[i].slice(pos,inter[i].length - zipcode.length-1);}
      addre=addre.slice(1,addre.length);
      console.log(addre);
      ret = ret + addre + "/"+ num
    
    
    
    
    return ret;// your code
  }
  
}
}


const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
  + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
  + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
  + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
  + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
  + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
  + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
  + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
  + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
  + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"


const code = "OH 43071,NY 56432,ZP 32908,AE 56210,RE 13000,EX 34342,SW 43098,AA 45521,GG 30654,ZP 32908,AE 56215,RE 13200,EX 34345,"
     + "RE 13222,RE 13001,SW 43198,AA 45522,GG 30655,XX 32321,YY 45098"
     


//travel(ad, "AA 45522")//, "AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670")
//travel(ad, "EX 34342")//, "EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100")
//travel(ad, "EX 34345")//, "EX 34345:Pussy Cat Rd. Chicago/100")
//travel(ad, "AA 45521")//, "AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67")
travel(ad, "AE 56215")//, "AE 56215:Main Al. Bern/320")
//travel(ad, "")//, "AE 56215:Main Al. Bern/320")
