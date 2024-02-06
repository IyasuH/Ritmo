const mongoose = require('mongoose')
const {
    ArtistModel,
    AlbumModel, 
    SongModel,
    SingleSongModel
} = require('../models/SongModel')

const createArtist = async (req, res) => {
    const {full_name, bio, dob, gender, img_url, albums, single} = req.body;
    const artist = await ArtistModel.create({full_name, bio, dob, gender, img_url, albums, single});
    console.log(full_name, bio, dob, gender, img_url, albums, single);
    if (!artist){
        console.log("[INFO]: ", artist)
        return res.status(404).json({error:"Error on creating artist"})
    }
    res.status(200).json(artist)
}

const listArtist = async (req, res) => {
    const artists = await ArtistModel.find({}).sort({createdAt: -1})
    // if (!artists){
    //     return res.status(404).json({error: "No"})
    // }
    res.status(200).json(artists)
}

const getArtist = async (req, res) => {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Invalid Id"})
    }
    const artist = await ArtistModel.findById(id)
    if (!artist){
        return res.status(404).json({error:"Error on creating artist"})
    }
    res.status(200).json(artist)
}

const deleteArtist = async (req, res) => {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Invalid Id"})
    }
    const artist = await ArtistModel.findByIdAndDelete(id)
    if (!artist){
        return res.status(404).json({error:"Error on creating artist"})
    }
    res.status(200).json(artist)
}

const updateArtist = async (req, res) => {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Invalid Id"})
    }
    const artist = await ArtistModel.findByIdAndUpdate(id, {...req.body})
    if (!artist){
        return res.status(404).json({error:"Error on creating artist"})
    }
    res.status(200).json(artist)
}


const createAlbum = async (req, res) => {
    try{
        const {title, cover_img_url, release_date} = req.body;
        const artist_id = req.params.artist_id;

        if (!mongoose.Types.ObjectId.isValid(artist_id)){
            return res.status(404).json({error:"Invalid Id"})
        }
        const artist = await ArtistModel.findOneAndUpdate(
            {_id: artist_id},
            {$push: {'artist.$.albums': {title, cover_img_url, release_date}}},
            {new: true}
        )
        if (!artist){
            return res.status(404).json({error:"Error on creating album"});
        }

        // artist.albums.push({title, cover_img_url, release_date});
        await artist.save();

        res.status(200).json(artist);
    } catch(error) {
        console.log("[ERROR]: ", error);
        res.status(500).json({error: "Internal Server Error"});
    }
};

const getAlbum = async (req, res) => {
    try{
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"Invalid Id"});
        }
        const album = await ArtistModel.findOne({'albums._id': id}, {'albums.$': 1});
    
        if (!album){
            return res.status(404).json({error:"Error on retriving Album"});
        }
        res.status(200).json(album);
    } catch(error){
        console.log("[ERROR]: ", error);
        res.status(500).json({error: "Internal Server Error"});
   }
};

const deleteAlbum = async (req, res) => {
    try{
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"Invalid Id"})
        }
        const album = await ArtistModel.findOneAndUpdate(
            // The $pull operator in MongoDB is used to remove elements from an array 
            {'albums._id': id}, // find artist with specific album id
            {$pull: {albums: { _id: id }}}, // pulling out(removing element)
            { new: true } // return the update
        );
        if (!album){
            return res.status(404).json({error:"Error on deleteing album"})
        }
        res.status(200).json(album)
    
    } catch{
        console.log("[ERROR]: ", error);
        res.status(500).json({error: "Internal Server Error"});
    }
};


const updateAlbum = async (req, res) => {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Invalid Id"})
    }
    const updateAlbumData = {
        title: req.body.title,
        cover_img_url: req.body.cover_img_url,
        release_date: req.body.release_date,
        songs: req.body.songs,
    }
    const album = await ArtistModel.findOneAndUpdate(
        {'albums._id': id},
        {$set: {
            'albums.$.title': updateAlbumData.title,
            'albums.$.cover_img_url': updateAlbumData.cover_img_url,
            'albums.$.release_date': updateAlbumData.release_date,
            'albums.$.songs': updateAlbumData.songs
        } },
        {new: true}
        )
    if (!album){
        return res.status(404).json({error:"Error on updating album"})
    }
    res.status(200).json(album)   
}

const getArtistsAlbum = async(req, res) => {
    // I don't think this will be nessary since i can get same and additional info from getArtist
}

const createSong = async (req, res) => {
    try{
        const artist_id = req.params.artist_id;
        const album_id = req.params.album_id;
        const {title, duration, file_url, release_date, genre} = req.body;

        const artist = await ArtistModel.findOneAndUpdate(
            {_id: artist_id, 'albums._id': album_id},
            {$push: {'albums.$.songs': {title, duration, file_url, release_date, genre}}},
            {new: true}
        )

        if (!artist){
            return res.status(404).json({error:"Error on creating album"});
        }
        res.status(200).json(artist);
    } catch(error) {
        console.log("[ERROR]: ", error);
        res.status(500).json({error: "Internal Server Error"});
    }
};

const getSong = async (req, res) => {}

const deleteSong = async (req, res) => {}

const updateSong = async (req, res) => {}

module.exports = {
    createArtist: createArtist,
    listArtist: listArtist,
    getArtist: getArtist,
    deleteArtist: deleteArtist,
    updateArtist: updateArtist,

    createAlbum: createAlbum,
    getAlbum: getAlbum,
    deleteAlbum: deleteAlbum,
    updateAlbum: updateAlbum,

    createSong: createSong
}