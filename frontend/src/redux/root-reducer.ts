import artistsReducer from "./artist_/artistSlice";
import albumsReducer from "./album_/albumSlice";
import songsReducer from "./song_/songSlice";
import singleReducer from "./single_/singleSlice";

import { AlbumStateType, ArtistStateType, SongStateType } from "../interfaces/interfaces";


// defined state type
export type StateType = {
    artists: ArtistStateType,
    albums: AlbumStateType,
    songs: SongStateType
}

const rootReducers = {
    artists: artistsReducer,
    albums: albumsReducer,
    songs: songsReducer,
    singles: singleReducer,
}

export default rootReducers;