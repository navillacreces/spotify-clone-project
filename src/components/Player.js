import React from 'react';
import '../css/Player.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Body from './Body';

export default function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar spotify={spotify}/>
                <Body />
            </div>
            <Footer />        
            
        </div>
    )
}
