import React, { ChangeEvent, FormEvent, useState } from "react";
import { craeteArtistAction } from "../../redux/artist_/artistSlice";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { artist_form_type } from "../../interfaces/interfaces";
import { CustomInput } from "./input.style";
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
        dispatch(craeteArtistAction(formData));

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
                <form onSubmit={handleSubmit}>
                    <label>Artist Full Name</label>
                    <CustomInput
                        type="text"
                        placeholder="Enter Full Name"
                        name="full_name"
                        required={true}
                        value={formData.full_name}
                        onChange={handleFormChange}/>
                    <br/>
                    <label>Artist Bio</label>
                    <CustomInput
                        type="text"
                        placeholder="Bio"
                        name="bio"
                        required={true}
                        value={formData.bio}
                        onChange={handleFormChange}/>
                    <br/>
                    <label>Artist dob</label>
                    <CustomInput 
                        type="date"
                        placeholder="dob"
                        name="dob"
                        required={true}
                        value={formData.dob.toISOString().substr(0,10)}
                        onChange={handleFormChange}/>
                    <br/>
                    <label>Gender:</label>
                    <br/>
                    <label>Male</label>
                    <input
                        type="radio"
                        // label="Male"
                        name="gender"
                        checked={formData.gender === 'M'}
                        value="M"
                        onChange={handleFormChange}
                        id="male"/>
                    <label>Female</label>
                    <input
                        type="radio"
                        // label="Female"
                        name="gender"
                        checked={formData.gender === 'F'}
                        value="F"
                        onChange={handleFormChange}
                        id="female"/>
                    <br/>
                    <label>Image URL</label>
                    <CustomInput
                        type="text"
                        placeholder="Image URL"
                        name="img_url"
                        required={true}
                        value={formData.img_url}
                        onChange={handleFormChange}/>
                    <br/>
                    {/* I don't know if I should allow adding album and songs and single songs */}
                    <Button variant="primary" type="submit">Submit</Button>
                </form>
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