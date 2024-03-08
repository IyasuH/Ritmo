import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { single_form_type } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { createSongAction } from "../../redux/song_/songSlice";
import { CustomInput } from "./input.style";
import { SubmitButton, CancleButton, ClearButton, XCloseButton } from "../Button/button.comp";
import { CustomPopup, PopupParent, PopupTopComp, PopupBottomComp } from "../Popup/popup.style";


interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    artistId: string;
    albumId: string;
}

function CreateSongPopupForm({ show, handleClose, artistId, albumId }: PopupformProps){
    
    const [formData, setFormData] = useState<single_form_type>({
        title: '',
        duration: 0,
        file_url: '',
        genre: '',
        release_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
    })
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // createSongAction
        dispatch(createSongAction([formData, artistId, albumId]));
        e.preventDefault();
        setFormData({
            title: '',
            duration: 0,
            file_url: '',
            genre: '',
            release_date: new Date(),
            created_at: new Date(),
            updated_at: new Date(),    
        });
        handleClose();
    }

    const [selectedGenre, setSelectedGenre] = useState('Hip hop');

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
        const { name, value } = e.target as HTMLInputElement|HTMLTextAreaElement | HTMLSelectElement;
        if (name==='release_date'){
            // 
            const dateValue = new Date(value);
            setFormData({
                ...formData, [name]: dateValue
            });
        } else if (name==='genre'){
            setSelectedGenre(value);
            setFormData({
                ...formData, [name]: value
            })
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
            duration: 0,
            file_url: '',
            genre: '',
            release_date: new Date(),
            created_at: new Date(),
            updated_at: new Date(),    
        });
    }
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
                        <h3>New Song</h3>
                        <XCloseButton onClick={handleClose} />
                    </PopupTopComp>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <br />
                            <CustomInput
                                type="text"
                                placeholder="Title"
                                name="title"
                                required={true}
                                value={formData.title}
                                onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>Duration(in sec)</label>
                            <br />
                            <CustomInput
                                type="number"
                                placeholder="Duration"
                                name="duration"
                                required={true}
                                value={formData.duration.toString()}
                                onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>File URL</label>
                            <br />
                            <CustomInput
                                type="text"
                                placeholder="File URL"
                                name="file_url"
                                required={true}
                                value={formData.file_url}
                                onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>Genre</label>
                            <br />
                            <select value={selectedGenre} onChange={handleFormChange} required={true} name="genre">
                                <option value="Hip hop">Hip hop</option>
                                <option value="Rock">Rock</option>
                                <option value="Pop">Pop</option>
                                <option value="Metal">Metal</option>
                                <option value="Jazz">Jazz</option>
                                <option value="Afro">Afro</option>
                                <option value="Indie">Indie</option>
                                <option value="Country">Country</option>
                            </select>
                        </div>
                        <div>
                            <label>Release Date</label>
                            <br />
                            <CustomInput 
                                type="date"
                                placeholder="Release Date"
                                name="release_date"
                                required={true}
                                value={formData.release_date.toISOString().substr(0,10)}
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

    )
}

export default CreateSongPopupForm;