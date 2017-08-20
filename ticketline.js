
 function tickets(peopleInLine){
//n25= increment at each 25                                                                                                                    
//n50 = ok if n25>1 n50+ N25-                                                                                                                  
//n100 =ok if (n50 > 0 and N25>0 then N50-1 n25-1 or n25>2 n25 -3                                                                              

var line = peopleInLine.length;
console.log(line);
var n25 = 0;
var n50 = 0;
answer = "YES";

for (i = 0; i < line ; i++) {
    var rendu = 0;
 if (peopleInLine[i] === 25) { n25 = n25 + 1 }
 if ((peopleInLine[i] === 50) && (n25 === 0) ) { answer = "NO" }
 if ((peopleInLine[i] === 50) && (n25 > 0) ) { n50 = n50 +1 ; n25 = n25 - 1}

 if ((peopleInLine[i] === 100) && (((n50 === 0) && (n25 < 3)) || (n25 === 0))) { answer = "NO"}
 if ((peopleInLine[i] === 100) && (n50 > 0) && (n25 > 0)) { n50 = n50 - 1 ; n25 = n25 - 1 ; rendu = 1 }
 if ((peopleInLine[i] === 100) && (n25 > 2) && (rendu === 0)) { n25 = n25 -3}

}
    return answer;
}
