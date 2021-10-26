import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Calculator.css";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";

const styleNumber = {
  backgroundColor: "#f1f3f4",
  color: "#202124",
  border: "1px solid #f1f3f4",
  borderRadius: "4px",
  width: "85px",
  height: "37px",
  margin: "5px",
};

const styleOperator = {
  backgroundColor: "#dadce0",
  color: "#202124",
  border: "1px solid #dadce0",
  borderRadius: "4px",
  width: "85px",
  height: "37px",
  margin: "5px",
};

const styleEqual = {
  backgroundColor: "#4285f4",
  color: "#fff",
  border: "1px solid #4285f4",
  borderRadius: "4px",
  width: "85px",
  height: "37px",
  margin: "5px",
};

const inputQuestion = {
  width: "378px",
  border: "1px solid #ebebeb",
  borderBottom: "none",
  height: "20px",
  marginBottom: "-12px",
  display: "block",
};

const inputAnswer = {
  width: "378px",
  border: "1px solid #ebebeb",
  borderTop: "none",
  height: "20px",
};

const buttons = [
  {
    name: "7",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "8",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "9",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "÷",
    value: "÷",
    type: "operator",
    style: styleOperator,
  },
  {
    name: "4",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "5",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "6",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "×",
    value: "×",
    type: "operator",
    style: styleOperator,
  },
  {
    name: "3",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "2",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "1",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "-",
    value: "-",
    type: "operator",
    style: styleOperator,
  },
  {
    name: "0",
    value: "",
    type: "number",
    style: styleNumber,
  },
  {
    name: "AC",
    value: "AC",
    type: "delete",
    style: styleOperator,
  },
  {
    name: "=",
    value: "=",
    type: "equal",
    style: styleEqual,
  },
  {
    name: "+",
    value: "+",
    type: "operator",
    style: styleOperator,
  },
];

const Calculator = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const lastCharacter = question.slice(-1);
  const secondCharacter = question.slice(-2);

  const handleClickBtn = (e, type, operator) => {
    const value = e.target.value;
    const newInput = question.slice(0, -1) + operator;
    switch (type) {
      case "number": {
        if (value === "0") {
          if (lastCharacter === "0") {
            return;
          }
        }
        setQuestion(question + value);
        break;
      }
      case "operator": {
        if (question === "") {
          if (operator === "+" || operator === "×" || operator === "÷") {
            return;
          }
        }

        if (
          lastCharacter === "+" ||
          lastCharacter === "×" ||
          lastCharacter === "÷"
        ) {
          if (operator === "-") {
            setQuestion(question + value);
          } else if (operator === "+" || operator === "×" || operator === "÷") {
            setQuestion(newInput);
          } else {
            setQuestion(question + value);
          }
        } else {
          if (
            secondCharacter === "+-" ||
            secondCharacter === "×-" ||
            secondCharacter === "÷-"
          ) {
            if (
              operator === "-" ||
              operator === "×" ||
              operator === "÷" ||
              operator === "+"
            ) {
              return;
            }
          } else if (lastCharacter === "-") {
            if (
              operator === "×" ||
              operator === "÷" ||
              operator === "+" ||
              operator === "-"
            ) {
              setQuestion(newInput);
            }
          } else {
            setQuestion(question + value);
          }
        }

        break;
      }
      case "equal": {
        if (
          lastCharacter === "+" ||
          lastCharacter === "-" ||
          lastCharacter === "×" ||
          lastCharacter === "÷"
        ) {
          if (operator === "=") {
            return;
          }
        }
        if (question !== "") {
          const replaceOperator = question.replace(/×|÷/gi, function (x) {
            if (x === "×") {
              return "*";
            } else {
              return "/";
            }
          });
          const result = eval(replaceOperator);
          setAnswer(result);
        } else {
          setAnswer("");
          setQuestion("");
        }
        break;
      }
      case "delete": {
        setQuestion("");
        setAnswer("");
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="wrap-calculator">
      <Title title={"My Calculator"} />
      <Input value={question} style={inputQuestion} />
      <Input value={answer} style={inputAnswer} />
      <div className="main-calculator">
        {buttons.map((item, index) => (
          <Button
            key={index}
            className="btn-calculator"
            name={item.name}
            handleClickBtn={(e) => handleClickBtn(e, item.type, item.value)}
            style={item.style}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
