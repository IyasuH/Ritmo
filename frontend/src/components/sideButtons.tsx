import { useNavigate } from "react-router-dom";
import { OtherButton, OtherButtonContainer } from "./Button/button.style";

function SideButton(): JSX.Element {
    const navigate = useNavigate();
    // This componnet is only for Logo image and little description about the platform
    const handleSmoothScroll = (targetId: string): void => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }

    };

    const handleButtonClick = (targetId: string): void => {
        handleSmoothScroll(targetId);
        navigate(targetId); // Use navigate function to navigate to the targetId
    };      
    return (
        <OtherButtonContainer>
            <OtherButton onClick={() => handleButtonClick("#artist")}><b>Artist</b></OtherButton>
            <OtherButton onClick={() => handleButtonClick("#album")}><b>Album</b></OtherButton>
            <OtherButton onClick={() => handleButtonClick("#genre")}><b>Genre</b></OtherButton>
            <OtherButton onClick={() => handleButtonClick("#song")}><b>Songs</b></OtherButton>
        </OtherButtonContainer>
    )
}
export default SideButton;