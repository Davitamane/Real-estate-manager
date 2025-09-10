import { FaCheck } from "react-icons/fa";

function MailValidation({ text = "", customClassName }) {
  const validation = text.endsWith("@redberry.ge");
  return (
    <div
      className={`text-xs ${customClassName} flex items-center gap-1 ${
        text.length === 0
          ? "text-gray-900"
          : validation
            ? "text-green-600"
            : "text-red-600"
      }`}
    >
      <FaCheck />
      <p>გამოიყენეთ @redberry.ge ფოსტა</p>
    </div>
  );
}

export default MailValidation;
