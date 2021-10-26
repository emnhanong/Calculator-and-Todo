import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Button/Button";

const Todo = (props) => {
  const {
    todos,
    handleEditTodo,
    handleDeleteTodo,
    handleChangeBtn,
    handleCompleted,
    handleChangeSubmit,
  } = props;
  const line = {
    textDecorationLine: "line-through",
  };
  const hideLine = {
    textDecorationLine: "none",
  };
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <li className="todo" key={index}>
          {todo.isEdit ? (
            <form onSubmit={(e) => handleChangeSubmit(e, todo)}>
              <input
                value={todo.title}
                onChange={(e) => handleChangeBtn(e, todo)}
                className="input-change"
              />
            </form>
          ) : (
            <p
              onClick={() => handleCompleted(todo)}
              style={todo.done ? line : hideLine}
            >
              {todo.title}
            </p>
          )}
          <div className="wrap-btn">
            <Button
              className={"edit"}
              name={<FiEdit />}
              handleClickBtn={() => handleEditTodo(todo)}
            />
            <Button
              className={"trash"}
              name={<FaTrashAlt />}
              handleClickBtn={() => handleDeleteTodo(todo)}
            />
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todo;
