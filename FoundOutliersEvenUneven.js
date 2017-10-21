function findOutlier(int){
  var l = int.length;
  var even = 0;
  var uneven = 0;
  console.log(int[0]%2);
  if (Math.abs(int[0]%2) === 0) {even = even +1 } else {uneven = uneven + 1}
  if (Math.abs(int[1]%2) === 0) {even = even +1 } else {uneven = uneven + 1}
  if (Math.abs(int[2]%2) === 0) {even = even +1 } else {uneven = uneven + 1}
  
  if (even > 1) 
      { for (i = 0 ; i<l ; i++) 
        {if (Math.abs(int[i]%2) === 1) {return int[i]}}
      }
        else 
        { for (i = 0 ; i<l ; i++) 
        {if (Math.abs(int[i]%2) === 0) {return int[i]} }
      }
}


  
//findOutlier([0, 1, 2]);//, 1)
findOutlier([-1, -2, -4]); //, 2)
//findOutlier([2,6,8,10,3]);//, 3)
//findOutlier([0,0,3,0,0]);//, 3)
//findOutlier([1,1,0,1,1]);//, 0)
