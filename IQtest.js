function iqTest(numbers){
  var num = numbers.split(" ");
  l=num.length;
  for (i=0;i < l ; i++) {num[i]=Number(num[i]);}
  var even = 0;
  var uneven = 0;
  
  if (num[0]%2 === 0) {even = even +1 } else {uneven = uneven + 1}
  if (num[1]%2 === 0) {even = even +1 } else {uneven = uneven + 1}
  if (num[2]%2 === 0) {even = even +1 } else {uneven = uneven + 1}
  
  if (even > 1) 
      { for (i = 0 ; i<l ; i++) 
        {if (num[i]%2 === 1) {return i+1}}
      }
        else 
        { for (i = 0 ; i<l ; i++) 
        {if (num[i]%2 === 0) {return i+1} }
      }
}

iqTest("4 4 7 6 8 2 4 8")
