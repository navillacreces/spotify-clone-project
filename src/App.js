import React, {useEffect, useState}  from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/Login';
import { getTokenFromURL } from './spotify';
import Player from './components/Player';
import {useDataLayerValue} from './components/DataLayer';



const spotify = new SpotifyWebApi();


function App() {

  

  const [{user, token}, dispatch] = useDataLayerValue();

  //Runs code based on condition
  useEffect(() =>{

    const hash = getTokenFromURL();
    window.location.hash="";

    const _token = hash.access_token;


    if (_token){

      dispatch({
        type:"SET_TOKEN",
        token: _token
      })
      
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        

        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });


      spotify.getPlaylist('37i9dQZEVXcIScYstP91Zf').then(res => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res
        }))
    }

    console.log('I HAVE A TOEKN', token);

  },[]); // empty brackets to run once, or name [variable]

  console.log("person", user);


  return (
    <div className="App">

      {
        token ? (<Player spotify={spotify}/>) : (<Login></Login>)
      }


    </div>
  );
}

export default App;
