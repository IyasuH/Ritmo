import artistsReducer from "./artist_/artistSlice";
import albumsReducer from "./album_/albumSlice";
import { AlbumStateType, ArtistStateType } from "../interfaces/interfaces";


// defined state type
export type StateType = {
    artists: ArtistStateType,
    albums: AlbumStateType
}

const rootReducers = {
    artists: artistsReducer,
    albums: albumsReducer
}

export default rootReducers;