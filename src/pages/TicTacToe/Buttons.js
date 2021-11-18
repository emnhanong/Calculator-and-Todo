import React from 'react';
import Button from "../../components/Button/Button";

const Buttons = (props) => {
  const { value , onClick, isWinning} = props;
  return (
    <div>
        <Button handleClickBtn={onClick} name={value} className={"square "+ (isWinning ? "square--won" : "")}/>
    </div>
  );
}

export default Buttons;