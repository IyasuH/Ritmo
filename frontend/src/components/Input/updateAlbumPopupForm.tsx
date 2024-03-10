import { ChangeEvent, FormEvent, useState } from "react";
import { album_type,  } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { updateAlbumAction } from "../../redux/album_/albumSlice";
import { CustomInput } from "./input.style";
import { SubmitButton, CancleButton, ClearButton, XCloseButton } from "../Button/button.comp";
import { CustomPopup, PopupParent, PopupTopComp, PopupBottomComp } from "../Popup/popup.style";

interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    album_u: album_type;
}

function AlbumCardMorePopupForm({ show, handleClose, album_u }: PopupformProps ){
    const [formData, setFormData] = useState<album_type>({
        _id: album_u._id,
        title: album_u.title,
        cover_img_url: album_u.cover_img_url,
        release_date: new Date(album_u.release_date),
        songs: album_u.songs,
        created_at: album_u.created_at,
        updated_at: new Date(),
    })
    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const { name, value } = e.target as HTMLInputElement|HTMLTextAreaElement;
        if (name==='release_date'){
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
        try {
            dispatch(updateAlbumAction(formData));
        } catch (error) {
            // 
        }
        e.preventDefault();
        setFormData({
            _id: album_u._id,
            title: album_u.title,
            cover_img_url: album_u.cover_img_url,
            release_date: new Date(album_u.release_date),
            songs: album_u.songs,
            created_at: album_u.created_at,
            updated_at: album_u.updated_at,
        });
        handleClose();
    }

    if (!show) {
        return null;
    }

    return(
        <PopupParent>
            <CustomPopup
             variant="newItem"
             bg={"#fff"}
             color={"#000000"}
            >
                <div>
                    <PopupTopComp>
                        <h3>Update Album</h3>
                        <XCloseButton onClick={handleClose} />
                    </PopupTopComp>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Album Title</label>
                                <br />
                                <CustomInput
                                    type="text"
                                    placeholder="Album Title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleFormChange}/>
                            </div>
                            <div>
                                <label>Album Cover Img URL</label>
                                <br />
                                <CustomInput
                                    type="text"
                                    placeholder="Album Cover Img URL"
                                    name="cover_img_url"
                                    value={formData.cover_img_url}
                                    onChange={handleFormChange}/>
                            </div>
                            <div>
                                <label>Album Release Date</label>
                                <br />
                                <CustomInput 
                                    type="date"
                                    placeholder="Album Release Date"
                                    name="release_date"
                                    value={formData.release_date instanceof Date ? formData.release_date.toISOString().substr(0,10) : ''}
                                    onChange={handleFormChange}/>
                            </div>
                            <SubmitButton />
                        </form>

                    <PopupBottomComp>
                        <CancleButton onClick={handleClose} />
                    </PopupBottomComp>
                </div>
            </CustomPopup>
        </PopupParent>
    )
}

export default AlbumCardMorePopupForm;