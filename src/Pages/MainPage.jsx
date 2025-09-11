import { useContext } from "react";
import Filter from "../MainPage/Filter";
import { MainPageContext } from "../contexts/MainPageContext";
import Button from "../UI/Button";
import FilterOptions from "../MainPage/FilterOptions";
import { FaPlus } from "react-icons/fa6";
import FilterDisplayContainer from "../MainPage/FilterDisplayContainer";
import { Link } from "react-router-dom";
import ListContainer from "../MainPage/ListContainer";
import { ModalContext } from "../contexts/ModalContext";

function MainPage() {
  const { open, setOpen } = useContext(MainPageContext);
  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <div className="px-20 pt-10">
      <div className="flex justify-between">
        <Filter setOpen={setOpen} open={open} />

        <div className="flex gap-4">
          <Link to="/AddListing">
            <Button>ლისტინგის დამატება</Button>
          </Link>
          <Button styleType="secondary" onClick={() => setIsModalOpen(true)}>
            <FaPlus />
            აგენტის დამატება
          </Button>
        </div>
      </div>
      {open === "region" && <FilterOptions.Region />}
      {open === "priceCategory" && <FilterOptions />}
      {open === "area" && <FilterOptions />}
      {open === "bedrooms" && <FilterOptions />}
      <FilterDisplayContainer />
      <ListContainer />
    </div>
  );
}

export default MainPage;
