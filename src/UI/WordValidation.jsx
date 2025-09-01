import { FaCheck } from "react-icons/fa";

function WordValidation({ customClassName, text = "" }) {
  const textLength = text.length;

  const minWords = text.split(" ").length > 4;
  // console.log(minWords);

  return (
    <div
      className={`text-xs ${customClassName} flex items-center gap-1 ${
        textLength === 0
          ? "text-gray-900"
          : minWords
            ? "text-green-600"
            : "text-red-600"
      }`}
    >
      <FaCheck />
      <p>მინიმუმ 5 სიტყვა</p>
    </div>
  );
}

export default WordValidation;
