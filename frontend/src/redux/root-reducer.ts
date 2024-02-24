import artistReducer from "./artist_/artistSlice";
import artistsReducer from "./artist_/artistSlice";
import { ArtistStateType, IArtistState } from "../interfaces/interfaces";


// defined state type
export type StateType = {
    artists: ArtistStateType 
}

const rootReducers = {
    artists: artistsReducer
}

export default rootReducers;