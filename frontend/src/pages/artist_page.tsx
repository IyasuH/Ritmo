import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { IoMdMore } from 'react-icons/io';
import '../components/artistCard.css'
import { BsThreeDotsVertical } from 'react-icons/bs';

// custom CSS
import './home.css'

import { album_type, song_type } from '../interfaces/interfaces';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getArtistAction } from '../redux/artist_/artistSlice';
import { StateType } from '../redux/root-reducer';
import SideBarArtist from '../components/sideBarArtist';
import CreateAlbumPopupForm from '../components/newAlbumPopupForm';
import CreateSinglePopupForm from '../components/newSinglePopupForm';

export default function ArtistPage(){
    type ParamsType = {
        artistId?: string;
    }
    // here i used useSelector to reacd data from the Reduz store when there is change to store it will compare values and re-renders
    const payload_ = useSelector((state: StateType) => state.artists);

    const { artistId }: ParamsType = useParams();
    // useDispatch is used to triger and changes to the store 
    const dispatch  = useDispatch();
    useEffect(() => {
        dispatch(getArtistAction( artistId as string)); // here i am considering artistId will not be undefined or other types 
    }, [artistId]);

    const albums_: album_type[]  = payload_.artist.data?.albums as unknown as album_type[] || [];
    const singles = payload_.artist.data?.single;
    const albumCard_ = albums_?.map(albm => (
        <div className="col-md-3">
            <Card key={albm._id} style={{ width: '18rem' }} className="indigenous_style artist_card">
                <Link to={`/album/${albm._id}`}>
                    <div className="text-center">
                        <Card.Img variant="top" src={albm.cover_img_url} style={{ height: '100%', width: 'auto' }} />
                    </div>
                </Link>
                <Card.Footer>
                    <div className="indigenous_style artist_compt">
                        <div className="indigenous_style artist_summ">
                            <Card.Text>
                                <strong>{albm.title}</strong>
                            </Card.Text>
                            <Card.Text>
                                {/* {typeof albm.songs} */}
                                {(albm.songs as Array<song_type>).length}
                            </Card.Text>
                        </div>
                        <Button variant="primary">
                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    ))
    const single_card = singles?.map(single => (
        <Card>
            <Card.Body>
            {/* <Card.Text>{single.title}</Card.Text> */}
                <Card.Text>{single.title}  {single.genre}  {single.duration.toString()}</Card.Text>
            </Card.Body>
        </Card>
    ))
    const [showNewAlbumPopup, setShowNewAlbumPopup] = useState(false);

    const [showNewSinglePopup, setShowNewSinglePopup] = useState(false);

    const handleShowNewSinglePopup = () => setShowNewSinglePopup(true);
    const handleCloseNewSinglePopup = () => setShowNewSinglePopup(false);


    const handleShowNewAlbumPopup = () => setShowNewAlbumPopup(true);
    const handleCloseNewAlbumPopup = () => setShowNewAlbumPopup(false);

    const about_artist_card = (
        <Card className="bg-dark text-white ">
            {/* {JSON.stringify(payload_.artist.data?.img_url)} */}
            {/* <Card.Img src={payload_.artist.data?.img_url || "https://imgur.com/RDxhZsI.png"} alt="Card image" /> */}
            {/* have to set max_width, and height */}
            <Card.Img src={"https://imgur.com/RDxhZsI.png"} alt="Card image" /> 
            <Card.ImgOverlay className='indigenous_style artist_card_overlay'>
                <div className="indigenous_style artist_card_top">
                    <div></div>
                    {/* <Button variant="outline-light"> */}
                        {/* <BsThreeDotsVertical /> */}
                        <Dropdown >
                            <Dropdown.Toggle className="indigenous_style artist_card_icon_btn">
                                
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {}}>Update</Dropdown.Item>
                                <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
                                <Dropdown.Item onClick={handleShowNewAlbumPopup}>New Album</Dropdown.Item>
                                <CreateAlbumPopupForm show={showNewAlbumPopup} handleClose={handleCloseNewAlbumPopup} />
                                <Dropdown.Item onClick={handleShowNewSinglePopup}>New Singles</Dropdown.Item>
                                <CreateSinglePopupForm show={showNewSinglePopup} handleClose={handleCloseNewSinglePopup}/>
                            </Dropdown.Menu>
                        </Dropdown>
                    {/* </Button> */}
                </div>
                <div className="indigenous_style artist_card_bottom">
                    <Card.Title>{payload_.artist.data?.full_name}</Card.Title>
                    <Card.Text>
                        {payload_.artist.data?.bio}
                    </Card.Text>
                    {/* converting Date to string was being error */}
                    {/* <Card.Text>{payload_.artist.data?.dob.toDateString()}</Card.Text> */}
                </div>
            </Card.ImgOverlay>
        </Card>
      )

    return (
        <>
            <div className="indigenous_style home_parent">
                <div className="indigenous_style side_main">
                    <SideBarArtist/>
                </div>
                <div className="indigenous_style main_child">
                    <div className="container row indigenous_style albums">
                        {about_artist_card}
                    </div>
                    <div className="indigenous_style albums">
                        Albums
                        {albumCard_}
                    </div>
                    <div className="indigenous_style singles">
                        Singles
                        {single_card}
                    </div>
                </div>
            </div>
        </>
    )
}