import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <>
      <Header></Header>
      <Banner imageName="neto3"></Banner>
      <Container>
        <h2>Craque Neto</h2>
        <section className="cards-div">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
