import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { album_form_type } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { createAlbumAction } from "../../redux/album_/albumSlice";
import { CustomInput } from "./input.style";
interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    artistId: string
}

function CreateAlbumPopupForm({ show, handleClose, artistId}: PopupformProps){

    const [formData, setFormData] = useState<album_form_type>({
        title: '',
        cover_img_url: '',
        release_date: new Date(),
        // songs: Array<song_type>,
        created_at: new Date(),
        updated_at: new Date(),
        })
        
    const dispatch = useDispatch();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log("[INFO]: ", formData)
        dispatch(createAlbumAction([formData, artistId]));
        e.preventDefault();
        setFormData({
            title: '',
            cover_img_url: '',
            release_date: new Date(),
            // songs: Array<song_type>,
            created_at: new Date(),
            updated_at: new Date(),    
        });
        handleClose();
    }
    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const { name, value } = e.target as HTMLInputElement|HTMLTextAreaElement;
        if (name==='release_date'){
            // 
            const dateValue = new Date(value);
            setFormData({
                ...formData, [name]: dateValue
            });
        } else{
            // 
            setFormData({
                ...formData, [name]: value
            })
        }
    }
    const handleClear = () => {
        setFormData({
            title: '',
            cover_img_url: '',
            release_date: new Date(),
            // songs: Array<song_type>,
            created_at: new Date(),
            updated_at: new Date(),    
        });
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Artist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <form onSubmit={handleSubmit}>
                    {album_form_inputs}
                </form> */}
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <CustomInput
                        type="text"
                        placeholder="Title"
                        name="title"
                        required={true}
                        value={formData.title}
                        onChange={handleFormChange}/>
                    <br/>
                    <label>Cover Img URL</label>
                    <CustomInput
                        type="text"
                        placeholder="Cover Img URL"
                        name="cover_img_url"
                        required={true}
                        value={formData.cover_img_url}
                        onChange={handleFormChange}/>
                    <br/>
                    <label>Release Date</label>
                    <CustomInput
                        type="date"
                        placeholder="Release Date"
                        name="release_date"
                        required={true}
                        value={formData.release_date.toISOString().substr(0,10)}
                        onChange={handleFormChange}/>
                    <br/>
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
            </Modal.Footer>
        </Modal>

    )
}

export default CreateAlbumPopupForm;