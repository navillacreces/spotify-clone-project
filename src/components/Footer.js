import React from 'react';

import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import {Grid, Slider} from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

import '../css/Footer.css';

function Footer() {
    return (
        <div className="footer">
           <div className="footer__left">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Soul_Meets_Body.jpg" className="footer__albumLogo" alt="album-art" />
                <div className="footer__songInfo">
                    <h4>Soul Meets Body</h4>
                    <p>death cab for cutie</p>
                </div>
                
           </div>
           <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
           </div>
           <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider  />
                    </Grid>
                </Grid>
           </div>
        </div>
    )
}

export default Footer
