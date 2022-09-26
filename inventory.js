function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 27.531, lng: -99.503}
    });
  
    // Polygon of The Pentagon
    var ctaLayer1 = new google.maps.KmlLayer({
      //url: 'https://storage.googleapis.com/files.laredolots.com/KML_Samples_Pentagon.kml',
      url: 'https://storage.googleapis.com/files.laredolots.com/359_30_acres_Masterplan.kml',
      map: map
    });
    
    // Chicago transportation lines
    var ctaLayer2 = new google.maps.KmlLayer({
      url: "https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml",
      map: map,
    });

    // Image of Mount Etna in Italy
    var ctaLayer3 = new google.maps.KmlLayer({
        url: "https://storage.googleapis.com/files.laredolots.com/ground-overlay-sample.kml",
        map: map,
      });
  }