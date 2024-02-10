const mongoose = require('mongoose')

const {ArtistModel} = require('../models/SongModel');

const numberAlbumArtist = async (req, res) => {
    const artist_id = req.params.artist_id;
    try {
        // 
        const result = await ArtistModel.aggregate([
            {$match: {_id: new mongoose.Types.ObjectId(artist_id)}},
            {$project: {totalAlbums: { $size: '$albums' }}}
        ]).exec();
        console.log("[INFO]: result", result)
        if (result && result.length > 0 &&result[0].totalAlbums !== undefined){
            const totalAlbums  = result[0].totalAlbums;
            console.log(totalAlbums);
            console.log("[INFO] totalAlbums", totalAlbums);
            res.status(200).json({totalAlbums});
        } else {
            console.log("[INFO] result ",result);
            console.log('unable to retrive song count.');
            res.status(404).json({"Error": "error"});    
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({"Error": err});
    }
};

const numberSongsArtist = async (req, res) => {
    // number of songs for an artist
    const artist_id = req.params.artist_id;
    try{
        const result = await ArtistModel.aggregate([
            {$match: {_id: new mongoose.Types.ObjectId(artist_id)}},
            {$project: {
                totalSongs: {
                    $add: [
                        { $size: '$albums.songs' },
                        { $size: '$single'}
                    ]
                }
            }}
        ]).exec();
        console.log("[INFO] result", result)
        if (result && result.length > 0 &&result[0].totalSongs !== undefined){
            const totalSongs  = result[0].totalSongs;
            console.log(totalSongs);
            console.log("[INFO] totalSongs", totalSongs);
            res.status(200).json({totalSongs});
        } else {
            console.log("[INFO] result ",result);
            console.log('unable to retrive song count.');
            res.status(404).json({"Error": "error"});    
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({"Error": err});
    }
}

const numberSongsInAlbum = async (req, res) =>{
    // number of songs in album
    const artist_id = req.params.artist_id;
    const album_id = req.params.album_id;
    try{
        const result = await ArtistModel.aggregate([
            { $match: {_id: new mongoose.Types.ObjectId(artist_id)}},
            { $unwind: '$albums' },
            { $match: {'albums._id': new mongoose.Types.ObjectId(album_id)}},
            { $project: {songCount: {$size: '$albums.songs'}}}
        ]).exec();
        
        if (result && result.length > 0 &&result[0].songCount !== undefined){
            const songCount  = result[0].songCount;
            console.log(songCount);
            console.log("[INFO] songCount", songCount);
            res.status(200).json({songCount});    
        } else {
            console.log("[INFO] result ",result);
            console.log('unable to retrive song count.');
            res.status(404).json({"Error": "error"});    
        }
    } catch (err){
        console.log(err)
        res.status(404).json({"Error": err});
    }
}

// const numberSong

module.exports = {
    numberSongsInAlbum: numberSongsInAlbum,
    numberSongsArtist: numberSongsArtist,
    numberAlbumArtist: numberAlbumArtist
}