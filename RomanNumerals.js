function solution(number){
  console.log(number);
  var num = number % 10;
  console.log(num);
  var ret = '';
  if (num === 1 ) {ret = 'I' }
    else {if (num === 2 ) {ret = 'II' }
      else {if (num === 3 ) {ret = 'III' }
        else {if (num === 4 ) {ret = 'IV'} 
          else {if (num === 5 ) { ret = 'V' }
            else {if (num === 6 ) { ret = 'VI' }
              else {if (num === 7 ) { ret = 'VII' }
                else {if (num === 8 ) { ret = 'VIII' }
                  else {if (num === 9 ) { ret = 'IX' }
  }}}}}}}}
  
  var dix = (number %100 -num)/10;
  console.log(dix);
  if (dix === 1 ) {ret= 'X'+ ret }
    else {if (dix === 2 ) {ret= 'XX' +ret}
      else {if (dix === 3 ) {ret= 'XXX'+ret }
        else {if (dix === 4 ) {ret= 'XL'+ret} 
          else {if (dix === 5 ) { ret= 'L' +ret}
            else {if (dix === 6 ) { ret= 'LX' +ret}
              else {if (dix === 7 ) { ret= 'LXX' +ret}
                else {if (dix === 8 ) { ret= 'LXXX' +ret}
                  else {if (dix === 9 ) { ret= 'XC' +ret}
  }}}}}}}}
  
  var cen = (number %1000 -dix * 10 - num) /100;
  console.log(cen);
  if (cen === 1 ) {ret= 'C'+ret }
    else {if (cen === 2 ) {ret= 'C' +ret}
      else {if (cen === 3 ) {ret= 'CCC' +ret}
        else {if (cen === 4 ) {ret= 'CD'+ret} 
          else {if (cen === 5 ) { ret= 'D' +ret}
            else {if (cen === 6 ) { ret= 'DC' +ret}
              else {if (cen === 7 ) { ret= 'DCC' +ret}
                else {if (cen === 8 ) { ret='DCCC' +ret}
                  else {if (cen === 9 ) { ret= 'CM' +ret}
  }}}}}}}}
 
  var mil = ( number %10000 - cen * 100 - dix * 10 -num)/1000;
  console.log(mil);
  if (mil === 1 ) {ret= 'M' + ret }
    else {if (mil === 2 ) {ret= 'MM' +ret}
      else {if (mil === 3 ) {ret= 'MMM' +ret}
        else {if (mil === 4 ) {ret= 'MMMM' +ret} 
          else {if (mil === 5 ) { ret= 'MMMMM' +ret}
            else {if (mil === 6 ) { ret= 'MMMMMM' +ret}
              else {if (mil === 7 ) { ret= 'MMMMMMM' +ret}
                else {if (mil === 8 ) { ret= 'MMMMMMMM' +ret}
                  else {if (mil === 9 ) { ret= 'MMMMMMMMM' +ret}
  }}}}}}}}
  if (number === 0 ) { ret = '0' }
  return ret;
  }
 
  
   
solution (189)
