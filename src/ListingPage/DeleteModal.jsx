import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import Button from "../UI/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEstate } from "../services/apiQuery";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function DeleteModal({ modal, setModal, id }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => deleteEstate(id),
    onSuccess: () => {
      queryClient.invalidateQueries("realEstates");
      navigate("/mainPage");
      toast.success("Successfully deleted!");
      console.log("success");
    },
  });

  if (!modal) return null;
  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black/20 flex items-center justify-center z-50 backdrop-blur-[3px]"
      onClick={() => setModal(false)}
    >
      <div
        className="flex w-2/5 justify-center  flex-col gap-6 bg-white p-8 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <IoMdClose
            className="hover:cursor-pointer size-5"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="flex justify-center">
          <h3>გსურთ წაშალოთ ლისტინგი?</h3>
        </div>
        <div className="flex justify-center gap-5 mb-8 mt-4">
          <Button styleType="secondary" onClick={() => setModal(false)}>
            გაუქმება
          </Button>
          <Button onClick={() => mutate()}>დადასტურება</Button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default DeleteModal;
