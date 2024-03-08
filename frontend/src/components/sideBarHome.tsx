import React from "react";

// components
import LogoComponent from "./logo";
import StatisticCardComponent from "./stasticsCard";

// custom CSS
import './SideBarHome.css';
import { SidebarComp } from "./Sidebar/sidebar.style";
import { OtherButton, OtherButtonContainer } from "./Button/button.style";

const SideBar: React.FC = () => {
    return (
        <SidebarComp>
            < LogoComponent/>
            < StatisticCardComponent/>
            <OtherButtonContainer>
                <OtherButton onClick={()=>{}}><b>Artist</b></OtherButton>
                <OtherButton onClick={()=>{}}><b>Album</b></OtherButton>
                <OtherButton onClick={()=>{}}><b>Genre</b></OtherButton>
                <OtherButton onClick={()=>{}}><b>Songs</b></OtherButton>
            </OtherButtonContainer>
        </SidebarComp>
    )
}

export default SideBar;