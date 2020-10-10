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

export const filterRestaurantByReview = (min,max,restaurants) => {
    return restaurants.filter((restaurant)=>{
        if(typeof restaurant.rating !== 'undefined' )
            return restaurant?.rating >= min && restaurant?.rating <= max;
        return false
    });
}