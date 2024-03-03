import artistsReducer from "./artist_/artistSlice";
import albumsReducer from "./album_/albumSlice";
import songsReducer from "./song_/songSlice";
import singleReducer from "./single_/singleSlice";
import stasticsReducer from "./stastics_/stasticSlice";
import artistStatReducer from "./artists_stastics/artistStatSlice";
import albumStatReducer from "./albums_stastics/albumStatSlice";

import { AlbumStateType, ArtistStateType, SongStateType, BasicStasticsStateType, ArtistStasticsStateType, AlbumStasticsStateType, SingleStateType } from "../interfaces/interfaces";


// defined state type
export type StateType = {
    artists: ArtistStateType,
    albums: AlbumStateType,
    songs: SongStateType,
    singles: SingleStateType,
    stastics: BasicStasticsStateType,
    artistStastics: ArtistStasticsStateType,
    albumStastics: AlbumStasticsStateType,
}

const rootReducers = {
    artists: artistsReducer,
    albums: albumsReducer,
    songs: songsReducer,
    singles: singleReducer,
    stastics: stasticsReducer,
    artistStastics: artistStatReducer,
    albumStastics: albumStatReducer,
}

export default rootReducers;