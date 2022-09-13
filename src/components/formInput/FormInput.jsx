import { useState } from "react";
import "./formInput.css";

const FormInput = ({ input, value, onChange }) => {
  const [focused, setOnfocused] = useState(false);

  const handleFocus = () => {
    setOnfocused(false);
  };

  return (
    <div className="formInput">
      <label>{input.label}</label>
      <input
        value={value}
        name={input.name}
        type={input.type}
        onChange={onChange}
        placeholder={input.placeholder}
        onBlur={() => setOnfocused(true)}
        onFocus={handleFocus}
        focused={focused.toString()}
        pattern={input.pattern}
      />
      <span>{input.errorMessage}</span>
    </div>
  );
};

export default FormInput;
