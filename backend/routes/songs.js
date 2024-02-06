const express = require('express')

const {
    ArtistModel,
    AlbumModel, 
    SongModel,
    SingleSongModel,    
} = require('../models/SongModel');

const {
    createArtist,
    listArtist,
    getArtist,
    deleteArtist,
    updateArtist,

    createAlbum,
    getAlbum,
    deleteAlbum,
    updateAlbum,

    createSong
} = require('../controllers/songController');

const router = express.Router()

router.post('/newArtist', createArtist)

router.get('/listArtists', listArtist)

router.get('/getArtist/:id', getArtist)

router.delete('/deleteArtist/:id', deleteArtist)

router.put('/updateArtist/:id', updateArtist)



router.post('/newAlbum/:artist_id', createAlbum)

router.get('/getAlbum/:id', getAlbum)

router.delete('/deleteAlbum/:id', deleteAlbum)

router.put('/updateAlbum/:id', updateAlbum)


router.post('/newSong/:artist_id/:album_id', createSong)

module.exports = router
