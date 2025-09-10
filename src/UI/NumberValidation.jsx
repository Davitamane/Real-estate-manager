import { FaCheck } from "react-icons/fa";

function NumberValidation({ text = 0 }) {
  const validation = String(text).startsWith("5") && String(text).length === 9;
  return (
    <div
      className={`text-xs flex items-center gap-1 ${
        text.length === 0
          ? "text-gray-900"
          : validation
            ? "text-green-600"
            : "text-red-600"
      }`}
    >
      <FaCheck />
      <p>ფორმატი 5XXXXXXXX</p>
    </div>
  );
}

export default NumberValidation;
