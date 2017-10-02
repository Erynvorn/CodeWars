function multiplicationTable(row,col){
  var ret = [];
  var tab = [];
  for (i=0; i<row; i++ ) {
    for (j=0; j<col; j++) {
      console.log(i+" "+j+" "+ (1+i) * (1+j) );
      ret[j] = (1+i) * (1+j) ;
    }
    console.log(ret);
    tab.push(ret);
    console.log(tab);
    ret=[];
  }
  return tab;
 }

//multiplicationTable(2,2) ;//, [[1,2],[2,4]])
// multiplicationTable(3,3) // [[1,2,3],[2,4,6],[3,6,9]])
// multiplicationTable(3,4) //[[1,2,3,4],[2,4,6,8],[3,6,9,12]])
//multiplicationTable(4,4) //, [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
 multiplicationTable(10,10) //, [[1,2,3,4,5],[2,4,6,8,10]])
