function DNAStrand(dna){
var dna1 = "ATCG";
var dna2 = "TAGC";
var dnam = "";

for ( i = 0 ; i < dna.length ; i++) {
  dnam = dnam + dna2.charAt(dna1.indexOf(dna.charAt(i)))
}
return dnam;
 //your code here
}
