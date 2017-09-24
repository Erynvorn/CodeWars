function conferencePicker (citiesVisited, citiesOffered) {
	console.log(citiesVisited);
	console.log(citiesOffered);
	var lo = citiesOffered.length;
	var lv = citiesVisited.length;
  var count = 0;
  var proposed = 0;
	for (i = 0 ; i < lo ; i++ ) {
    count = 0;
	  for (j=0 ; j < lv ; j++) {
	    if (citiesOffered[i] === citiesVisited[j]) { count = 0; j = lv } else {count = count +1 }
	  }
	  if (count !== 0) {proposed = i + 1; i = lo }
	}
	if (lv === 0 ) {return citiesOffered[0]} else {
	if ( proposed === 0 ) {return 'No worthwhile conferences this year!'} else {return citiesOffered[proposed-1]}
 }
}

//conferencePicker(['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'],['Stockholm','Paris','Melbourne']) //,'Paris');
//conferencePicker(['Buenos Aires','Mexico City','Johannesburg'],['Melbourne','Moscow']) //,'Melbourne');
//conferencePicker(['Tokyo','Madrid','Melbourne','Sydney','Rio De Janeiro','Saint Petersburg','Brisbane','Paris','Houston'],['Sydney','Chicago','Paris']) //,'Chicago');
//conferencePicker([],['Philadelphia','Osaka','Tokyo','Melbourne'])//,'Philadelphia','Should work if no cities visited');
conferencePicker(['London','Berlin','Mexico City','Melbourne','Buenos Aires','Hong Kong','Madrid','Paris'],['Berlin','Melbourne'])//,'No worthwhile conferences this year!','Should work if all offered cities previously visited');

