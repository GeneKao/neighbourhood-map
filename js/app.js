var map;
function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.778761, lng: 9.179869},
        zoom: 17
    });
    var schlossplatz = {lat: 48.778761, lng: 9.179869};
    var marker = new google.maps.Marker({
        position: schlossplatz,
        map: map,
        title: 'First Marker!'
    });
}
