import artistsReducer from "./artist_/artistSlice";
import albumsReducer from "./album_/albumSlice";
import songsReducer from "./song_/songSlice";
import singleReducer from "./single_/singleSlice";
import stasticsSlice from "./stastics_/stasticSlice";

import { AlbumStateType, ArtistStateType, SongStateType, BasicStasticsStateType } from "../interfaces/interfaces";


// defined state type
export type StateType = {
    artists: ArtistStateType,
    albums: AlbumStateType,
    songs: SongStateType,
    stastics: BasicStasticsStateType,
}

const rootReducers = {
    artists: artistsReducer,
    albums: albumsReducer,
    songs: songsReducer,
    singles: singleReducer,
    stastics: stasticsSlice,
}

export default rootReducers;