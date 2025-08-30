function Validation({ customClassName, text = "" }) {
  const textLength = text.length;

  return (
    <div className={`text-xs ${customClassName}`}>
      <p
        className={
          textLength === 0
            ? "text-gray-400"
            : textLength >= 2
              ? "text-green-600"
              : "text-red-600"
        }
      >
        მინიმუმ 2 სიმბოლო
      </p>
    </div>
  );
}

export default Validation;
