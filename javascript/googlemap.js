function initializeMap() {
  const myLatlng = { lat: 48.53656, lng: -123.01677 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatlng,
  });

  whaleTracking(map);
}
