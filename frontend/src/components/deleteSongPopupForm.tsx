import { Modal, Button, Form } from "react-bootstrap";
import { deleteSongAction } from "../redux/song_/songSlice";
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
    return(
        <Modal show={show} size="sm" onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Delete Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to delete the {songId}
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

export default DeleteSongPopupForm;