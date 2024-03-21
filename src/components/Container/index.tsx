import "./Container.modules.scss";

export default function Container({ children }) {
  return (
    <>
      <section className={"container-div"}>{children}</section>
    </>
  );
}
