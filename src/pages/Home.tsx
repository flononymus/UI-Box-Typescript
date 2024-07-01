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

            <h1> UI-Box 
            {/* <div className="navbarLeft">
                <button className="navbarButton" id="settingsButton" onClick={handleSettingsClick}>
                <span className="material-symbols-outlined">
                    settings
                </span>
            </button>
            </div> */}
            </h1>

            <div className="logo">
                <img className="logoImg" src="./media/icon.png" />
                </div>
            </div>    
            </div>
    )
}