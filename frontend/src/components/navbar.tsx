import React, { useState } from "react";

import { VscAccount } from "react-icons/vsc";
import { IoMdMore } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import { Link, Outlet } from "react-router-dom";

import { NavBar, NavBarComp } from "./other_styled_components/nav_bar.style";
import { SearchInput } from "./Input/input.style";
import FilterPopup from "./Popup/filterPopup";
import AboutPopup from "./Popup/aboutPopup";

const NavBarComponent: React.FC =()=> {
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [showAboutPopup, setShowAboutPopup] = useState(false);

  const handleFilterPopup = () => {
    setShowFilterPopup(true);
  }

  const handleCloseFilterPoup = () => {
    setShowFilterPopup(false)
  }

  const handleAboutPopup = () => {
    setShowAboutPopup(true);
  }

  const handleCloseAboutPoup = () => {
    setShowAboutPopup(false)
  }

  return (
    <NavBar>
      <a href="/" style={{ textDecoration: 'none', color: 'black' }}><h1>Ritmo</h1></a>
      <NavBarComp>
        <form onSubmit={()=>{}}>
          <SearchInput type="text" placeholder="search"/>
          <FiSearch size={35} onClick={()=>{}} type="submit"
            style={{backgroundColor: "#e0e0e0",
            borderRadius: "1.3em", padding: ".5em",
            width: "2.8em", height: "2.8em",
            color: "#8aa58b"}}
          />
          <IoMdMore size={35} onClick={() => handleFilterPopup()}
            type="submit"
            style={{backgroundColor: "#e0e0e0",
            borderRadius: "1.3em", padding: ".5em",
            width: "2.8em", height: "2.8em",
            margin: ".7em",
            color: "#8aa58b"}}
          />
        </form>
      </NavBarComp>
      <VscAccount size={35}
        style={{backgroundColor: "#e0e0e0",
        borderRadius: "1.3em", padding: ".5em",
        width: "2.8em", height: "2.8em",
        color: "#8aa58b"}}
        onClick={() => handleAboutPopup()}
      />
      <AboutPopup show={showAboutPopup} handleClose={handleCloseAboutPoup}/>
      <FilterPopup show={showFilterPopup} handleClose={handleCloseFilterPoup}/>
    </NavBar>
  );
}

export default function NavLayout() {
    return (
      <>
        <NavBarComponent/>
        <main>
          <Outlet />
        </main>
      </>
    )
}

// export default NavBarComponent;