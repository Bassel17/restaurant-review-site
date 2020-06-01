import React, {useState,useEffect} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.scss';

export const App = (props) => {

    const [positionState, setPositionState] = useState({
      lat: 40.854885,
      lng: -88.081807
    });

    const [places, setPlaces] = useState("");

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setPositionState({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        });
      });
      fetchData()
    });

    const fetchData = async () => {
      try{
        const response = await fetch (`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAyHplLn72iIDSgWZrwaWz3XDvgJmGhNsc&location=${positionState.lat},${positionState.lng}&radius=50000&type=restaurant`,{
        method: 'GET',  
        cache: 'no-cache',
        credentials: 'same-origin',
        Headers:{
          'Access-Control-Allow-Origin':'http://localhost:3000'
        }
        });
        const results = await response.json();
        console.log(results);
        setPlaces(results);
      }catch(error){
        console.log(error);
      }
    };
    return (
      <Map 
        google={props.google} 
        zoom={15}
        initialCenter={positionState}
        center={positionState}
      >
 
        <Marker 
                position={positionState} name={'Current location'} />
 
        <InfoWindow>
            <div>
              <h1>ok</h1>
            </div>
        </InfoWindow>
      </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAyHplLn72iIDSgWZrwaWz3XDvgJmGhNsc")
})(App)
