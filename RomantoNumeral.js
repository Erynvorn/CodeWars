function solutionds(roman, num) {
  var l = roman.length;
  console.log(num+" " +l);
  if (roman==='') {return num } else {
      if (roman.slice(l-1,l) === 'I' ) {num = num + 1 ; return solutionds(roman.slice(0,l-1),num)} else
      if (roman.slice(l-2,l) === 'IV') {num = num + 4; return solutionds(roman.slice(0, l-2),num)} else
      if (roman.slice(l-1,l) === 'V') {num = num + 5; return solutionds(roman.slice(0, l-1),num)} else
      if (roman.slice(l-2,l) === 'IX') {num = num + 9; return solutionds(roman.slice(0, l-2),num)} else
      if (roman.slice(l-1,l) === 'X') {num = num + 10; return solutionds(roman.slice(0, l-1),num)} else
      if (roman.slice(l-2,l) === 'XL') {num = num + 40; return solutionds(roman.slice(0, l-2),num)} else
      if (roman.slice(l-1,l) === 'L') {num = num + 50; return solutionds(roman.slice(0, l-1),num)} else
      if (roman.slice(l-2,l) === 'XC') {num = num + 90; return solutionds(roman.slice(0, l-2),num)} else
      if (roman.slice(l-1,l) === 'C') {num = num + 100; return solutionds(roman.slice(0, l-1),num)} else
      if (roman.slice(l-2,l) === 'DC') {num = num + 400; return solutionds(roman.slice(0, l-2),num)} else
      if (roman.slice(l-1,l) === 'D') {num = num + 500; return solutionds(roman.slice(0, l-1),num)} else
      if (roman.slice(l-2,l) === 'CM') {num = num + 900; return solutionds(roman.slice(0, l-2),num)} else
      if (roman.slice(l-1,l) === 'M') {num = num + 1000; return solutionds(roman.slice(0, l-1),num)} 
  
  }
}

function solution(roman){
  var ret = solutionds(roman, 0);
  return ret;
  // complete the solution by transforming the 
  // string roman numeral into an integer  
}



solution ('MDCLXVI');
