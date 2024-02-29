import { Modal, Button, Form } from "react-bootstrap";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { album_type,  } from "../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { updateAlbumAction } from "../redux/album_/albumSlice";

interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    album_u: album_type;

}


function AlbumCardMorePopupForm({ show, handleClose, album_u }: PopupformProps ){

    const [formData, setFormData] = useState<album_type>({
        _id: album_u._id,
        title: album_u.title,
        cover_img_url: album_u.cover_img_url,
        release_date: new Date(album_u.release_date),
        songs: album_u.songs,
        created_at: album_u.created_at,
        updated_at: new Date(),
    })
    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const { name, value } = e.target as HTMLInputElement|HTMLTextAreaElement;
        // console.log("[INFO] form change: ", {...formData})
        if (name==='release_date'){
            const dateValue  = new Date(value);
            setFormData({
                ...formData, [name]: dateValue
            });
        } else{
            setFormData({
                ...formData, [name]: value
            })
        }
    }
    const dispatch = useDispatch();
    const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
        try {
            dispatch(updateAlbumAction(formData));
        } catch (error) {
            // 
        }
        
        e.preventDefault();
        setFormData({
            _id: album_u._id,
            title: album_u.title,
            cover_img_url: album_u.cover_img_url,
            release_date: new Date(album_u.release_date),
            songs: album_u.songs,
            created_at: album_u.created_at,
            updated_at: album_u.updated_at,
        });
        handleClose();
    }

    return(
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Artist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formAlbumInfo">
                        <Form.Label>Album Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Album Title"
                            name="title"
                            value={formData.title}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAlbumInfo">
                        <Form.Label>Album Cover Img URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Album Cover Img URL"
                            name="cover_img_url"
                            value={formData.cover_img_url}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAlbumInfo">
                        <Form.Label>Album Release Date</Form.Label>
                        <Form.Control 
                            type="date"
                            placeholder="Album Release Date"
                            name="release_date"
                            // value={formData.release_date instanceof Date ? formData.release_date.toISOString().substr(0,10) : ''}
                            value={formData.release_date instanceof Date ? formData.release_date.toISOString().substr(0,10) : ''}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancle
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AlbumCardMorePopupForm;