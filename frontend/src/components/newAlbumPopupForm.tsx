import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { album_form_type } from "../interfaces/interfaces";

interface PopupformProps {
    show: boolean;
    handleClose: () => void
}

function CreateAlbumPopupForm({ show, handleClose}: PopupformProps){

    const [formData, setFormData] = useState<album_form_type>({
        title: '',
        cover_img_url: '',
        release_date: new Date(),
        // songs: Array<song_type>,
        created_at: new Date(),
        updated_at: new Date(),
        })

    const handleSubmit = () => {}
    const handleFormChange = () => {}
    const handleClear = () => {}
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Artist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Full Name"
                            name="full_name"
                            value={formData.title}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Cover Img URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bio"
                            name="bio"
                            value={formData.cover_img_url}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control 
                            type="date"
                            placeholder="dob"
                            name="dob"
                            value={formData.release_date.toISOString().substr(0,10)}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>                

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClear}>
                    Clear
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default CreateAlbumPopupForm;