const google = window.google;

class GooglePlacesRepo {
    constructor(){
        this.places = [];
    }

    getPlaceInfo(coordinates) { 

        console.log(coordinates);
        const sydney = new google.maps.LatLng(coordinates.lat,coordinates.lng);

        const map = new google.maps.Map(Element, {center: sydney, zoom: 15});

        const request = {
            location:sydney,
            radius: '500',
            type: ['restaurant']
        };
      
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results,status)=>{
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                this.places = results;
            }
        });
    }
}

export default GooglePlacesRepo;