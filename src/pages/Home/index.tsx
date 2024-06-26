import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import info from "../../json/videos.json";
import info2 from "../../json/category.videos.json";
import Category from "../../components/Category";
import { useState } from "react";

function Home() {
  //let nome = "MEU NOME";

  // function pegarNome(event: any) {
  //   setNome(event.target.value);
  // }

  // const [nome, setNome] = useState("ENZOLA");
  return (
    <>
      <Header></Header>
      <Banner imageName="neto3"></Banner>
      <Container>
        {/* <input type="text" placeholder="nome" onChange={pegarNome} />
        <h2> {nome}</h2> */}
        <Category category="Craque Neto">
          {info.map((video) => {
            return (
              <Card id={video.id} imgURL={video.imgURL} key={video.imgURL} />
            );
          })}
        </Category>
        <Category category="Teste">
          {info2.map((vid) => {
            return <Card id={vid.id} imgURL={vid.imgURL} key={vid.id} />;
          })}
        </Category>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Home;
