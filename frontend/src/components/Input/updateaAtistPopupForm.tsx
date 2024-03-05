import { Modal, Button, Form } from "react-bootstrap";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { updateArtistAction } from "../../redux/artist_/artistSlice";
import { artist_type } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { CustomInput } from "./input.style";
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
            updatedAt: artist_u.updatedAt,    
        });
        handleClose();
    }
    const handleUpdate = () => {
        console.log("[INFO] update artist: ", artist_u._id);
        handleClose();
    }
    return(
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Artist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                        <label>Artist Full Name</label>
                        <CustomInput
                            type="text"
                            placeholder="Enter Full Name"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleFormChange}/>
                        <br/>
                        <label>Artist Bio</label>
                        <CustomInput
                            type="text"
                            placeholder="Bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleFormChange}/>
                        <br/>
                        <label>Artist dob</label>
                        <CustomInput
                            type="date"
                            placeholder="dob"
                            name="dob"
                            value={formData.dob instanceof Date ? formData.dob.toISOString().substr(0,10) : ''}
                            // value = {formData.dob}
                            onChange={handleFormChange}/>
                        <br/>
                        <label>Gender:</label>
                        <br/>
                        <label>Male</label>
                        <CustomInput
                            type="radio"
                            // label="Male"
                            name="gender"
                            checked={formData.gender === 'M'}
                            value="M"
                            onChange={handleFormChange}
                            id="male"/>
                        <label>Female</label>
                        <CustomInput
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
                            value={formData.img_url}
                            onChange={handleFormChange}/>
                        <br/>
                    <Button variant="primary" type="submit">Update</Button>
                </form>                

            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleUpdate}>
                    Update
                </Button> */}
                <Button variant="secondary" onClick={handleClose}>
                    Cancle
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ArtistCardMorePopupForm;