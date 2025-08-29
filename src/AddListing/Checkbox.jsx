import { useState } from "react";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
  

function Checkbox() {
  const [selected, setSelected] = useState("");


  return (
    <div className="flex gap-10">
      <button
        className="flex items-center gap-1"
        onClick={() => {
          setSelected("buy");
        }}
      >
        {selected === "buy" ? (
          <MdRadioButtonChecked className="size-4.5" />
        ) : (
          <MdRadioButtonUnchecked className="size-4.5" />
        )}

        <p>იყიდება</p>
      </button>
      <button
        className="flex items-center gap-1"
        onClick={() => setSelected("rent")}
      >
        {selected === "rent" ? (
          <MdRadioButtonChecked className="size-4.5" />
        ) : (
          <MdRadioButtonUnchecked className="size-4.5" />
        )}

        <p>ქირავდება</p>
      </button>
    </div>
  );
}

export default Checkbox;
