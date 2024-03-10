import { CancleButton, XCloseButton } from "../Button/button.comp";
import { CustomPopup, PopupParent, PopupTopComp, PopupBottomComp } from "../Popup/popup.style";

interface PopupAboutProps {
    show: boolean;
    handleClose: ()=>void;
}

function AboutPopup({show, handleClose}: PopupAboutProps){

    if (!show) {
        return null;
    }
    return (
        <PopupParent>
            <CustomPopup
             variant="filter"
             bg={"#fff"}
             color={"#000000"}
            >
                <div>
                    <PopupTopComp>
                        <h3>About</h3>
                        <XCloseButton onClick={handleClose} />
                    </PopupTopComp>
                    <div>
                        This project is <a href="https://addissoftware.com/">Addis Software</a> test project
                        <br />
                        You can find the Source code <a href="https://github.com/IyasuH/Ritmo">here</a>
                        <br />
                        Contact me <a href="https://t.me/IyasuHa">Eyasu Hailegbriel</a>
                    </div>
                    <PopupBottomComp>
                        <CancleButton onClick={handleClose} />
                    </PopupBottomComp>
                </div>
            </CustomPopup>
        </PopupParent>
    )
}

export default AboutPopup;