function strCount(obj){
  count = 0;
  console.log ( obj) ;
  console.log ( typeof(obj));
  for (var prop in obj) {console.log (obj[prop] + typeof(obj[prop]));
  if (typeof(obj[prop]) ==='string') { 
    count = count+1 ;} else
      {if (typeof(obj[prop]) === 'object') { count = count + strCount(obj[prop])} }
  }
 return count;
}

strCount({
  first:  "1",
  second: "2",
  third:  false,
  fourth: ["anytime",2,3,4],
  fifth:  null,
  sixth:  undefined,
  seventh:{}
  }) //,3,"Did not count the correct number of strings. Check counting inside nested objects.");

//var obj = {a: 1, b: 2, c: 3};
    
//for (var prop in obj) {
//  console.log(`obj.${prop} = ${obj[prop]}`);
//}
