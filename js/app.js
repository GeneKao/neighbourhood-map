let map;
let markers = [];
let defaultIcon, highlightIcon;
let largeInfowindow;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.778761, lng: 9.179869},
        zoom: 15,
        styles: styles, // this is defined in map-styles.js for code cleanness
        mapTypeControl: false
    });

    defaultIcon = makeMarkerIcon('ff8000');
    highlightIcon = makeMarkerIcon('ffff00');

    // set InfoWindow maxWidth not too big.
    largeInfowindow = new google.maps.InfoWindow({ maxWidth: 260 });

    let bounds = new google.maps.LatLngBounds();

    for (let i = 0; i < restaurants.length; i++) {
        // Get the position from the location array.
        let position = restaurants[i].location;
        let title = restaurants[i].title;
        let description = restaurants[i].description;
        // Create a marker per location, and put into markers array.
        let marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i,
            description: description
        });
        // Push the marker to our array of markers.
        markers.push(marker);


        let content;
        let Foursquare_CLIENT_ID = '&client_id=QTLWAELP5HATQ5S1P3OSVKXBXLJZ0UCGI1QXFN35GJFUUXLM';
        let Foursquare_CLIENT_SECRET = '&client_secret=UAMIKPK3GQO5KXGQBE5YIPKSZAKC5WOZN32WJMUZGYXJGRDU';

        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: 'https://api.foursquare.com/v2/venues/' + restaurants[i].id + "?" + "&" +
                Foursquare_CLIENT_ID + Foursquare_CLIENT_SECRET + '&v=20180507',
            async: true,
            success: function(data) {
                console.log(data.response.venue.name);
                console.log(data.response);
                function contentFormat(venue) {
                    if (venue.bestPhoto) {
                        let image = venue.bestPhoto.prefix + "240x240" + venue.bestPhoto.suffix;
                        return ('<div>' +
                                '<h4>' +
                                venue.name +
                                '</h4>' + '<hr>' +
                                '<p>' +
                                "<b>Rating: </b>" + venue.rating + '<br>' +
                                "<b>Category: </b>" + venue.categories[0].name + '<br>' +
                                "<b>Foursquare link: </b>" + `<a href="${venue.shortUrl}">${venue.shortUrl}</a>` +
                                '<br>' + '<hr>' +
                                "<b>Gene's comment: </b>" + '<br>' + restaurants[i].description + '<br>' +
                                '</p>' + '<hr>' +
                                `<img class=img-thumbnail alt="${venue.name}" src="${image}">` +
                                '</div>');
                    }
                    else {
                        return ('<div>' +
                                '<h4>' +
                                venue.name +
                                '</h4>' + '<hr>' +
                                '<p>' +
                                "<b>Rating: </b>" + venue.rating + '<br>' +
                                "<b>Category: </b>" + venue.categories[0].name + '<br>' +
                                "<b>Foursquare link: </b>" + `<a href="${venue.shortUrl}">${venue.shortUrl}</a>`+
                                '<br>' + '<hr>' +
                                "<b>Gene's comment: </b>" + '<br>' + restaurants[i].description + '<br>' +
                                '</p>' + '<hr>' +
                                '</div>');
                    }
                }
                content = contentFormat(data.response.venue);

            },
            error: function(data) {
                alert("Cannot load data from foursquare! Something goes wrong! Help!");
            }
        });


        marker.addListener('mouseover', function() {
            this.setIcon(highlightIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });

        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            toggleBounce(this);
            populateInfoWindow(this, largeInfowindow, content);
        });

        bounds.extend(markers[i].position);

    }
    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);

    ko.applyBindings(new ViewModel());


}

let ViewModel = function() {
    let self = this;

    this.restaurants = ko.observableArray([]);
    this.query = ko.observable('');

    this.searchRestaurants = function() {
        for (let i = 0; i < markers.length; i++) {
            let marker = markers[i];
            if (marker.title.toUpperCase().indexOf(self.query().toUpperCase()) > -1 ) {
                if (self.restaurants.indexOf(marker) < 0) { self.restaurants.push(marker); }
            } else {
                self.restaurants.remove(marker);
            }

        }
        return true;
    };

    (function() {
        markers.forEach(function(restaurant) {
            self.restaurants.push(restaurant);
        });
    })();

    this.selectRestaurant = function(restaurant) {
        let center = markers[restaurant.id].getPosition();
        let lat = Number(center.lat());
        let lng = Number(center.lng()) - 0.005;
        // shift the center a little bit.
        map.setCenter(new google.maps.LatLng(lat, lng));

        toggleBounce(markers[restaurant.id]);
        populateInfoWindow(markers[restaurant.id], largeInfowindow);
    };

    this.highlight = function(restaurant) {
        markers[restaurant.id].setIcon(highlightIcon);
    };

    this.lowlight = function(restaurant) {
        markers[restaurant.id].setIcon(defaultIcon);
    };

};
