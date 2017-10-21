function validSolution(board){
  //check for 0
  for(i = 0 ; i < 9  ;i++ ) {
    for (j = 0; j < 9; j++) { if (board[i][j] === 0 ) { return false } }
  }
  //check for lines
  var l = 0;
  for(i = 0 ; i < 9  ;i++ ) {
    for (j = 0; j < 9; j++) { l = l + Math.pow(10,board[i][j]) }
    if (l != 1111111110 ) {return false } else { l=0}
  }
  //check for column
  c = 0;
  for(i = 0 ; i < 9  ;i++ ) {
    for (j = 0; j < 9; j++) { c = c + Math.pow(10,board[j][i]) }
    if (c != 1111111110 ) {return false } else { c=0}
  }
  //check cube 1
  c = 0;
  for(i = 0 ; i < 3  ;i++ ) {
    for (j = 0; j < 3; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  //check cube 2
  c = 0;
  for(i = 3 ; i < 6  ;i++ ) {
    for (j = 0; j < 3; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  //check cube 3
  c = 0;
  for(i = 6 ; i < 9  ;i++ ) {
    for (j = 0; j < 3; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  //check cube 4
  c = 0;
  for(i = 0 ; i < 3  ;i++ ) {
    for (j = 3; j < 6; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  //check cube 5
  c = 0;
  for(i = 3 ; i < 6  ;i++ ) {
    for (j = 3; j < 6; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  //check cube 6
  c = 0;
  for(i = 6 ; i < 9  ;i++ ) {
    for (j = 3; j < 6; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  //check cube 7
  c = 0;
  for(i = 0 ; i < 3  ;i++ ) {
    for (j = 6; j < 9; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  //check cube 5
  c = 0;
  for(i = 3 ; i < 6  ;i++ ) {
    for (j = 6; j < 9; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  //check cube 6
  c = 0;
  for(i = 6 ; i < 9  ;i++ ) {
    for (j = 6; j < 9; j++) { c = c + Math.pow(10,board[j][i]) }}
    if (c != 1111111110 ) {return false }
  
  return true;
}

                 validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                [3, 4, 5, 2, 8, 6, 1, 7, 9]] )//), true);
                                
                //validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                             //    [6, 7, 2, 1, 9, 0, 3, 4, 8],
                             //    [1, 0, 0, 3, 4, 2, 5, 6, 0],
                             //    [8, 5, 9, 7, 6, 1, 0, 2, 0],
                            //     [4, 2, 6, 8, 5, 3, 7, 9, 1],
                            //     [7, 1, 3, 9, 2, 4, 8, 5, 6],
                            //     [9, 0, 1, 5, 3, 7, 2, 1, 4],
                            //     [2, 8, 7, 4, 1, 9, 6, 3, 5],
                            //     [3, 0, 0, 4, 8, 1, 1, 7, 9]]//), false);
