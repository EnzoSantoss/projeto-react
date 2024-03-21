import "./Banner.modules.scss";

export default function Banner({ imageName }) {
  return (
    <div
      className={"banner-div"}
      style={{ backgroundImage: `url('/public/images/${imageName}.jpg')` }}
    ></div>
  );
}
