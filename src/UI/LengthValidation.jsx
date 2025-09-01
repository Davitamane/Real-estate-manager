import { FaCheck } from "react-icons/fa";

function LengthValidation({ customClassName, text = "" }) {
  const textLength = text.length;

  return (
    <div
      className={`text-xs ${customClassName} flex items-center gap-1 ${
        textLength === 0
          ? "text-gray-900"
          : textLength >= 2
            ? "text-green-600"
            : "text-red-600"
      }`}
    >
      <FaCheck />
      <p>მინიმუმ 2 სიმბოლო</p>
    </div>
  );
}

export default LengthValidation;
