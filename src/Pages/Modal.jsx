import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../contexts/ModalContext";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { CiImageOn } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbXboxX } from "react-icons/tb";
import { useForm } from "react-hook-form";

function Modal() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
        reset();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      avatar: "",
    },
  });

  const image = watch("avatar");

  function handleClose(e) {
    e.preventDefault();
    setIsModalOpen(false);
    reset();
  }

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
    };
    console.log(formattedData);
  };
  if (!isModalOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-black/20 flex items-center justify-center z-50 backdrop-blur-[3px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-3/5 justify-center flex-col gap-6 bg-white p-8 rounded-lg shadow-lg"
        ref={modalRef}
      >
        <div className="flex w-full justify-end">
          <button onClick={(e) => handleClose(e)}>
            <TbXboxX className="size-8 text-gray-400" />
          </button>
        </div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-extrabold">თანამშრომლის დამატება</h1>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input text="სახელი">
            <input
              type="text"
              className={`w-full text-sm bg-white border rounded-md resize-none px-4 py-3  focus:outline-none
      ${errors.name ? "border-red-400 focus:border-red-700 focus:border-2" : "border-gray-300 focus:border-gray-400"}`}
              {...register("name", {
                required: "ჩაწერეთ ვალიდური ტექსტი",
                minLength: { value: 2 },
              })}
            />
          </Input>

          <Input text="გვარი">
            <input
              type="text"
              className={`w-full text-sm bg-white border focus:border-gray-400 rounded-md resize-none border-gray-300 focus:outline-none px-4 py-3`}
              {...register("surname", {
                required: "ჩაწერეთ ვალიდური ტექსტი",
                minLength: 2,
              })}
            />
          </Input>
          <Input text="ელ-ფოსტა">
            <input
              type="text"
              className={`w-full text-sm bg-white border focus:border-gray-400 rounded-md resize-none border-gray-300 focus:outline-none px-4 py-3`}
              {...register("email", {
                required: "ჩაწერეთ ვალიდური მეილი",
                validate: (value) =>
                  value.endsWith("@redberry.ge") ||
                  "მეილი უნდა მთავრდებოდეს @redberry.ge-ზე",
              })}
            />
          </Input>
          <Input text="ტელეფონის ნომერი">
            <input
              type="number"
              className={`w-full text-sm bg-white border focus:border-gray-400 rounded-md resize-none border-gray-300 focus:outline-none px-4 py-3`}
              {...register("phone", {
                validate: (val) =>
                  (String(val).startsWith("5") && String(val).length === 9) ||
                  "ნომერი უნდა იყოს 9 ციფრი და იწყებოდეს 5-ით",
              })}
            />
          </Input>
        </div>

        <Input text="ატვირთე ფოტო">
          <div
            className="w-full mx-auto  border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer h-32"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              {...register("avatar")}
            />
            {image ? (
              <div className="relative">
                {image?.[0] && (
                  <img
                    src={URL.createObjectURL(image[0])}
                    className="w-20 h-20 mb-1 rounded-full object-cover object-center"
                  />
                )}
                <button
                  className="absolute -bottom-0.5 -right-0.5 bg-white p-1 rounded-full shadow hover:bg-gray-200 duration-200 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation();
                    resetField("avatar");
                  }}
                >
                  <RiDeleteBin6Line className="text-gray-400" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <CiImageOn className="w-8 h-8 mb-1" />
                <p className="text-sm">ატვირთე ფოტო</p>
              </div>
            )}
          </div>
        </Input>

        <div className="flex justify-end gap-4 mt-10">
          <Button styleType="secondary" onClick={handleClose}>
            გაუქმება
          </Button>

          <Button type="submit">დაამატე აგენტი</Button>
        </div>
      </form>
    </div>,
    document.body
  );
}

export default Modal;
