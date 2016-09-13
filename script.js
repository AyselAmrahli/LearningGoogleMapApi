(function(window,google){



/*---getElement from html (div#map-canvas)------*/
element = document.getElementById('map-canvas');

/*---map options  (center added Geolocation----*/
var  options = {
	// center:{
	// 	lat: 40.418834499999996,
	// 	lng: 49.9966144
	// },
	zoom: 8,
	// draggable:false||true
	// mapTypeId: google.maps.MapTypeId.HYBRID||SATELLITE||ROADMAP
	// zoomControlOptions:{
	// 	position:google.maps.ControlPosition.BOTTOM_LEFT,
	// 	style:google.maps.ZoomControlStyle.DEFAULT
	// },
}
/*---create map object with parameters element and options from google.maps.Map class----*/
map = new google.maps.Map(element,options);


/* -------events (addListener)-----*/
// google.maps.event.addListener(map,'click||dragend||mouseout||mouseover||so.on',function(e){
// 	alert('click');
// 	console.log(e);
// });



/*--- for markers, create marker object (position added Geolocation) google.maps.Marker class */
marker = new google.maps.Marker({
	// position:{
	// 	lat: 40.418834499999996,
	// 	lng: 49.9966144
	// },
	map: map,
	visible:true
	// draggable:true
	//icon:''
	// animation:google.maps.Animation.BOUNCE
	// animation:google.maps.Animation.DROP
	

});





/*---for infoWindow,create infoWindow object from google.maps.InfoWindow*/

infoWindow = new google.maps.InfoWindow({
	// content:'<div style="color:red;">i Love food</div>'
})
infoWindow.open(map,marker);



/*---Example:Polylines Simple-----*/
 var simplePolylinesCoordinates = [
          {lat: 40.772, lng: 49.214},
          {lat: 40.291, lng: 49.821},
          {lat: 40.142, lng: 49.431},
          {lat: 40.107, lng: 49.027}
        ];
//create object from google.maps.Polyline class
var simplePolylineObject = new google.maps.Polyline({
  path:simplePolylinesCoordinates,
  strokeColor:"#0000FF",
  strokeOpacity:0.6,
  strokeWeight:3
 });
 simplePolylineObject.setMap(map);
 //to remove plylines
 //tourplan.setmap(null);



/*---Example:Polygons Simple-----*/
var simplePolylinesCoordinates =[
/*we can use below methods: create new object from new google.maps.LatLng class*/
 // new google.maps.LatLng(40.385044, 49.486671),
 // new google.maps.LatLng(40.696888, 49.322451),
 // new google.maps.LatLng(40.056296, 49.057803),
 // new google.maps.LatLng(40.385044, 49.486671)

 {lat: 40.385044, lng: 49.486671},
 {lat: 40.696888, lng: 49.322451},
 {lat: 40.056296, lng: 49.057803},
 {lat: 40.385044, lng: 49.486671}
 ];

var simplePolygonObject=new google.maps.Polygon({
 path:simplePolylinesCoordinates,
 strokeColor:"#0000FF",
 strokeOpacity:0.8,
 strokeWeight:2,
 fillColor:"#ef5350",
 fillOpacity:0.4
 });
simplePolygonObject.setMap(map);



/*---Example:Circle Simple-----*/
 var myCircleObject = new google.maps.Circle({
 center:new google.maps.LatLng(40.613939,49.209021),
 radius:15300,
 strokeColor:"#B40404",
 strokeOpacity:0.6,
 strokeWeight:2,
 fillColor:"#B40404",
 fillOpacity:0.6
 });
 myCircleObject.setMap(map);













/* ---Geolocation-----*/
if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
       var pos = {
         lat: position.coords.latitude,
         lng: position.coords.longitude
       }
       infoWindow.setPosition(pos); 
       infoWindow.setContent('Your Current Location.');
        map.setCenter(pos);
        marker.setPosition(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      




}(window,google))