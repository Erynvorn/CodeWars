var func = function(item){
  var n = item.length;
 // console.log(n);
  for (i=0; i < item.length; i++) {if (item[i]%2 === 0) {item[i]= true} else {item[i] = false}}
  for (k=0; k < item.length; k++) {console.log (item[k])}
  return item;
}

function map(arr, func){
  
    var ret = func (arr) ; // your code here
    for (j=0; j<arr.length;j++) {console.log(ret[j])}
    // return ret;
    //note: Javascript already supports all this, we are just rewriting our own
    //map() function with some quirk and error message //
    }
    
    


map([27, 18, 5,'8', '66'],func) //,[ false, true, false, true, true ])
//map([48, 33, 2, 1],'str') //,'given argument is not a function')
//map([8, 12, 't'],func) //, 'array should contain only numbers')
