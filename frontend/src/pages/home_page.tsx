// custom CSS
import './home.css'

// components
import ArtistCard from "../components/artistCard";
import SideBar from "../components/sideBarHome";
import { AiOutlineSortAscending } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { TopComIconStyle, TopCompStyle } from '../components/other_styled_components/top_components.style';
import { CardContainer } from "../components/Card/card.style";
import { useState } from 'react';
import CreateArtistPopupForm from '../components/Input/newArtistPopupFrom';
import { MainbarComp } from '../components/MainBar/mainbar.style';

// import createArtistPopupForm from '../components/newArtistPopupFrom';

export default function HomePage(){
    const [showNewArtistPopup, setShowNewArtistPopup] = useState(false);

    const handleShowNewArtistPopup = () => setShowNewArtistPopup(true);
    const handleCloseNewArtistPopup = () => setShowNewArtistPopup(false);  
    return (
            <MainbarComp>
                <SideBar/>
                <CardContainer>
                    <TopCompStyle>
                        <h1>Artists</h1>
                        <TopComIconStyle>
                            <IoMdAdd size={35}
                            onClick={handleShowNewArtistPopup}
                            style={{backgroundColor: "#e0e0e0",
                            borderRadius: "1.3em", padding: ".5em",
                            width: "3.5em", height: "3.5em",
                            margin: ".7em",
                            color: "#8aa58b"}}                
                        />
                        <AiOutlineSortAscending size={"40"}
                            onClick={()=>{}}
                            style={{backgroundColor: "#e0e0e0",
                            borderRadius: "1.5em", padding: ".4em",
                            width: "3.5em", height: "3.5em",
                            margin: ".7em",
                            color: "#8aa58b"}}            
                        />
                        </TopComIconStyle>
                    </TopCompStyle>
                    <CreateArtistPopupForm show={showNewArtistPopup} handleClose={handleCloseNewArtistPopup}/>
                    <ArtistCard/>
                </CardContainer>
            </MainbarComp>
    )
}