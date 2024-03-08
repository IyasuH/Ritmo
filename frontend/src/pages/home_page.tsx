// custom CSS
import './home.css'

// components
import ArtistCard from "../components/artistCard";
import SideBar from "../components/sideBarHome";
import { AiOutlineSortAscending } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { TopComIconStyle, TopCompStyle } from '../components/styled_components/top_components.style';
import { CardContainer } from '../components/styled_components/card.style';
import { useState } from 'react';
import CreateArtistPopupForm from '../components/Input/newArtistPopupFrom';

// import createArtistPopupForm from '../components/newArtistPopupFrom';

export default function HomePage(){
    const [showNewArtistPopup, setShowNewArtistPopup] = useState(false);

    const handleShowNewArtistPopup = () => setShowNewArtistPopup(true);
    const handleCloseNewArtistPopup = () => setShowNewArtistPopup(false);  
    return (
            <div className="indigenous_style home_parent">
                <SideBar/>
                <CardContainer>
                    <TopCompStyle>
                        <h1>Artists</h1>
                        <TopComIconStyle>
                            <IoMdAdd size={35} onClick={handleShowNewArtistPopup} />
                            <AiOutlineSortAscending size={35} onClick={()=>{}}/>
                        </TopComIconStyle>
                    </TopCompStyle>
                    <CreateArtistPopupForm show={showNewArtistPopup} handleClose={handleCloseNewArtistPopup}/>
                    <ArtistCard/>
                </CardContainer>
                {/* <div className="container row indigenous_style main_child">
                </div> */}
            </div>
    )
}