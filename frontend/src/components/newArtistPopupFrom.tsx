import React, { ChangeEvent, FormEvent, useState } from "react";
import { craeteArtistAction } from "../redux/artist_/artistSlice";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { artist_form_type } from "../interfaces/interfaces";
interface PopupformProps {
    show: boolean;
    handleClose: () => void
}

function CreateArtistPopupForm({ show, handleClose}: PopupformProps){
    // const fromData = useSelector((state: StateType)=>state.artists)
    const [formData, setFormData] = useState<artist_form_type>({
        full_name: '',
        bio: '',
        dob: new Date(),
        gender: '',
        img_url: '',
        // albums: [{}],
        // single: [{}],
        createdAt: new Date(),
        updatedAt: new Date(),
    })
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
        // console.log("[INFO] Data: ", formData)

        // 

        // useEffect(() => {
        dispatch(craeteArtistAction(formData));
        // }, [formData]);

        e.preventDefault();
        setFormData({
            full_name: '',
            bio: '',
            dob: new Date(),
            gender: '',
            img_url: '',
            // albums: [{}],
            // single: [{}],
            createdAt: new Date(),
            updatedAt: new Date(),    
        });
        handleClose();
    }
    const handleClear = () => {
        setFormData({
            full_name: '',
            bio: '',
            dob: new Date(),
            gender: '',
            img_url: '',
            // albums: [{}],
            // single: [{}],
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Artist</Modal.Title>
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
                            value={formData.dob.toISOString().substr(0,10)}
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
                {/* <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default CreateArtistPopupForm;