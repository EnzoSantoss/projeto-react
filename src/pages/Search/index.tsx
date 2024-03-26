import "./Search.modules.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchVideoList from "../../components/SearchVideoList";

export default function Search() {
  return (
    <>
      <Header></Header>
      <section className="search-div">
        <SearchVideoList></SearchVideoList>
      </section>

      <Footer></Footer>
    </>
  );
}
