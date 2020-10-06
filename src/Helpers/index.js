export const makeRestaurantDataStructure = (RestaurantName,RestaurantLocation) => {

    const restaurantStructure = {
        place_id:`${RestaurantLocation.lat}${RestaurantLocation.lng}`,
        geometry:{
            location:RestaurantLocation
        },
        name:RestaurantName,
        created:true
    }

    return restaurantStructure;
    
}