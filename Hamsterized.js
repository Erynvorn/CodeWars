function hamsterMe(code, message) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var coda = [];
    for (i=0; i < code.length; i++) {coda[i]= code.slice(i,i+1); console.log(coda[i]) }
    coda.sort();
    var mapping = []
    for (i=0; i < code.length; i++) {mapping[alphabet.indexOf(coda[i])] = 1}
    
    
    for (j=0; j <26 ; j++) { console.log (mapping[j]) }
    for (j=0; j <26 ; j++) { if (typeof(mapping[j]) === "number" && typeof(mapping[j+1]) === "undefined"){mapping[j+1]= mapping[j]+1} }
    if (typeof(mapping[0]) === "undefined") {mapping[0]=mapping[25]+1}
    for (j=0; j <26 ; j++) { if (typeof(mapping[j]) === "number" && typeof(mapping[j+1]) === "undefined"){mapping[j+1]= mapping[j]+1} }
     for (j=0; j <26 ; j++) { console.log (mapping[j]) }
     
    var mapping2 = [];
    for (i=0; i < code.length; i++) {mapping2[alphabet.indexOf(coda[i])] = coda[i]}
    
    
    for (j=0; j <26 ; j++) { console.log (mapping2[j]) }
    for (j=0; j <26 ; j++) { if (typeof(mapping2[j]) === "string" && typeof(mapping2[j+1]) === "undefined"){mapping2[j+1]= mapping2[j]} }
    if (typeof(mapping2[0]) === "undefined") {mapping2[0]=mapping2[25]}
    for (j=0; j <26 ; j++) { if (typeof(mapping2[j]) === "string" && typeof(mapping2[j+1]) === "undefined"){mapping2[j+1]= mapping2[j]} }
     for (j=0; j <26 ; j++) { console.log (mapping2[j]) } 
    
    var mess ='' ;
    for (k=0 ; k< message.length ; k++) {
      mess = mess + mapping2[alphabet.indexOf(message.slice(k,k+1))] + mapping[alphabet.indexOf(message.slice(k,k+1))];
    } 
     return mess;
}




//hamsterMe("hamster", "hamster") //, "h1a1m1s1t1e1r1" );
//hamsterMe("hamster", "helpme") //, "h1e1h5m4m1e1" );
//hamsterMe("hmster", "hamster") //, "h1t8m1s1t1e1r1", "Lack of letter in the code?");
//hamsterMe("hhhhammmstteree", "hamster") //, "h1a1m1s1t1e1r1", "Duplication of letters in code?" );
//hamsterMe("hamster", "abcdefghijklmnopqrstuvwxyz") //, "a1a2a3a4e1e2e3h1h2h3h4h5m1m2m3m4m5r1s1t1t2t3t4t5t6t7" );
//hamsterMe("f", "abcdefghijklmnopqrstuvwxyz") //, "f22f23f24f25f26f1f2f3f4f5f6f7f8f9f10f11f12f13f14f15f16f17f18f19f20f21", "One letter code ?");
