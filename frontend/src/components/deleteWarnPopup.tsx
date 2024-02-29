import { Modal, Button, Form } from "react-bootstrap";
import { deleteArtistAction } from "../redux/artist_/artistSlice";
import { useDispatch } from "react-redux";
import { deleteAlbumAction } from "../redux/album_/albumSlice";
import { deleteSingleAction } from "../redux/single_/singleSlice";

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
        return(
            <Modal show={show} size="sm" onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{what as string}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the {itemId}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

export default DeleteWarnPopupForm;