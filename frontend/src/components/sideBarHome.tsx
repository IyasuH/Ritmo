import React from "react";

// components
import StatisticCardComponent from "./stasticsCard";

import { SidebarComp } from "./Sidebar/sidebar.style";
import SideButton from "./sideButtons";

const SideBar: React.FC = () => {
    return (
        <SidebarComp>
            < StatisticCardComponent/>
            < SideButton/>
        </SidebarComp>
    )
}

export default SideBar;