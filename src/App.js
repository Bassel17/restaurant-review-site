import React, {useState,useEffect} from 'react';
import Places from "google-places-web";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.scss';
import {Icon} from '@iconify/react';
import roundMenu from '@iconify/icons-ic/round-menu';
import SliderComponent from './Components/SliderComponent/SliderComponent';
import Loading from './Components/Loading/Loading';
import RestaurantDetails from './Components/RestaurantDetails/RestaurantDetails';
import AddRestaurantModal from './Components/AddRestaurantModal/AddRestaurantModal';
import GooglePlacesRepo from './Repositories/GooglePlacesRepo/GooglePlacesRepo';
const placesRepo = new GooglePlacesRepo();

export const App = (props) => {
    Places.apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const [positionState, setPositionState] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [addedRestaurants,setAddedRestaurants] = useState([]);
    const [addedReviews,setAddedReviews] = useState([]);
    const [visible,setVisible] = useState("slider--not-appear");
    const [restaurantReview,setRestaurantReview] = useState("restaurant-details--hide");
    const [restaurantInfo, setRestaurantInfo] = useState("");
    const [restaurantModalState, setRestaurantModalState] = useState(false);
    const [clickedPosition, setClickedPosition] = useState();


    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setPositionState({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        });
      });
    },[]);

    useEffect(() => {
      placesRepo.getPlaceInfo(positionState,setRestaurants);
    }, [positionState]);

    const showReviews = (restaurant) => {
      setRestaurantInfo({
        location:restaurant.geometry.location,
        place_id:restaurant.place_id,
        created:restaurant.created
      });
      setRestaurantReview("restaurant-details--show");
    }

    const hideReview = () => {
      setRestaurantReview("restaurant-details--hide");
    }

    const onMapClicked = (mapProps, map, clickEvent) => {
      setClickedPosition({
        lat:clickEvent.latLng.lat(),
        lng:clickEvent.latLng.lng()
      })
      toggleAddRestaurantModal(true);
    }

    const addRestaurant = (restaurant) => {
      setAddedRestaurants([...addedRestaurants,restaurant]);
      toggleAddRestaurantModal(false);
    }

    const toggleAddRestaurantModal = (isVisible) => {
      setRestaurantModalState(isVisible);
    }

    const addReview = (review) => {
      setAddedReviews([...addedReviews,review]);
    }

    if(positionState === ""){
      return <Loading/>
    }else{
      const restaurantsToShow = [...restaurants,...addedRestaurants]
    return (
      <React.Fragment>
        <SliderComponent visible={visible} slideBack = {()=>setVisible("slider--not-appear")} restaurants={restaurantsToShow} showReviews={showReviews}/>
        <Map
          google={props.google} 
          zoom={15}
          initialCenter={positionState}
          center={positionState}
          loadingElement={<Loading/>}
          onClick={onMapClicked}
        >
        <div className="burgerButtonContainer"><Icon className="burgerButtonContainer__button" icon={roundMenu} onClick={()=>setVisible("slider--appear")} /></div>
        <Marker 
                position={positionState} name={'Current location'} 
                icon={{
                  url: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/map-marker-256.png',
                  anchor: new props.google.maps.Point(32,32),
                  scaledSize: new props.google.maps.Size(64,64)
                }}
        />

        {restaurantsToShow.map((restaurant, index)=>{
          return <Marker 
            key={index}
            position={restaurant.geometry.location} name={restaurant.name} 
            icon={{
              url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
              anchor: new props.google.maps.Point(32,32),
              scaledSize: new props.google.maps.Size(64,64)
            }}
        />
        })}
      </Map>
      <RestaurantDetails 
        class={restaurantReview} 
        info={restaurantInfo} 
        hide={hideReview}
        placesRepo={placesRepo}
        addReview = {addReview}
        addedReviews = {addedReviews}
      />

      <AddRestaurantModal
        isVisible = {restaurantModalState}
        toggleModal = {toggleAddRestaurantModal}
        position = {clickedPosition}
        addRestaurant = {addRestaurant}
      />
      </React.Fragment>
  );
    }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(App)
