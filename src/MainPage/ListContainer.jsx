import Card from "./Card";

function ListContainer() {
  return (
    <div className="w-full grid my-10 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ListContainer;
