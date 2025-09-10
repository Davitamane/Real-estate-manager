import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../contexts/ModalContext";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { CiImageOn } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbXboxX } from "react-icons/tb";
import { useForm } from "react-hook-form";
import MailValidation from "../UI/MailValidation";
import NumberValidation from "../UI/NumberValidation";
import Validation from "../UI/Validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAgent } from "../services/apiQuery";
import { toast } from "react-toastify";

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

  // ================== QUERY ================= //

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addAgent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["agents"] });
      toast.success("Agent successfully created!");
      reset();
      setIsModalOpen(false);
    },
  });

  // ========================================= //

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch,
  } = useForm({
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
    reset();
    setIsModalOpen(false);
  }

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
    };
    const formData = new FormData();
    for (const i in formattedData) {
      if (i === "avatar") {
        formData.append(i, formattedData[i][0]);
      } else {
        formData.append(i, formattedData[i]);
      }
    }
    console.log(formattedData);
    mutate(formData);
  };
  if (!isModalOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-black/20 flex items-center justify-center z-50 backdrop-blur-[3px]">
      <div
        className="flex w-3/5 justify-center flex-col gap-6 bg-white p-8 rounded-lg shadow-lg"
        ref={modalRef}
        id="modalForm"
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
            <Validation text={watch("name")} />
          </Input>

          <Input text="გვარი">
            <input
              type="text"
              className={`w-full text-sm bg-white border rounded-md resize-none px-4 py-3  focus:outline-none
      ${errors.surname ? "border-red-400 focus:border-red-700 focus:border-2" : "border-gray-300 focus:border-gray-400"}`}
              {...register("surname", {
                required: "ჩაწერეთ ვალიდური ტექსტი",
                minLength: 2,
              })}
            />
            <Validation text={watch("surname")} />
          </Input>
          <Input text="ელ-ფოსტა">
            <input
              type="text"
              className={`w-full text-sm bg-white border rounded-md resize-none px-4 py-3  focus:outline-none
      ${errors.email ? "border-red-400 focus:border-red-700 focus:border-2" : "border-gray-300 focus:border-gray-400"}`}
              {...register("email", {
                required: "ჩაწერეთ ვალიდური მეილი",
                validate: (value) =>
                  value.endsWith("@redberry.ge") ||
                  "მეილი უნდა მთავრდებოდეს @redberry.ge-ზე",
              })}
            />
            <MailValidation text={watch("email")} />
          </Input>
          <Input text="ტელეფონის ნომერი">
            <input
              type="number"
              className={`w-full text-sm bg-white border rounded-md resize-none px-4 py-3  focus:outline-none
      ${errors.phone ? "border-red-400 focus:border-red-700 focus:border-2" : "border-gray-300 focus:border-gray-400"}`}
              {...register("phone", {
                validate: (val) =>
                  (String(val).startsWith("5") && String(val).length === 9) ||
                  "ნომერი უნდა იყოს 9 ციფრი და იწყებოდეს 5-ით",
              })}
            />
            <NumberValidation text={watch("phone")} />
          </Input>
        </div>

        <Input text="ატვირთე ფოტო">
          <div
            className={`w-full mx-auto  border-2 border-dashed ${errors.avatar ? "border-red-500" : "border-gray-300"} rounded-lg flex items-center justify-center cursor-pointer h-32`}
            onClick={() => document.getElementById("fileInput").click()}
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              {...register("avatar", {
                required: "photo is required",
              })}
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

          <Button
            onClick={(e) => {
              handleSubmit(onSubmit)(e);
              e.preventDefault();
            }}
          >
            დაამატე აგენტი
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
