function initMap() {
    let map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
    });

    var geocoder = new google.maps.Geocoder();

    document.querySelector('#address').onkeydown = function(e) {
        if (e.which != 13) return;
        var address = this.value;

        geocoder.geocode({'address': address}, function(result, status) {
            if (status == 'OK') {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert('Address Not Found');
            }
        });
    };
}

// var geocoder = new google.maps.Geocoder();


