import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { getAllArtistsAction } from "../redux/artist_/artistSlice";
import React from 'react';

// components
import { artist_type, def_artist } from "../interfaces/interfaces";

// custom CSS
import './artistCard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../redux/root-reducer';

const ArtistCard  = () => {
    // Artists card container
    // it should the following values
        // Artist name
        // Artsit image
        // number of songs the artist has
        // link to the artist page
    // const [artists, getArtists] = useState<artist_type[]>([def_artist]);
    // useEffect(() => {
    //     fetch('/api/listArtists')
    //     .then(data => data.json())
    //     .then(result => getArtists(result))
    // }, []);

    const payload_ = useSelector((state: StateType)=>state.artists);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArtistsAction());
    },[]);
    var artists = payload_.artist_list.data;
    console.log("[INFO] artist list payload: ", JSON.stringify(payload_.artist_list.data))
    if (artists === null) {
        return <>None</>
    }
    const artistCard_ = artists.map(artist => (
        <div className="col-md-3">
            <Card key={artist._id} style={{ width: '18rem' }} className="indigenous_style artist_card">
                <Link to={`/artist/${artist._id}`}>
                    <div className="text-center indigenous_style artist_image">
                        <Card.Img variant="top" src={artist.img_url} style={{ height: '100%', width: 'auto' }} />
                    </div>
                </Link>
                <Card.Footer>
                    <div className="indigenous_style artist_compt">
                        <div className="indigenous_style artist_summ">
                            <Card.Text>
                                <strong>{artist.full_name}</strong>
                            </Card.Text>
                            <Card.Text>Albums: {artist.single.length}</Card.Text>
                            <Card.Text>Single songs: {artist.albums.length}</Card.Text>
                            <Card.Text>
                                50 songs
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
        <>{artistCard_}</>
    )    
}

export default ArtistCard;
