import { deleteSongAction } from "../redux/song_/songSlice";
import { XCloseButton, DeleteButton, CancleButton } from "./Button/button.comp";
import { PopupParent, CustomPopup, PopupTopComp, PopupBottomComp } from "./Popup/popup.style";

import { useDispatch } from "react-redux";

interface DeleteSongProps {
    show: boolean;
    handleClose: () => void;
    albumId: string;
    songId: string;
}
// just defined this deletePopupForm diferen from the other is that it accepts two id(album, song)
function DeleteSongPopupForm({show, handleClose, albumId, songId}: DeleteSongProps ){
    const dispatch = useDispatch();
    const handleDelete = () =>{
        // [?] there should be some informative popup after item is deleted 
        dispatch(deleteSongAction([albumId, songId]))
        handleClose();
    }
    if (!show) {
        return null;
    }

    return(
            <PopupParent>
                <CustomPopup
                variant="filter"
                bg={"#fff"}
                color={"#000000"}
                >
                    <div>
                        <PopupTopComp>
                            <h3>Delete Song</h3>
                            <XCloseButton onClick={handleClose} />
                        </PopupTopComp>
                        <div>
                            Are you sure you want to delete
                            <br />
                            {songId}
                        </div>
                        <PopupBottomComp>
                            <DeleteButton onClick={handleDelete} />
                            <CancleButton onClick={handleClose} />
                        </PopupBottomComp>
                    </div>
                </CustomPopup>
            </PopupParent>
    )
}

export default DeleteSongPopupForm;