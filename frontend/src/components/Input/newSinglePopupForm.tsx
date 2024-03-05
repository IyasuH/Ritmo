import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { single_form_type } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { createSingleAction } from "../../redux/single_/singleSlice";
import { CustomInput } from "./input.style";
interface PopupformProps {
    show: boolean;
    handleClose: () => void
    artistId: string;
}

function CreateSinglePopupForm({ show, handleClose, artistId}: PopupformProps){

    const [formData, setFormData] = useState<single_form_type>({
        title: '',
        duration: 0,
        file_url: '',
        genre: '',
        release_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
    })

    // this is for selecting Genre
    const [selectedGenre, setSelectedGenre] = useState('Hip hop');

    const dispatch = useDispatch();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // console.log("[INFO]: ", formData)
        // console.log(selectedGenre);
        dispatch(createSingleAction([formData, artistId]))
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

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
        const { name, value } = e.target as HTMLInputElement|HTMLTextAreaElement| HTMLSelectElement;
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
        }
        else{
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

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Single</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    <label>Duration(in sec)</label>
                    <CustomInput
                        type="number"
                        placeholder="Duration"
                        name="duration"
                        required={true}
                        value={formData.duration.toString()}
                        onChange={handleFormChange}/>
                    <br/>
                    <label>File URL</label>
                    <CustomInput
                        type="text"
                        placeholder="File URL"
                        name="file_url"
                        required={true}
                        value={formData.file_url}
                        onChange={handleFormChange}/>
                    <br/>
                    <label>Genre</label>
                    <Form.Select value={selectedGenre} onChange={handleFormChange} required={true} name="genre">
                        {/* this list should be based on some reference on */}
                        <option value="Hip hop">Hip hop</option>
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Metal">Metal</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Afro">Afro</option>
                        <option value="Indie">Indie</option>
                        <option value="Country">Country</option>
                    </Form.Select>
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

export default CreateSinglePopupForm;