var mas = [
	{
		lat: 56.2,     
		lng: 43.8,   
		name: "Страна 1", 
		text:"Адрес 1",
        image : "img/pt_1.png",		
	},
	{
		lat: 56.2,
		lng: 43.9,
		name: "Метка 2",
		text:"Страна 2",
		image : "img/pt_2.png",
	},
	{
		lat: 56.3,
		lng: 43.9,
		name: "Метка 3",
		text:"Страна 3",
		image : "img/pt_3.png",
	}
];

 
var map, infoWindow;
function initMap() {
    var centerL = new google.maps.LatLng(56, 43);
    var mapOptions = {
        center: centerL,
        zoom: 8
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    infoWindow = new google.maps.InfoWindow();
   
    google.maps.event.addListener(map, "click", function() {
      
        infoWindow.close();
    });
    
    for (var i = 0; i < mas.length; i++){
        var latLng = new google.maps.LatLng(mas[i].lat, mas[i].lng);
        var name = mas[i].name;
        var text = mas[i].text;
		var image = mas[i].image;
        
        addMarker(latLng, name, text,image);
    }
}
google.maps.event.addDomListener(window, "load", initMap);

function addMarker(latLng, name, text,image) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name
    });

    google.maps.event.addListener(marker, "click", function() {
       
        var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + text + '</p>' +
								"<img src='" + image + "'>"
                            '</div>';
      
        infoWindow.setContent(contentString);

        infoWindow.open(map, marker);
    });
}

	function initMap() {
    var centerL = new google.maps.LatLng(56.2928515, 43.7866641);
    var mapOptions = {
        center: centerL,
        zoom: 8
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });
   
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < mas.length; i++){
        var latLng = new google.maps.LatLng(mas[i].lat, mas[i].lng);
        var name = mas[i].name;
        var text = mas[i].text;
		var image = mas[i].image;
        addMarker(latLng, name, text,image);
      
        bounds.extend(latLng);
    }
    
    map.fitBounds(bounds);
}