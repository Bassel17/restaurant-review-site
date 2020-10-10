const google = window.google;

class GooglePlacesRepo {
    constructor(){
        this.places = [];
    }

    getPlaceInfo(coordinates, callback) { 

        const location = new google.maps.LatLng(coordinates.lat,coordinates.lng);

        const map = new google.maps.Map(Element, {center: location, zoom: 15});

        const request = {
            location:location,
            radius: '1000',
            type: ['restaurant']
        };
      
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results,status)=>{
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                this.places = results;
                callback(results);
            }
        });
    }

    getPlaceDetails(coordinates,placeId, callback){

        const request = {
            placeId,
            fields: ['name', 'rating', 'photo','reviews']
        };

        const location = new google.maps.LatLng(coordinates.lat,coordinates.lng);

        const map = new google.maps.Map(Element, {center: location, zoom: 15});
          
        const service = new google.maps.places.PlacesService(map);
        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                callback(place);
            }
        });
    }

    async getPlaceStreetView(coordinates,callback){
        try{
            const result = await fetch(`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${coordinates.lat()},${coordinates.lng()}&heading=151.78&pitch=-0.76&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
            callback(result.url);
        }catch(error){
            console.log(error)
        }
        
    }
}

export default GooglePlacesRepo;