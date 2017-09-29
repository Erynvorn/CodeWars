function cardsConverter(input){
  var card = ['A',2,3,4,5,6,7,8,9,'T','J','Q','K'];
  var ctype = [ 'c', 'd', 'h', 's'];
  var convertedArray =[];
  //console.log(typeof(input));
  if (input === null) { return []} else {
    if (typeof(input) != 'object') {return null} else {
     if (typeof(input[0]) === 'number') {
       //integer to card
       input.sort(function(a,b){return a-b});
       console.log(input);
       for (i=0; i < input.length; i++){
         console.log(i+ " " +input[i] + " "+ input[i]%13 + " "+ Math.floor(input[i]/13));
         console.log(card[(input[i])%13]);
         convertedArray[i]=card[(input[i]%13)]+ctype[Math.floor(input[i]/13)];
       }
     } 
       else {
         for (i=0; i < input.length; i++){
           
           for (j=0 ; j < card.length;j++){ 
             //console.log(i+ " " +input[i] + " "+ input[i].charAt(0)+ " "+ card[j]);
           if (String(input[i].charAt(0)) === String(card[j])) {convertedArray[i]=j; j = card.length}}
           //console.log(convertedArray[i]);
           for (j=0 ;j<ctype.length;j++)
           {if (input[i].charAt(1)=== ctype[j]) {convertedArray[i]=convertedArray[i]+13*j; j=ctype.length}}
           convertedArray.sort(function(a,b){return a-b});
        }
       }
     return convertedArray;} 
  }
}

cardsConverter([]);
//cardsConverter([50,6,13,30,37]) // ["7c", "Ad", "5h", "Qh", "Qs"]
//cardsConverter(["5h", "7c", "Qh", "Qs", "Ad"]) //, [6, 13, 30, 37, 50]


//  c    |     d     |    h     |    s
//---------------------------------------
// 0: A      13: A      26: A      39: A
// 1: 2      14: 2      27: 2      40: 2
// 2: 3      15: 3      28: 3      41: 3
// 3: 4      16: 4      29: 4      42: 4
// 4: 5      17: 5      30: 5      43: 5
// 5: 6      18: 6      31: 6      44: 6
// 6: 7      19: 7      32: 7      45: 7
// 7: 8      20: 8      33: 8      46: 8
// 8: 9      21: 9      34: 9      47: 9
// 9: T      22: T      35: T      48: T
//10: J      23: J      36: J      49: J
//11: Q      24: Q      37: Q      50: Q
//12: K      25: K      38: K      51: K
