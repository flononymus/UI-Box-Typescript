import React from 'react'
import { Page } from "../renderer"

interface HomeProps {
    loadPage: (page: Page) => void;
}

export default function Home({loadPage}:HomeProps) {



    const handleSettingsClick = () => {
        window.loadPage('Settings');
    };

    return(
        <div className="bodyCenter">
            <div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'start', alignItems:'center'}}> 
            
                    <h1> UI-Box</h1>

                    <button className="navbarButton" id="settingsButton" style={{opacity:0.5}} onMouseDown={handleSettingsClick}>
                        <span className="material-symbols-outlined">
                       settings 
                        </span>
                    </button>

                </div>

                <div className="logo">
                    <img className="logoImg" src="./media/icon.png" />
                </div>
            </div>    
        </div>
    )
}