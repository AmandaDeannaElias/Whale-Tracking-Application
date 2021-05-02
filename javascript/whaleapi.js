function whaleTracking(map) {
    $.get("http://hotline.whalemuseum.org/api.json?species=orca", function (result) {
        console.log(result);
        //console.log(result);
        for (i = 0; i < 50; i++) {
            let marker = result;
            let whaleLatlng = { lat: marker[i].latitude, lng: marker[i].longitude };
            const quantityString = marker[i].quantity
            const descriptionString = marker[i].description
            const locationString = marker[i].location

            const infowindow = new google.maps.InfoWindow({
                content: "Quantity: " + quantityString + "<div> Description: " + descriptionString + "</div>" + "<div> Location: " + locationString + "</div>"
            });

            marker = new google.maps.Marker({
                position: whaleLatlng,
                map: map,
                icon: 'images/orca32.png',
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        }
    });
};




