import { Modal, Button, Form } from "react-bootstrap";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { album_type, song_type } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { updateSongAction } from "../../redux/song_/songSlice";
import { CustomInput } from "./input.style";
import { SubmitButton, CancleButton, ClearButton, XCloseButton } from "../Button/button.comp";
import { CustomPopup, PopupParent, PopupTopComp, PopupBottomComp } from "../Popup/popup.style";

interface PopupformProps {
    show: boolean;
    handleClose: () => void;
    song_u: song_type;
    albumId: string;
}

function SongCardMorePopupForm({ show, handleClose, song_u, albumId }: PopupformProps ){
    const [formData, setFormData] = useState<song_type>({
        _id: song_u._id,
        title: song_u.title,
        duration: song_u.duration,
        file_url: song_u.file_url,
        genre: song_u.genre,
        release_date: new Date(song_u.release_date),
        created_at: song_u.created_at,
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

    const [selectedGenre, setSelectedGenre] = useState(song_u.genre);

    const dispatch = useDispatch();
    const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
        try {
            dispatch(updateSongAction([formData, albumId]));
        } catch (error) {
            // 
        }
        e.preventDefault();
        setFormData({
            _id: song_u._id,
            title: song_u.title,
            duration: song_u.duration,
            file_url: song_u.file_url,
            genre: song_u.genre,
            release_date: new Date(song_u.release_date),
            created_at: song_u.created_at,
            updated_at: song_u.updated_at,
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
                        <h3>Update Single</h3>
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
                                    value={formData.file_url}
                                    onChange={handleFormChange}/>
                            </div>
                            <div>
                                <label>Genre</label>
                                <br />
                                <select value={selectedGenre} onChange={handleFormChange} name="genre">
                                    {/* this list should be based on some reference on */}
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

export default SongCardMorePopupForm;
