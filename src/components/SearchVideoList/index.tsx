import "./SeachVideoList.modules.scss";

import video1 from "../../json/category.videos.json";
import video2 from "../../json/videos.json";
import Card from "../Card";
import { useState } from "react";

export default function SearchVideoList() {
  const [videoName, setVideoName] = useState();

  const allVideos = [...video1, ...video2];

  const filterVideos = allVideos.filter((v) => v.videoName.includes(videoName));

  if (filterVideos.length == 0) {
    return (
      <section className="s-vdieos-div">
        <input
          type="search"
          placeholder="Peaquisar video"
          onChange={(e) => setVideoName(e.target.value)}
        />

        <div className="videos-div">
          {allVideos.map((video) => (
            <Card id={video.id} imgURL={video.imgURL} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="s-vdieos-div">
        <input
          type="search"
          placeholder="Peaquisar video"
          onChange={(e) => setVideoName(e.target.value)}
        />

        <div className="videos-div">
          {filterVideos.map((video) => (
            <Card id={video.id} imgURL={video.imgURL} />
          ))}
        </div>
      </section>
    );
  }
}
