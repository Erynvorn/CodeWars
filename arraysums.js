
function findEvenIndex(arr)
{
//start at 1 is a(0) = sum (2~ end)?
//move on to next  sum a(i = 0 to candidate -1 compare to sum ( j = candidate + 1 end)

var l = arr.length;
var count = l - 1;
var result = -1
if (l > 2) {
  for ( i=1 ; i < count ; i++) {
    var t1 = 0;
    var t2 = 0;
    for (j = 0   ; j < i ; j++) { t1 = t1 + arr[j] }
    for (j = i+1 ; j < l ; j++) { t2 = t2 + arr[j] }
    if (t1 === t2) { result = i ; i = l}
  }
 }
return result;
}
