import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import "./Watch.modules.scss";
import { useParams } from "react-router-dom";

import videos1 from "../../json/videos.json";
import video2 from "../../json/category.videos.json";
export default function Watch() {
  const params = useParams();

  const video = [...videos1, ...video2].find((v) => v.id == params.id);

  return (
    <>
      <Header></Header>
      <Container>
        <div className="whatch-container-div">
          <h2>Assistir</h2>
          <div className="whatch-container-children">
            <iframe
              width="560"
              height="315"
              src={`${video?.videoURL}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}
