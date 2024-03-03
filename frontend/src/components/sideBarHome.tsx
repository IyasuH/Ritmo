import React from "react";
import { Button } from "react-bootstrap";

// components
import LogoComponent from "./logo";
import StatisticCardComponent from "./stasticsCard";

// custom CSS
import './SideBarHome.css';
import { Button1, ButtonContainer } from "./styled_components/button.style";

const SideBar: React.FC = () => {
    return (
        <div className="indigenous_style sidebarComponents">
            < LogoComponent/>
            < StatisticCardComponent/>
            <ButtonContainer>
                <Button1 onClick={()=>{}}><b>Artist</b></Button1>
                <Button1 onClick={()=>{}}><b>Album</b></Button1>
                <Button1 onClick={()=>{}}><b>Genre</b></Button1>
                <Button1 onClick={()=>{}}><b>Songs</b></Button1>
            </ButtonContainer>
        </div>
    )
}

export default SideBar;