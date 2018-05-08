// Seperate the functions with the main app file.

function populateInfoWindow(marker, infowindow, content) {

    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        // Clean the infowindow first.
        infowindow.setContent('');
        // Set to this marker.
        infowindow.marker = marker;

        if (content) {
            infowindow.setContent(content);
        } else {
            let streetViewService = new google.maps.StreetViewService();
            let radius = 50;
            function getStreetView(data, status) {
                if (status == google.maps.StreetViewStatus.OK) {
                    let nearStreetViewLocation = data.location.latLng;
                    let heading = google.maps.geometry.spherical.computeHeading(
                        nearStreetViewLocation, marker.position);

                    infowindow.setContent('<div>' + '<h6>' + marker.title + '</h6>' +  '<hr>' + '</div><div id="pano"></div>');
                    let panoramaOptions = {
                        position: nearStreetViewLocation,
                        pov: {
                            heading: heading,
                            pitch: 30
                        }
                    };
                    let panorama = new google.maps.StreetViewPanorama(
                        document.getElementById('pano'), panoramaOptions);
                } else {
                    infowindow.setContent('<div>' + marker.title + '</div>' +
                                          '<div>No Street View Found</div>');
                }
            }
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
        }

        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick',function(){
            infowindow.marker = null;
        });

        infowindow.open(map, marker);
    }
}

function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
            '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21,34));
    return markerImage;
}

function toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(4);
    }
}
