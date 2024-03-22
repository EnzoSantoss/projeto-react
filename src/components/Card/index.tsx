import { Link } from "react-router-dom";
import "./Card.Modules.scss";
export default function Card({ id, imgURL }) {
  return (
    <section className="card-div">
      <Link to={`/watch/${id}`}>
        <img src={`${imgURL}`} alt="craque neto nervoso com neymar" />
      </Link>
    </section>
  );
}
