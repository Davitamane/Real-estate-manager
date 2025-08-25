import FilterDisplay from "./FilterDisplay";

function FilterDisplayContainer() {
  return (
    <div className="flex mt-4 gap-3 items-center">
      <FilterDisplay>თბილისი</FilterDisplay>
      <FilterDisplay>1</FilterDisplay>
      <FilterDisplay>20000ლ-40000ლ</FilterDisplay>
      <FilterDisplay>გურია</FilterDisplay>
      <button
        className="flex gap-1 font-medium"
        //   onClick={() => dispatch({ type: "empty" })}
      >
        გასუფთავება
      </button>
    </div>
  );
}

export default FilterDisplayContainer;
