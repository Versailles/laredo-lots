function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 11,
  center: {lat: 27.531, lng: -99.503}
  });

  var baseUrl = "https://storage.googleapis.com/files.laredolots.com/";

  var kmlArray = [
    "359_30_acres_Masterplan.kml",
    "ground-overlay-sample.kml",
    "cta.kml"
  ].map(x => baseUrl + x);

  foreach(kmlUrl in kmlArray)
  {
    var ctaLayer = new google.maps.KmlLayer({
      url: kmlUrl,
      map: map
    });
  }
}