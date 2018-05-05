var map;


function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.778761, lng: 9.179869},
        zoom: 17,
        styles: styles
    });

    var schlossplatz = {lat: 48.778761, lng: 9.179869};

    var marker = new google.maps.Marker({
        position: schlossplatz,
        map: map,
        title: 'First Marker!'
    });


    ko.applyBindings(new ViewModel());
}


var ViewModel = function() {
    var self = this;



};
