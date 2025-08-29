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

export default Input;
