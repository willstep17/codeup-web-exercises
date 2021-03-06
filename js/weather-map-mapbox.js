// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//San Antonio area using the coordinates [-98.4916, 29.4252]




var restaurants = [
    {
        name: "Sushi Zushi",
        info: "Raw Fish",
        markerColor: "teal",
        image: "img/sushi.jpg",
        coordinates: {
            longitude: -98.490594,
            latitude: 29.609842
        }
    },
    {
        name: "Five Guys",
        info: "Burgers",
        markerColor: "red",
        image: "img/fiveguys.jpg",
        coordinates: {
            longitude: -98.588122,
            latitude: 29.564519
        }
    },
    {
        name: "Lupe Tortilla",
        info: "Fajitas and Quesadillas",
        markerColor: "orange",
        image: "img/lupe.jpg",
        coordinates: {
            longitude: -98.454237,
            latitude: 29.643025
        }
    },
    {
        name: "Stone Werks",
        info: "Steak and Wine",
        markerColor: "purple",
        image: "img/stonewerks.jpg",
        coordinates: {
            longitude: -98.51,
            latitude: 29.61
        }
    },
];

function markRestaurants(inputRestaurants) {
    inputRestaurants.forEach(function(restaurant){
        console.log(restaurant);
        var markerOptions = {
            color: restaurant.markerColor
        };

        var popup = new mapboxgl.Popup()
            .setHTML(
                "<h1>" + restaurant.name + "</h1>" +
                "<h3>" + restaurant.info + "</h3>" +
                "<img src='" + restaurant.image + "'></img>");

        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([restaurant.coordinates.longitude, restaurant.coordinates.latitude])
            .addTo(map)
            .setPopup(popup);
    });
}

markRestaurants(restaurants);

//Zoom adjustment buttons
var zoomTenButton = document.getElementById("set-zoom-10");
zoomTenButton.addEventListener("click", function(){
    map.setZoom(10);
});

var zoomTwelveButton = document.getElementById("set-zoom-12");
zoomTwelveButton.addEventListener("click", function(){
    map.setZoom(12);
});

var zoomThirteenButton = document.getElementById("set-zoom-13");
zoomThirteenButton.addEventListener("click", function(){
    map.setZoom(13);
});

var addressButton = document.getElementById("find-address-button");
addressButton.addEventListener("click", function(){
    var address = document.getElementById("addressInput").value;
    geocode(address, mapboxToken).then(function(result){
        console.log(result);
        map.setCenter(result);
        var markerOptions = {
            color: "#8D021F"
        };
        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat(result)
            .addTo(map)
    });
});

var toggle = false;
var displayButton = document.getElementById("set-satellite");
displayButton.addEventListener("click", function(){
    if(toggle === false) {
        map.setStyle("mapbox://styles/mapbox/satellite-v9");
        toggle = true;
    } else {
        map.setStyle('mapbox://styles/mapbox/navigation-guidance-night-v4');
        toggle = false;
    }
});

// function getInputValue() {
//     var address = document.getElementById("addressInput").value;
//     geocode(address, mapboxToken).then(function(result){
//         console.log(result);
//         map.setCenter(result);
//     });
// }

// geocode("Brickhouse, San Antonio Tx, 78258", mapboxToken).then(function(result){
//     console.log(result);
//     map.setCenter(result);
// });

// reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function(result){
//     console.log(result);
// });