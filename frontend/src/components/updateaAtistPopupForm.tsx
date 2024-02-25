import { Modal, Button, Form } from "react-bootstrap";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { artist_form_type, artist_type } from "../interfaces/interfaces";
import { updateArtistAction } from "../redux/artist_/artistSlice";
import { useDispatch } from "react-redux";
interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    artist_u: artist_type
}

function ArtistCardMorePopupForm({ show, handleClose, artist_u}: PopupformProps ){

    const [formData, setFormData] = useState<artist_type>({
        _id: artist_u._id,
        full_name: artist_u.full_name,
        bio: artist_u.bio,
        dob: new Date(artist_u.dob),
        gender: artist_u.gender,
        img_url: artist_u.img_url,
        albums: artist_u.albums,
        single: artist_u.single,
        createdAt: artist_u.createdAt,
        updatedAt: new Date(),
    })

    // console.log("[INFO] dob value, ", artist_u.dob)

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const { name, value } = e.target as HTMLInputElement|HTMLTextAreaElement;
        // console.log("[INFO] form change: ", {...formData})
        if (name==='dob'){
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
        // console.log("[INFO] formData: ", formData)
        dispatch(updateArtistAction(formData));
        e.preventDefault();
        setFormData({
            _id: artist_u._id,
            full_name: artist_u.full_name,
            bio: artist_u.bio,
            dob: new Date(artist_u.dob),
            gender: artist_u.gender,
            img_url: artist_u.img_url,
            albums: artist_u.albums,
            single: artist_u.single,
            createdAt: artist_u.createdAt,
            updatedAt: new Date(),    
        });
        handleClose();
    }
    const handleUpdate = () => {
        console.log("[INFO] update artist: ", artist_u._id);
        handleClose();
    }
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Artist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Artist Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Full Name"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Artist Bio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Artist dob</Form.Label>
                        <Form.Control 
                            type="date"
                            placeholder="dob"
                            name="dob"
                            value={formData.dob instanceof Date ? formData.dob.toISOString().substr(0,10) : ''}
                            // value = {formData.dob}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Gender:</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            checked={formData.gender === 'M'}
                            value="M"
                            onChange={handleFormChange}
                            id="male"/>
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            checked={formData.gender === 'F'}
                            value="F"
                            onChange={handleFormChange}
                            id="female"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Image URL"
                            name="img_url"
                            value={formData.img_url}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    {/* I don't know if I should allow adding album and songs and single songs */}
                    <Form.Group controlId="formAlbumInfo">
                        <Form.Group controlId="formSongInfo">
                        </Form.Group>
                    </Form.Group>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>                

            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleUpdate}>
                    Update
                </Button> */}
                <Button variant="secondary" onClick={handleClose}>
                    Cancle
                </Button>
                {/* <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default ArtistCardMorePopupForm;