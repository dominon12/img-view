import React from "react";

import "./Home.scss";
import PhotosGrid from "../components/PhotosGrid";
import AlbumIdSelector from "../components/AlbumIdSelector";

const Home: React.FC = () => {
  return (
    <main className="home-page">
      <AlbumIdSelector />
      <PhotosGrid />
    </main>
  );
};

export default Home;
