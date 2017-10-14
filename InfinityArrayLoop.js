function infiniteLoop(arr,d,n){
var l =0;
  
  if (d==="left") {for (i=0 ; i<n ; i++ ) { 
  arr[2].push(arr[0].shift());
  arr[1].push(arr[2].shift());
  arr[0].push(arr[1].shift());
  }//coding here...
  }
  if (d==="right") {for (i=0 ; i<n ; i++ ) { 
  arr[0].unshift(arr[2].pop());
  arr[2].unshift(arr[1].pop());
  arr[1].unshift(arr[0].pop());
  }//coding here...
  }
  return arr;
}
