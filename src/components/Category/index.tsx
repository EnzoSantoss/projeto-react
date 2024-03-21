import "./Category.modules.scss";
export default function Category({ category, children }) {
  return (
    <section className={"category-div"}>
      <h2>{category}</h2>
      <div className={"children-category-div"}>{children}</div>
    </section>
  );
}
