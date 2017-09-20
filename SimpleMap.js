
var func = function(item){
  var n = item.length;
 // console.log(n);
  for (i=0; i < item.length; i++) {if (item[i]%2 === 0) {item[i]= true} else {item[i] = false}}
  for (k=0; k < item.length; k++) {console.log (item[k])}
  return item;
}

function map(arr, func){
  var j=0
  //while (j < arr.length) { console.log(typeof (arr[j])); j++}
  if (arr.length === 0) {return "array should contain only numbers"} else {
  var erreurf = 0;
  var erreurt = 0;
  if ( typeof (func) != "function" ) { erreurf = 1 } 
  j = 0 ;
  while (j < arr.length) { if (!isNaN(Number(arr[j]))) {j++} 
  else { erreurt++ ; j = arr.length} }
  
  if (erreurf === 0 && erreurt === 0) { var ret = func (arr) }
  if (erreurf === 1) { return "given argument is not a function"}
  if (erreurt > 0) {return "array should contain only numbers"}
  
  
  return ret;
    //note: Javascript already supports all this, we are just rewriting our own
    //map() function with some quirk and error message //
  //  }
  }
} 

function testons (inp) {
  console.log(typeof(inp));
  console.log( inp);
}
map([],func)
//map([27, 18, 5,'8', '66'],func) //,[ false, true, false, true, true ])
//map([48, 33, 2, 1],'str') //,'given argument is not a function')
//map([8, 12, 't'],func) //, 'array should contain only numbers')

//testons(Number('t'))
