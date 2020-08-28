const google = window.google;

class GooglePlacesRepo {
    constructor(){
        this.places = [];
    }

    getPlaceInfo(coordinates) { 

        const location = new google.maps.LatLng(coordinates.lat,coordinates.lng);

        const map = new google.maps.Map(Element, {center: location, zoom: 15});

        const request = {
            location:location,
            radius: '500',
            type: ['restaurant']
        };
      
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results,status)=>{
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                this.places = results;
                console.log(results);
            }
        });
    }

    getPlaceDetails(coordinates,placeId){

        const request = {
            placeId,
            fields: ['name', 'rating', 'photo','reviews']
        };

        const location = new google.maps.LatLng(coordinates.lat,coordinates.lng);

        const map = new google.maps.Map(Element, {center: location, zoom: 15});
          
        const service = new google.maps.places.PlacesService(map);
        service.getDetails(request, callback);
          
        function callback(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log(place);
            }
        }
    }
}

export default GooglePlacesRepo;