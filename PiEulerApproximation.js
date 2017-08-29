function iterPi(epsilon) {
    var mypi = 1.0 ;
    var divisor = 1.0;
    var n = 1;
    var moins = -1;
    var num = 1;
    var ret = []
    while (Math.abs(Math.PI - 4*mypi )> epsilon) {
	
	num = num * moins;
	divisor = (divisor + 2);
	mypi = mypi + num / divisor;
	n++;
    }
    ret[0] = n;
    mypi = mypi* 4;
    ret[1] = Math.round(10000000000*mypi)/10000000000;
    return (ret);
}

iterPi(0.01);


// Pi = 1 -1/3 +1/5 -1/7 + 1/9 ...
