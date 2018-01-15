function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 25.0506442, lng: 121.5205966},
          zoom: 17
     })
     var marker = new google.maps.Marker({
          position: {lat: 25.050681, lng: 121.520565},
          map: map
     })
}