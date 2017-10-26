function rot13(message){
  var mess = message.split('');
  var alpha='abcdefghijklmnopqrstuvwxyz'
  var beta='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (i=0 ; i< mess.length; i++) {
    if (alpha.indexOf(mess[i])>-1) {mess[i]=alpha[(alpha.indexOf(mess[i])+13)%26]} else {
  if (beta.indexOf(mess[i])>-1) {mess[i]=beta[(beta.indexOf(mess[i])+13)%26]}}
  }
  return mess.join('');
}
