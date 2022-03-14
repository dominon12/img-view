import React from "react";

import "./Home.scss";
import AlbumIdSelector from "../components/AlbumIdSelector";
import PhotosGridWithPagination from "../components/PhotosGridWithPagination";

const Home: React.FC = () => {
  return (
    <main className="home-page">
      <AlbumIdSelector />
      <PhotosGridWithPagination />
    </main>
  );
};

export default Home;
