import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import '../components/artistCard.css'

// custom CSS
import './home.css'

import { album_type, def_album, song_type } from '../interfaces/interfaces';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getArtistAction } from '../redux/artist_/artistSlice';
import { StateType } from '../redux/root-reducer';
import SideBarArtist from '../components/sideBarArtist';

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

    return (
        <>
            <div className="indigenous_style home_parent">
                <div className="container indigenous_style side_child">
                    <SideBarArtist/>
                </div>
                <div className="container row indigenous_style main_child">
                    {albumCard_}
                </div>
            </div>
        </>
    )
}