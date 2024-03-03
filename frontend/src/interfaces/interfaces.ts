export interface song_type {
    _id: string,
    title: string,
    duration: Number,
    file_url: string,
    genre: string,
    release_date: Date,
    created_at: Date,
    updated_at: Date,
}

export interface single_form_type {
    title: string,
    duration: Number,
    file_url: string,
    genre: string,
    release_date: Date,
    created_at: Date,
    updated_at: Date,
}
export interface song_form_type {
    title: string,
    duration: Number,
    file_url: string,
    genre: string,
    release_date: Date,
    created_at: Date,
    updated_at: Date,
}

export interface single_type {
    _id: string,
    title: string,
    duration: Number,
    file_url: string,
    genre: string,
    release_date: Date,
    created_at: Date,
    updated_at: Date,
}

export interface album_form_type {
    title: string,
    cover_img_url: string,
    release_date: Date,
    // songs: Array<song_type>,
    created_at: Date,
    updated_at: Date,
}

export interface album_type {
    _id: string,
    title: string,
    cover_img_url: string,
    release_date: Date,
    songs: Array<song_type>,
    created_at: Date,
    updated_at: Date,
}

export interface artist_form_type {
    full_name: string,
    bio: string,
    dob: Date,
    gender: string,
    img_url: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface artist_type  {
    _id: string,
    full_name: string,
    bio: string,
    dob: Date,
    gender: string,
    img_url: string,
    albums: Array<album_type>,
    single: Array<single_type>,
    createdAt: Date,
    updatedAt: Date,
}

export interface total_number_Songs_type {
    single_songs: number,
    albums_songs: number,
    total: number,
}

export interface total_number_artist_type {
    artists_number: number,
}

export interface total_number_album_type {
    album_number: number,
}

export interface total_number_genre_type {
    [genreName: string]: number
}

export interface artist_number_Songs_type {
    single_songs: number,
    albums_songs: number,
    total: number,
}

export interface artist_album_number_type {
    totalAlbums: number,
}

export interface album_songs_number {
    songCount: number,
}

export type albumSongsNumberR = {
    data: album_songs_number | null;
    isLoading: boolean;
    errors: string;

}

export type artistAlbumNumberR = {
    data: artist_album_number_type | null;
    isLoading: boolean;
    errors: string;
}

export type artistNumberSongsR = {
    data: artist_number_Songs_type | null;
    isLoading: boolean;
    errors: string;
}

export type totalNumberSongsR = {
    data: total_number_Songs_type | null;
    isLoading: boolean;
    errors: string;
}

export type totalNumberArtistR = {
    data: total_number_artist_type | null;
    isLoading: boolean;
    errors: string;
}

export type totalNumberAlbumR = {
    data: total_number_album_type | null;
    isLoading: boolean;
    errors: string;
}

export type totalNumberGenresR = {
    data: total_number_genre_type | {};
    isLoading: boolean;
    errors: string;
}

export type IArtistState = {
    data: artist_type | null;
    isLoading: boolean;
    errors: string;
}

export type CArtistState = {
    data: artist_form_type | null;
    isLoading: boolean;
    errors: string;
}

export type LArtistState = {
    data: [artist_type] | null;
    isLoading: boolean;
    errors: string;    
}

export type IAlbumtState = {
    data: album_type | null;
    isLoading: boolean;
    errors: string;
}

export type CAlbumtState = {
    data: album_form_type | null;
    isLoading: boolean;
    errors: string;
}

export type ISongState = {
    data: song_type | null;
    isLoading: boolean;
    errors: string;
}

export type CSongState = {
    data: song_form_type | null;
    isLoading: boolean;
    errors: string;
}

export type ISingleState = {
    data: single_form_type | null;
    isLoading: boolean;
    errors: string;
}

export type CsingleState = {
    data: single_form_type | null;
    isLoading: boolean;
    errors: string;
}
// I don't need this, since album listing is done when requesting detail for artist
// export type LAlbumState = { 
//     data: [album_type] | null;
//     isLoading: boolean;
//     errors: string;    
// }


export type ArtistStateType = {
    artist: IArtistState, // this is to get by ID
    artist_create: CArtistState, // this is to create artist
    artist_list: LArtistState, // to list
    artist_update: IArtistState, // to update
    artist_delete: IArtistState // to delete
}

export type AlbumStateType = {
    album: IAlbumtState, // to get album detail by ID
    album_create: CAlbumtState, // create album 
    album_delete: IAlbumtState, // to delete
    album_update: IAlbumtState // to update
}

export type SongStateType = {
    song: ISongState, 
    song_create: CSongState,
    song_delete: ISongState,
    song_update: ISongState
}

export type SingleStateType = {
    single: ISingleState, 
    single_create: CsingleState,
    single_delete: ISingleState,
    single_update: ISingleState
}

export type BasicStasticsStateType = {
    totalNumberOfSongs: totalNumberSongsR,
    totalNumberOfArtists: totalNumberArtistR,
    totalNumberOfAlbums: totalNumberAlbumR,
    totalNumberOfGenres: totalNumberGenresR,
}

export type ArtistStasticsStateType = {
    artistsNumberOfSongs: artistNumberSongsR,
    artistsNumberOfAlbums: artistAlbumNumberR,
}

export type AlbumStasticsStateType = {
    albumsNumberOfSongs: albumSongsNumberR
}

const def_single: single_type = {
    _id: "",
    title: "",
    duration: 0.0,
    file_url: "",
    genre: "",
    release_date: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
}

const def_song: song_type = {
    _id: "",
    title: "",
    duration: 0.0,
    file_url: "",
    genre: "",
    release_date: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
}

export const def_album: album_type = {
    _id: "",
    title: "",
    cover_img_url: "",
    release_date: new Date(),
    songs: [def_song],
    created_at: new Date(),
    updated_at: new Date(),

}

export const def_artist: artist_type = {
    _id: "",
    full_name: "",
    bio: "",
    dob: new Date(),
    gender: "",
    img_url: "",
    albums: [def_album],
    single: [def_single],
    createdAt: new Date(),
    updatedAt: new Date(),

}
