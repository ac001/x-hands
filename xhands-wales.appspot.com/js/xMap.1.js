//*******************************************************************************
// Core Object
//*******************************************************************************
function xMap(){

var self = this;

this.marker = null;
this.markers = {};

this.polys = {};
this.infos = {};


this.Map = null

this.icons = {};

this.icons.level = {}
this.icons.level.blue		= 'images/level_blue.png';
this.icons.level.red		= 'images/level_red.png';

this.icons.climb = {}
this.icons.climb.blue		= 'images/climb_blue.png';
this.icons.climb.red		= 'images/climb_red.png';

this.icons.descend = {}
this.icons.descend.blue		= 'images/descend_blue.png';
this.icons.descend.red		= 'images/descend_red.png';

	

this.init = function (){
	var map_canvas = document.getElementById("map_canvas")

	var centerLatLng = new google.maps.LatLng(CENTER_LAT, CENTER_LNG); 
	var myOptions = {
		zoom: 16,
		center: centerLatLng,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	self.Map = new google.maps.Map(map_canvas, myOptions);
}


this.default_marker = function(){
	var mlatlng = new google.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG); 
	self.marker = new google.maps.Marker({position: mlatlng, map: self.Map, draggable: true});

	google.maps.event.addListener(self.marker, "dragend", function(ev) {
		widget.set_latlng(ev.latLng.lat() + "," + ev.latLng.lng());
	});
}



this.toggle_polys = function(c){
	if(c.checked){
		self.load_polys();
		return;
	}
	for(var i in self.polys){
		console.log(i);
		self.polys[i].setMap(null);
	}
	self.polys = {};
}

this.fetch_markers = function(){
	Ext.Ajax.request({
		url: '/rpc/listings/',
		success: function(response, opts){
			var data = Ext.decode(response.responseText);
			var listings = data.listings;
			for(var i =0; i < listings.length; i++){
				var rec = listings[i];

				var str = "<b>" + rec.name + "</b><br>" + rec.description + ""
				self.infos[rec.listID] = new google.maps.InfoWindow({content: str});

				var latlng = new google.maps.LatLng(rec.lat, rec.lng)
				self.markers[rec.listID] = new google.maps.Marker({position: latlng, 
																	map: self.Map, title: rec.name,
																	draggable: false});
				google.maps.event.addListener(self.markers[rec.listID], 'click', function() {
					self.infos[rec.listID].open(self.Map, self.markers[rec.listID]);
				});
				//console.log(rec.listID)

				//google.maps.event.addListener(marker, "dragend", function(ev) {
				//	widget.set_latlng(ev.latLng.lat() + "," + ev.latLng.lng());
				//});

			}
		},
		failure: function(response, opts){
			Ext.xh.msg('OOOPS', 'Something went wrong !');
		}
	});

}


this.load_polys = function(){

	var bizParkCoords = [
		new google.maps.LatLng(51.79823207487841, -4.082059264183044),
		new google.maps.LatLng(51.79296352752649, -4.068970084190369),
		new google.maps.LatLng(51.78999057425698, -4.074570536613464),
		new google.maps.LatLng(51.79368019230265, -4.0788620710372925),
		new google.maps.LatLng(51.79683869023591, -4.083024859428406),
		new google.maps.LatLng(51.79759510438447, -4.083067774772644)
    ];
    self.polys.bizParkPoly = new google.maps.Polygon({
      paths: bizParkCoords,
      strokeColor: "#FDF434",
      strokeOpacity: 0.5,
      strokeWeight: 1,
      fillColor: "#FDF434",
      fillOpacity: 0.35
	});
	self.polys.bizParkPoly.setMap(self.Map);

	var smParkCoords = [
		new google.maps.LatLng(51.79643393710293 , -4.083378911018372),
		new google.maps.LatLng(51.794025249059004 , -4.0801602602005005),
		new google.maps.LatLng(51.793739913853265 , -4.080879092216492),
		new google.maps.LatLng(51.79586993077733 , -4.08541738986969),
		new google.maps.LatLng(51.796314501058035 , -4.084634184837341),
		new google.maps.LatLng(51.796314501058035 , -4.083872437477112)
    ];
    self.polys.smParkPoly = new google.maps.Polygon({
      paths: smParkCoords,
      strokeColor: "#62E896",
      strokeOpacity: 0.3,
      strokeWeight: 3,
      fillColor: "#62E896",
      fillOpacity: 0.35
    });
	self.polys.smParkPoly.setMap(self.Map);

	var foodParkCoords = [
		new google.maps.LatLng(51.792857353998464, -4.079656004905701),
		new google.maps.LatLng(51.792127404226896 , -4.077939391136169),
		new google.maps.LatLng(51.789764940338486 , -4.076544642448425),
		new google.maps.LatLng(51.78956585064947 , -4.079334139823914),
		new google.maps.LatLng(51.78963221397678 , -4.081951975822449),
		new google.maps.LatLng(51.79056129030669 , -4.082338213920593),
		new google.maps.LatLng(51.79099927679595 , -4.080707430839539),
		new google.maps.LatLng(51.79211413230352 , -4.081436991691589)
	]
    self.polys.foodParkPoly = new google.maps.Polygon({
      paths: foodParkCoords,
      strokeColor: "#5F5FF8",
      strokeOpacity: 0.3,
      strokeWeight: 3,
      fillColor: "#5F5FF8",
      fillOpacity: 0.35
    });
	self.polys.foodParkPoly.setMap(self.Map);


	var tParkCoords = [
		new google.maps.LatLng(51.794518498683885, -4.0872520208358765),
		new google.maps.LatLng(51.79435924378936, -4.086812138557434),
		new google.maps.LatLng(51.794584854723965, -4.086318612098694),
		new google.maps.LatLng(51.794160174380345, -4.085589051246643),
		new google.maps.LatLng(51.793861568619114, -4.085964560508728),
		new google.maps.LatLng(51.7935496893798, -4.085567593574524),
		new google.maps.LatLng(51.79317808576809, -4.086522459983826),
		new google.maps.LatLng(51.79433270125227, -4.087530970573425),
		new google.maps.LatLng(51.794518498683885, -4.087219834327698)
	]
    self.polys.tParkPoly = new google.maps.Polygon({
      paths: tParkCoords,
      strokeColor: "#F85FD0",
      strokeOpacity: 0.3,
      strokeWeight: 1,
      fillColor: "#F85FD0",
      fillOpacity: 0.4
    });
	self.polys.tParkPoly.setMap(self.Map);
}


} /*** MP_Widget() */








