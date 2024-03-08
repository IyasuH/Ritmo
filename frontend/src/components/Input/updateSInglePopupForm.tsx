import { Modal, Button, Form } from "react-bootstrap";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { album_type, single_type } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { updateSingleAction } from "../../redux/single_/singleSlice";
import { CustomInput } from "./input.style";
import { SubmitButton, CancleButton, ClearButton, XCloseButton } from "../Button/button.comp";
import { CustomPopup, PopupParent, PopupTopComp, PopupBottomComp } from "../Popup/popup.style";

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

export default SingleCardMorePopupForm;
