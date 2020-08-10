//
//
//
//
//
//


export const authEndPoint = "https://accounts.spotify.com/authorize";


const redirectURI = "http://localhost:3000/";

const clientID = "efebf5ffea3d4b869aae0a6766748fc3";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"

];

export const loginURL = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


export const getTokenFromURL = () =>{ // pulls access token
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {
        // #accessToken=mysupersecretKey
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial;
    }, {})
}