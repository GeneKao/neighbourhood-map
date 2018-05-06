let map;

// Create a new blank array for all the listing markers.
let markers = [];

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.778761, lng: 9.179869},
        zoom: 15,
        styles: styles // this is defined in map-styles.js for code cleanness
    });

    let defaultIcon = makeMarkerIcon('ff8000');
    let highlightedIcon = makeMarkerIcon('ffff00');

    let largeInfowindow = new google.maps.InfoWindow();
    // let bounds = new google.maps.LatLngBounds();

    for (let i = 0; i < restaurants.length; i++) {
        // Get the position from the location array.
        let position = restaurants[i].location;
        let title = restaurants[i].title;
        // Create a marker per location, and put into markers array.
        let marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        marker.setIcon(defaultIcon);
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            toggleBounce(marker);
            populateInfoWindow(this, largeInfowindow);
        });
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
        // bounds.extend(markers[i].position);
    }
    // Extend the boundaries of the map for each marker
    // map.fitBounds(bounds);

    ko.applyBindings(new ViewModel());
}

let ViewModel = function() {
    let self = this;



};
