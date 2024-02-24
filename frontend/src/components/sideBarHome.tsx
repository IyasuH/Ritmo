import React from "react";
import { Button } from "react-bootstrap";

// components
import LogoComponent from "./logo";
import StatisticCardComponent from "./stasticsCard";

// custom CSS
import './SideBarHome.css';

const SideBar: React.FC = () => {
    return (
        <div className="indigenous_style sidebarComponents">
            < LogoComponent/>
            < StatisticCardComponent/>
            <div className="col-md-1 indigenous_style button_container">
                <Button variant="primary" className="indigenous_style button_1">Artist</Button>
                <Button variant="primary" className="indigenous_style button_1">Album</Button>
                <Button variant="primary" className="indigenous_style button_1">Genre</Button>
                <Button variant="primary" className="indigenous_style button_1">Songs</Button>
            </div>
        </div>
    )
}

export default SideBar;