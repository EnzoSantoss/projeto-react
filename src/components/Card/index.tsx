import "./Card.Modules.scss";
export default function Card({ videoURL, imgURL }) {
  return (
    <section className="card-div">
      <a href={`${videoURL}`} rel="noreferrer noopener" target="_blank">
        <img src={`${imgURL}`} alt="craque neto nervoso com neymar" />
      </a>
    </section>
  );
}
