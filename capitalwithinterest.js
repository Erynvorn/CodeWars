function calculateYears(principal, interest, tax, desired) {
var Y = 0
while (principal < desired ) {
Y = Y + 1 ;
principal = principal * ( 1 + interest * ( 1 - tax));
} 
return Y;

    // your code
}
