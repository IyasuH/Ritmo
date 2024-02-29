import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
 } from 'react-router-dom';

// pages
import HomePage from './pages/home_page';
import ArtistPage from './pages/artist_page';
import AlbumPage from './pages/album_page';

// components
import NavLayout from './components/navbar';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<NavLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route
      path="/artist/:artistId"
      element={<ArtistPage/>}
    />
    <Route
      path="/album/:artistId/:albumId"
      element={<AlbumPage/>}
    />
  </Route>
))
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
