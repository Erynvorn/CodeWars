function getAllPrimeFactors(n) { 
  if(typeof n === 'number') {
    var remainder = (n % 1);
    if(remainder === 0) {
                          if ( n > 1) {var divisor = [];
                                        var i = 2;
                                        var number = 0;
                                        var ret = "";
  
                                        while (i < n+1) { 
                                          if (n % i === 0) { n = n / i; divisor[number] = i ; number++ ; } else { i++} 
                                        }
                        return divisor;} 
                        if ( n === 0 )  {return []} 
                        if ( n === 1 )  {return [1]} 
                        if (n <0) {return []}// yes, it is an integer
    }
    else if(isNaN(remainder)) {
        return [];// no, data is either: NaN, Infinity, or -Infinity
    }
    else {
       return []; // no, it is a float (still a number though)
    }
}
else {
    return [];// no way, it is not even a number
}
}
  

function getUniquePrimeFactorsWithCount(n) { 
  if(typeof n === 'number') {
    var remainder = (n % 1);
    if(remainder === 0) {
                if ( n > 1) {var div =[];       // positive integer
                        div = getAllPrimeFactors(n);
                        var number = div.length;
                        var b=[]; // unique divisor
                        var c=[]; // count of unique divisor
                        var bcount = 0; // unique divisor
                        var ccount = 0; // count of unique divisor

                        for (i = 0 ; i<number ; i++) {
                              if (div[i] != div[i+1]) {b[bcount]=div[i]; bcount++ }}            
                        for (i = 0 ; i < bcount; i++) {c[i]= 1; }
                                        
                        for ( i = 0 ; i < number ; i++) {
                          if(div[i] === div[i+1] ) {c[ccount]=c[ccount]+1} else {ccount++} }
                                
                        var ret = [];
                        ret[0] = b; ret[1] = c; return ret;}
                                  
                   if (n === 0) {return [[],[]]} 
                   if (n === 1) {return [[1],[1]]}
                   if (n <0) {return [[],[]]}// yes, it is a negative or nil integer
                }
    else if(isNaN(remainder)) {
        return [[],[]];// no, data is either: NaN, Infinity, or -Infinity
                              }
    else {
       return[[],[]]; // no, it is a float (still a number though)
          }
    }
  else {
    return [[],[]];// no way, it is not even a number
    }
  }

function getUniquePrimeFactorsWithProducts(n) {
 if(typeof n === 'number') {
    var remainder = (n % 1);
    if(remainder === 0) {
                          if ( n > 1) { div = getAllPrimeFactors(n);
                            var number = div.length;
                            var b=[]; // unique divisor
                            var c=[]; // count of unique divisor
                            var bcount = 0; // unique divisor
                            var ccount = 0; // count of unique divisor

                        for (i = 0 ; i<number ; i++) {
                              if (div[i] != div[i+1]) {b[bcount]=div[i]; bcount++ }}            
                        for (i = 0 ; i < bcount; i++) {c[i]= 1; }
                                        
                        for ( i = 0 ; i < number ; i++) {
                          if(div[i] === div[i+1] ) {c[ccount]=c[ccount]+1} else {ccount++} }
                        
                        var ret = []  
                        number = c.length;
                        for ( i = 0 ; i< number ; i++ ) {
                          ret[i] = Math.pow(b[i],c[i]);
                        }
                   return ret} 
                   if (n === 0) {return []} 
                   if (n === 1) {return [1]}
                   if (n <0) {return []}// yes, it is a negative or nil integer
    }
    else if(isNaN(remainder)) {
        return [];// no, data is either: NaN, Infinity, or -Infinity
    }
    else {
       return[]; // no, it is a float (still a number though)
    }
}
else {
    return [];// no way, it is not even a number
}
}
