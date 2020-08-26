import React, {useState,useEffect} from 'react';
import Places from "google-places-web";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.scss';
import {Icon} from '@iconify/react';
import roundMenu from '@iconify/icons-ic/round-menu';
import SliderComponent from './Components/SliderComponent/SliderComponent';
import GooglePlacesRepo from './Repositories/GooglePlacesRepo/GooglePlacesRepo';
const placesRepo = new GooglePlacesRepo();

export const App = (props) => {

    Places.apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const [positionState, setPositionState] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [visible,setVisible] = useState("slider--not-appear");
    const [placesReadyState, setPlaceReadyState] = useState(false);

    const getRestaurantsNearby =()=>{
      placesRepo.getPlaceInfo(positionState);
    }

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setPositionState({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        });
      });
    },[]);

    useEffect(() => {
      getRestaurantsNearby();
    }, [positionState]);

    useEffect(() => {
      setRestaurants(placesRepo.places);
    });

    if(positionState === ""){
      return <h1>Loading</h1>
    }else{
    return (
      <React.Fragment>
        <SliderComponent visible={visible} slideBack = {()=>setVisible("slider--not-appear")} restaurants={restaurants}/>
        <Map
          google={props.google} 
          zoom={15}
          initialCenter={positionState}
          center={positionState}
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

        {restaurants.map((restaurant, index)=>{
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
        <InfoWindow>
            <div>
              <h1>ok</h1>
            </div>
        </InfoWindow>
      </Map>
      </React.Fragment>
  );
    }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(App)
