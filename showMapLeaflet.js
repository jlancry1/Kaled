function showMap (coords) {

// Creating map object
	var mymap = L.map('map').setView([coords.latitude, coords.longitude], 13);	
	
// Adding tile to your map. ( mapbox.streets or mapbox.satellite )
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">M///apbox</a>',
	//	id: 'mapbox.streets'
		id: 'mapbox.satellite'
	}).addTo(mymap);	

// Adding marker to the map for your current location. 	
var marker = L.marker([coords.latitude, coords.longitude]).addTo(mymap);

// Adding popup text. 
marker.bindPopup("<b>Hello Everyone!</b><br>This my current location!").openPopup();
	
}
