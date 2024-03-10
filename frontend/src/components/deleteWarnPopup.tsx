import { deleteArtistAction } from "../redux/artist_/artistSlice";
import { useDispatch } from "react-redux";
import { deleteAlbumAction } from "../redux/album_/albumSlice";
import { deleteSingleAction } from "../redux/single_/singleSlice";

import { XCloseButton, DeleteButton, CancleButton } from "./Button/button.comp";
import { PopupParent, CustomPopup, PopupTopComp, PopupBottomComp } from "./Popup/popup.style";

export enum deleted_items {
    artist = "artist",
    album = "album",
    single = "single"
}

interface DelPopupformProps {
    show: boolean;
    handleClose: () => void;
    itemId: string;
    what: deleted_items; // what is going to be deleted to put may be condition
}

interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    artistId: string
}

// I think i can just make this delete popup for Artist, Album, Single
// 
function DeleteWarnPopupForm({ show, handleClose, itemId, what }: DelPopupformProps ){
    // 
    const dispatch = useDispatch();
    // [?] there should be some informative popup after item is deleted 
    const handleDelete = () => {
        switch (what) {
            case deleted_items.artist:
                // delete artist
                console.log("[INFO] delete artist: ", itemId);
                dispatch(deleteArtistAction(itemId));
                handleClose();
                break;
            case deleted_items.album:
                // delete album
                console.log("[INFO] delete album: ", itemId);
                dispatch(deleteAlbumAction(itemId));
                handleClose();
                break;
            case deleted_items.single:
                // delete single
                console.log("[INFO] delete single: ", itemId);
                dispatch(deleteSingleAction(itemId))
                handleClose();
                break;
        }}

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
                            <h3>Delete {what as string}</h3>
                            <XCloseButton onClick={handleClose} />
                        </PopupTopComp>
                        <div>
                            Are you sure you want to delete
                            <br />
                            {itemId}
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

export default DeleteWarnPopupForm;