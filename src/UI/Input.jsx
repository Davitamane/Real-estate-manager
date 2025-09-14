function Addons({ onChange, number = "", error }) {
  return (
    <div className="relative w-full">
      <input
        type="number"
        placeholder="დან"
        className={`w-full border rounded-lg px-3 py-2 pr-7 text-gray-700 placeholder-gray-400 appearance-none ${error ? "border-red-500" : ""}`}
        onChange={(e) => onChange?.(e.target.value)}
        value={number}
      />
      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
        ₾
      </span>
    </div>
  );
}

function Input({ children, text, customClassName, required = true }) {
  return (
    <div className={`w-full ${customClassName} flex flex-col gap-1`}>
      <p>
        {text}
        {required ? <span>*</span> : null}
      </p>
      {children}
    </div>
  );
}

Input.Addons = Addons;

export default Input;
