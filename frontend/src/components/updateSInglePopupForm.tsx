import { Modal, Button, Form } from "react-bootstrap";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { album_type, single_type } from "../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { updateSingleAction } from "../redux/single_/singleSlice";

interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    single_u: single_type;
}

function SingleCardMorePopupForm({ show, handleClose, single_u }: PopupformProps ){
    const [formData, setFormData] = useState<single_type>({
        _id: single_u._id,
        title: single_u.title,
        duration: single_u.duration,
        file_url: single_u.file_url,
        genre: single_u.genre,
        release_date: new Date(single_u.release_date),
        created_at: single_u.created_at,
        updated_at: new Date(),
    })

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target as HTMLInputElement|HTMLTextAreaElement| HTMLSelectElement;
        // console.log("[INFO] form change: ", {...formData})
        if (name==='release_date'){
            const dateValue  = new Date(value);
            setFormData({
                ...formData, [name]: dateValue
            });
        } else if (name==='genre'){
            setSelectedGenre(value);
            setFormData({
                ...formData, [name]: value
            })
        } else{
            setFormData({
                ...formData, [name]: value
            })
        }
    }

    const [selectedGenre, setSelectedGenre] = useState(single_u.genre);

    const dispatch = useDispatch();
    const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
        try {
            dispatch(updateSingleAction(formData));
        } catch (error) {
            // 
        }
        e.preventDefault();
        setFormData({
            _id: single_u._id,
            title: single_u.title,
            duration: single_u.duration,
            file_url: single_u.file_url,
            genre: single_u.genre,
            release_date: new Date(single_u.release_date),
            created_at: single_u.created_at,
            updated_at: single_u.updated_at,
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
                        <Form.Select value={selectedGenre} onChange={handleFormChange} name="genre">
                            {/* this list should be based on some reference on */}
                            <option value="Hip hop">Hip hop</option>
                            <option value="Rock">Rock</option>
                            <option value="Pop">Pop</option>
                            <option value="Metal">Metal</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Afro">Afro</option>
                            <option value="Indie">Indie</option>
                            <option value="Country">Country</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formArtistInfo">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control 
                            type="date"
                            placeholder="Release Date"
                            name="release_date"
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

export default SingleCardMorePopupForm;
