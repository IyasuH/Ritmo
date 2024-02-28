import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { single_form_type } from "../interfaces/interfaces";

interface PopupformProps {
    show: boolean;
    handleClose: () => void
}

function CreateSinglePopupForm({ show, handleClose}: PopupformProps){

    const [formData, setFormData] = useState<single_form_type>({
        title: '',
        duration: 0,
        file_url: '',
        genre: '',
        release_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
            })

    const handleSubmit = () => {}
    const handleFormChange = () => {}
    const handleClear = () => {}
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Single</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Duration(in sec)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Duration"
                            name="duration"
                            value={formData.duration.toString()}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>File URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="File URL"
                            name="file_url"
                            value={formData.file_url}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Genre</Form.Label>
                        <Form.Select>
                            <option>Hip hop</option>
                            <option>Rock</option>
                            <option>Pop</option>
                            <option>Metal</option>
                            <option>Jazz</option>
                            <option>Afro</option>
                            <option>Indie</option>
                            <option>Country</option>

                        </Form.Select>
                        {/* <Form.Control
                            type="text"
                            placeholder="Genre"
                            name="genre"
                            value={formData.genre}
                            onChange={handleFormChange}/> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control 
                            type="date"
                            placeholder="Release Date"
                            name="release_date"
                            value={formData.release_date.toISOString().substr(0,10)}
                            onChange={handleFormChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Modal.Body>        
        </Modal>
    )
}

export default CreateSinglePopupForm;