import Button from "../UI/Button";

function Region() {
  return <div>region</div>;
}
function Span() {
  return <div>span</div>;
}
function Count() {
  return <div>count</div>;
}

function FilterOptions() {
  return (
    <div className="absolute z-10 bg-white border border-main mt-2 p-5 rounded-xl w-158.5 shadow-md flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        {/* {data.map((el) => (
          <FilterCard data={el} key={el.id} type={type} />
        ))} */}
      </div>
      <div className="flex justify-end">
        <div className="flex justify-end gap-3">
          <Button
            onClick={() => {
              //   dispatch({ type: "select" });
              //   setOpen("");
            }}
          >
            არჩევა
          </Button>
        </div>
      </div>
    </div>
  );
}
FilterOptions.Region = Region;
FilterOptions.Span = Span;
FilterOptions.Count = Count;

export default FilterOptions;
