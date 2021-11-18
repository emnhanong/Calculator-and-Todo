import React from "react";

const Button = (props) => {
  const { name, className, style, handleClickBtn } = props;
  return (
    <>
      <button
        className={className}
        type="button"
        value={name}
        onClick={handleClickBtn}
        style={style}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
