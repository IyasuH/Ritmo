# Ritmo

## Project Overview

Ritmo is a full-stack web application developed using MERN (MongoDB, ExpressJS, ReactTS
and NodeJS) stack. Ritmo is a music sharing platform, which aims to provide a centralized
platform for users to create, read, update and delete data about artists, albums, album
songs, and single songs. In addition the platform offers comprehensive statistics about the
platform itself, specific artists, albums and songs.

## Key features and functionalities 

- Artist and Music Management
- Platform and Artist Statistics
- Artist Information Display
- Album and Song Information Display

## Table of contents

 1. [Prerequisites](#prerequisites)
 2. [Instalation And Setup](#installation-and-setup)
 3. [Tech Stack](#tech-stacks)
 4. [API Endpoints](#api-endpoints)

### Prerequisites
  - Mongo Atlas DB
  - Node

### Installation And Setup
1. **Clone this repo**
2. Configure MongoDB
  ```
  - Go to [Mongodb] - https://www.mongodb.com/cloud/atlas/register
  - Then create account/ or Login in
  - And create new cluster
  - And copy your MONGO_URI
  ```
3. Configure .env file
  ```define PORT and MOGO_URI ```
4. Got to the **backend** directory and run **npm install**
  ```
  to install packages for for the backend
  ```
6. Go to the **frontend** directory and run **npm install**
  ```
  to insatll packages for for the frontend
  ```
8. Run **npm start**

### Tech Stacks

#### Backend
 - MongoDB
 - Mongoose
 - ExpressJs
 - NodeJs
 - Jest
 - Docker

#### Frontend
- Typescript
- React
- React-router-dom
- Redux tool kit
- Redux Saga
- Axios
- Styled-Components
- Styled-system

### API Endpoints

#### Artist
- GET /api/listArtists/ - to get list of artist
- POST /api/newArtist/ - to create new new artist
- GET /api/getArtist/:id/ - to get single artist using ID
- DELETE /api/deleteArtist/:id/ - to delete single artist using ID
- PUT /api/updateArtist/:id/ - to update artist using its ID

#### Album
- POST /api/newAlbum/:artist_id - to create new album
- GET /api/getAlbum/:id - to get an album using its ID
- DELETE /api/deleteAlbum/:id - to delete album using its ID
- PUT /api/updateAlbum/:id - to update album using ID

#### Album Song & Single Song
- POST /api/newSong/artist/:artist_id/album/:album_id - to create new album song
- GET /api/getSong/artist/:artist_id/album/:album_id/songs/:song_id - to return song
data using artist, album & song ID
- PUT /api/updateSong/album/:album_id/songs/:song_id - to update Album song data
by using album_id and song_id
- DELETE /api/deleteSong/album/:album_id/songs/:song_id - to delete song data usin

#### Statistics & Filters
- GET /api/NoSongAlubm/artist/:artist_id/album/:album_id - Number of songs for
album
- GET /api/NoSongArtist/:artist_id - Number of songs for specific artist
- GET /api/NoAlbumArtist/:artist_id - Albums number of albums
- GET /api/totalNumberOfSongs - Total number of songs on platform
- GET /api/totalNumberOfSongs - Total number of songs on platform
- GET /api/totalNumberOfArtists - Total number artist on platform
- GET /api/totalNumberOfAlbums - Total number of albums on platform
- GET /api/numberSongsGenres - Number of songs in Genres
- GET /api/songs/filter - to get filter by genre and year

### Links
- [BackendAPI](https://ritmo-backend.onrender.com)
- [Website](https://ritmo-one.vercel.app/)
