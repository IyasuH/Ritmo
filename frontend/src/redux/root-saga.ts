import { all, fork } from "redux-saga/effects";
import { watchGetArtist, watchCreateArtist, watchListArtists, watchUpdateArtist, watchDeleteArtist } from "./artist_/artistSaga";
import { watchCreateAlbum, watchDeleteAlbum, watchUpdateAlbum, watchGetAlbum } from "./album_/albumSaga";
import { watchCreateSong, watchDeleteSong, watchUpdateSong } from "./song_/songSaga";
import { watchCreateSingle, watchUpdateSingle, watchDeleteSingle } from "./single_/singleSaga";

// here I tried to create and manage multiple concurrent Sagas

const rootSaga = function* () {
    // [?] all function is used to run multiple sagas in parallel[i don't think i need that
    yield all([
        // [i] fork is used to create a new child Saga
        fork(watchGetArtist),
        fork(watchCreateArtist),
        fork(watchListArtists),
        fork(watchUpdateArtist),
        fork(watchDeleteArtist),
        // 
        fork(watchCreateAlbum),
        fork(watchDeleteAlbum),
        fork(watchUpdateAlbum),
        fork(watchGetAlbum),
        // 
        fork(watchCreateSong),
        fork(watchDeleteSong),
        fork(watchUpdateSong),
        // 
        fork(watchCreateSingle),
        fork(watchUpdateSingle),
        fork(watchDeleteSingle),
    ]);
};

export default rootSaga;