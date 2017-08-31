/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      var n = number;
      var a = [];
      var b = 0;
      var i = 0;
      while (n > 0) {
          b = n % 10 ; 
          a[i] = b ;
          i++ ;
          n = (n - b ) / 10 ;  
      }
      var div = 0;
      var k = 0;
      for ( k = 0 ; k < i ; k++) { div = div + a[k] }
      console.log(n +" "+div);
      if (number % div === 0) {return true} else {return false}
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      var j = 1;
      if (number === 0) {return 1} else
        {while (Harshad.isValid( number + j) != true) {j++} 
         return number+j;
      }
      // Your implementation goes here
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      var ret = [];
      var bb = 0;
      if (start === undefined) {start = 0 }
      for (bb = 0 ; bb < count ; bb++ ) {
        ret[bb] = Harshad.getNext(start);
        start = ret[bb];
      }
      return ret;// Your implementation goes here
    }
  };

} () );




//Harshad.isValid( 20 );

//	} );
//	it( 'should return that 18 is a valid Harshad number', function() {
//		Test.expect( Harshad.isValid( 18 ) === true );
//	} );
//	it( 'should return that 19 is not a valid Harshad number', function() {
//		Test.expect( Harshad.isValid( 19 ) === false );
//	} );
//} );

//describe( 'Harshad.getNext', function() {
//	it( 'should return that 2 is the next valid Harshad number after 1', function() {
//Harshad.getNext( 18 );
//	} );
//		Test.assertEquals( Harshad.getNext( 18 ), 20 );
//
//	it( 'should return that 1002 is the next valid Harshad number after 1000', function() {
//		Test.assertEquals( Harshad.getNext( 1000 ), 1002 );
//	} );
//} );

//describe( 'Harshad.getSerie', function() {
//	it( 'should return the 10 first Harshad numbers', function() {
//		Test.assertSimilar( Harshad.getSerie( 10 ), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );
//	} );
//	it( 'should return the 20 first Harshad numbers', function() {
Harshad.getSerie( 20,1000 );
//, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, //21, 24, 27, 30, 36, 40, 42 ] );
//	} );
//	it( 'should return the 10 first Harshad numbers after 1000', function() {
//		Test.assertSimilar( Harshad.getSerie( 10, 1000 ), [ 1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020 ] );
//	} );
//} );
