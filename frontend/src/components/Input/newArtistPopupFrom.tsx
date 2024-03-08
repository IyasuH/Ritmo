import React, { ChangeEvent, FormEvent, useState } from "react";
import { craeteArtistAction } from "../../redux/artist_/artistSlice";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { artist_form_type } from "../../interfaces/interfaces";
import { CustomInput } from "./input.style";
import { SubmitButton, CancleButton, ClearButton, XCloseButton } from "../Button/button.comp";
import { CustomPopup, PopupParent, PopupTopComp, PopupBottomComp } from "../Popup/popup.style";
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
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const { name, value } = e.target as HTMLInputElement|HTMLTextAreaElement;
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
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    }
    if (!show){
        return null;
    }
    return (
        <PopupParent>
            <CustomPopup
             variant="newItem"
             bg={"#fff"}
             color={"#000000"}
            >
                <div>
                    <PopupTopComp>
                        <h3>New Artist</h3>
                        <XCloseButton onClick={handleClose} />
                    </PopupTopComp>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Artist Full Name</label>
                            <br/>
                            <CustomInput
                                type="text"
                                placeholder="Enter Full Name"
                                name="full_name"
                                required={true}
                                value={formData.full_name}
                                onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>Artist Bio</label>
                            <br/>
                            <CustomInput
                                type="text"
                                placeholder="Bio"
                                name="bio"
                                required={true}
                                value={formData.bio}
                                onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>Artist dob</label>
                            <br/>
                            <CustomInput 
                                type="date"
                                placeholder="dob"
                                name="dob"
                                required={true}
                                value={formData.dob.toISOString().substr(0,10)}
                                onChange={handleFormChange}/>
                        </div>
                        <div>
                        <label>Gender:</label>
                            <br/>
                            <input
                                type="radio"
                                name="gender"
                                checked={formData.gender === 'M'}
                                value="M"
                                onChange={handleFormChange}
                                id="male"/>
                            <label>Male</label>
                            <br/>
                            <input
                                type="radio"
                                name="gender"
                                checked={formData.gender === 'F'}
                                value="F"
                                onChange={handleFormChange}
                                id="female"/>
                            <label>Female</label>
                        </div>
                        <div>
                            <label>Image URL</label>
                            <br/>
                            <CustomInput
                                type="text"
                                placeholder="Image URL"
                                name="img_url"
                                required={true}
                                value={formData.img_url}
                                onChange={handleFormChange}/>
                        </div>
                        <SubmitButton />
                    </form>
                    <PopupBottomComp>
                        <ClearButton onClick={handleClear} />
                        <CancleButton onClick={handleClose} />
                    </PopupBottomComp>
                </div>
            </CustomPopup>
        </PopupParent>
        // <Modal show={show} onHide={handleClose} centered>
        //     <Modal.Header closeButton>
        //         <Modal.Title>New Artist</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button variant="secondary" onClick={handleClear}>
        //             Clear
        //         </Button>
        //         <Button variant="secondary" onClick={handleClose}>
        //             Close
        //         </Button>
        //     </Modal.Footer>
        // </Modal>
    )
}

export default CreateArtistPopupForm;