import React from "react";

const Input = (props) => {
  const { placeholder, value, style, handleChange } = props;
  const handleChangeValue = (e) => {
    handleChange?.(e);
  };

  return (
    <div className="show-results">
      <input
        type="text"
        value={value}
        className="input"
        style={style}
        placeholder={placeholder}
        onChange={handleChangeValue}
      />
    </div>
  );
};
export default Input;
