import React, { ChangeEvent, FormEvent, useState } from "react";
import { album_form_type } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { createAlbumAction } from "../../redux/album_/albumSlice";
import { CustomInput } from "./input.style";
import { SubmitButton, CancleButton, ClearButton, XCloseButton } from "../Button/button.comp";
import { CustomPopup, PopupParent, PopupTopComp, PopupBottomComp } from "../Popup/popup.style";
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
            setFormData((formData)=>({
                ...formData,
                [name]: dateValue
            }));
        } else{
            // 
            setFormData((formData)=>({
                ...formData, 
                [name]: value,
            }));
        }
    }
    const handleClear = () => {
        setFormData({
            title: '',
            cover_img_url: '',
            release_date: new Date(),
            created_at: new Date(),
            updated_at: new Date(),    
        });
    }

    console.log("[INFO] show ", show);
    if (!show) {
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
                        <h3>New Album</h3>
                        <XCloseButton onClick={handleClose} />
                    </PopupTopComp>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <br/>
                            <CustomInput
                                type="text"
                                placeholder="Title"
                                name="title"
                                required={true}
                                value={formData.title}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div>
                            <label>Cover Img URL</label>
                            <br/>
                            <CustomInput
                                type="text"
                                placeholder="Cover Img URL"
                                name="cover_img_url"
                                required={true}
                                value={formData.cover_img_url}
                                onChange={handleFormChange}
                                // m={2}
                            />
                        </div>
                        <div>
                            <label>Release Date</label>
                            <br/>
                            <CustomInput
                                type="date"
                                placeholder="Release Date"
                                name="release_date"
                                required={true}
                                value={formData.release_date.toISOString().substr(0,10)}
                                onChange={handleFormChange}
                                // m={2}
                            />
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
    )
}

export default CreateAlbumPopupForm;