// custom CSS
import './home.css'

// components
import ArtistCard from "../components/artistCard";
import SideBar from "../components/sideBarHome";
// import createArtistPopupForm from '../components/newArtistPopupFrom';


export default function HomePage(){
    return (
        <>
            <div className="indigenous_style home_parent">
                <div className="indigenous_style side_child">
                    <SideBar/>
                </div>
                <div className="container row indigenous_style main_child">
                    <ArtistCard/>
                </div>
            </div>
        </>
    )
}