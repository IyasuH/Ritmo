import { Modal, Button, Form } from "react-bootstrap";
import { deleteArtistAction } from "../redux/artist_/artistSlice";
import { useDispatch } from "react-redux";

interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    artistId: string
}

function ArtistDeleteWarnPopupForm({ show, handleClose, artistId}: PopupformProps ){
    const dispatch = useDispatch();
    const handleDelete = () => {
        // may be here i have add something that ask for are sure manmen....
        console.log("[INFO] delete artist: ", artistId);
        dispatch(deleteArtistAction(artistId));
        handleClose();
    }
    
    return(
        <Modal show={show} size="sm" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Artist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {artistId}
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

export default ArtistDeleteWarnPopupForm;