function bigToSmall(arr){
return [].concat(...arr).sort(function(a,b){return b-a}).join(">");
}
