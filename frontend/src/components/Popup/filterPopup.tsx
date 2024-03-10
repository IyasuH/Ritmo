import { SubmitButton, CancleButton, ClearButton, XCloseButton } from "../Button/button.comp";
import { CustomPopup, PopupParent, PopupTopComp, PopupBottomComp } from "../Popup/popup.style";

interface PopupFilterProps {
    show: boolean;
    handleClose: ()=>void;
}

function FilterPopup({show, handleClose}: PopupFilterProps){

    const handleClear = () => {
        // handleClose
    }

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
                        <h3>Apply Filters</h3>
                        <XCloseButton onClick={handleClose} />
                    </PopupTopComp>
                    <div>
                        Year Filter
                    </div>
                    <div>
                        Genre Filter
                    </div>
                    <PopupBottomComp>
                        <ClearButton onClick={handleClear} />
                        <CancleButton onClick={handleClose} />
                    </PopupBottomComp>
                </div>
            </CustomPopup>
        </PopupParent>

    )
}

export default FilterPopup;