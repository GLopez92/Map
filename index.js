function initMap() {
  var location = {lat: -25.363, lng: 103.44};
  var map = new google.maps.MAP(document.getElementById("map"), {
    zoom: 4,
    center: location
  });
  var marker = new google.maps.Marker({
    postion: location,
    map: map
  });
}
