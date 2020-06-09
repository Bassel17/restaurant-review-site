import React, {useState,useEffect} from 'react';
import Places from "google-places-web";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.scss';
import {Icon} from '@iconify/react';
import roundMenu from '@iconify/icons-ic/round-menu';
import SliderComponent from './Components/SliderComponent/SliderComponent';

export const App = (props) => {

    Places.apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const [positionState, setPositionState] = useState({
      lat: 40.854885,
      lng: -88.081807
    });

    const [places, setPlaces] = useState("");

    const [visible,setVisible] = useState("slider--not-appear");

    useEffect(() => {
      // navigator.geolocation.getCurrentPosition((position) => {
      //   setPositionState({
      //     lat:position.coords.latitude,
      //     lng:position.coords.longitude
      //   });
      // });
      // fetchData()
    });

    const fetchData = async () => {
      try{
      const response = await Places.nearbysearch({
        location: `${positionState.lat},${positionState.lng}`, // LatLon delimited by ,
        radius: "500",  // Radius cannot be used if rankBy set to DISTANCE
        type: [], // Undefined type will return all types
        // rankby: "distance" // See google docs for different possible values
      });
     
      const { status, results, next_page_token, html_attributions } = response;
      console.log(results);
    } catch (error) {
      console.log(error);
    }
    };

    return (
      <React.Fragment>
        <SliderComponent visible={visible} slideBack = {()=>setVisible("slider--not-appear")}/>
        <Map 
        google={props.google} 
        zoom={15}
        initialCenter={positionState}
        center={positionState}
      >
        <div className="burgerButtonContainer"><Icon className="burgerButtonContainer__button" icon={roundMenu} onClick={()=>setVisible("slider--appear")} /></div>
        <Marker 
                position={positionState} name={'Current location'} />
        <InfoWindow>
            <div>
              <h1>ok</h1>
            </div>
        </InfoWindow>
      </Map>
      </React.Fragment>
  );
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(App)
