import React, { useState } from "react";
import "./TodoList.css";
import Todo from "./Todo";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";

const todoList = [
  {
    title: "Do the dishes",
    isEdit: false,
    done: false,
  },
  {
    title: "Take out the trash",
    isEdit: false,
    done: false,
  },
  {
    title: "Finish doing laundry",
    isEdit: false,
    done: false,
  },
];

const inputTodo = {
  display: "block",
  width: "730px",
  height: "40px",
  padding: ".375rem .75rem",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "#495057",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid #ced4da",
  borderRadius: ".25rem",
  marginBottom: "20px",
};

const Todolist = () => {
  const [todos, setTodos] = useState(todoList);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    setTodos([
      ...todos,
      {
        title: value,
        isEdit: false,
        done: false,
      },
    ]);
    e.preventDefault();
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDeleteTodo = (todo) => {
    const deleteTodo = todos.filter((item) => item !== todo);
    setTodos(deleteTodo);
  };

  const getTodoClick = (todo) => {
    const x = todos.filter((item) => item === todo);
    return x;
  };

  const handleEditTodo = (todo) => {
    getTodoClick(todo)[0].isEdit = !getTodoClick(todo)[0].isEdit;
    setTodos([...todos]);
  }

  const handleCompleted = (todo) => {
    getTodoClick(todo)[0].done = !getTodoClick(todo)[0].done;
    setTodos([...todos]);
  }

  const handleChangeBtn = (e, todo) => {
    getTodoClick(todo)[0].title = e.target.value;
    setTodos([...todos]);
  }

  const handleChangeSubmit = (e,todo) => {
    e.preventDefault();
    getTodoClick(todo)[0].title = todo.title;
    getTodoClick(todo)[0].isEdit = !todo.isEdit;
    setTodos([...todos]);
  }

  return (
    <div className="wrap-todo">
      <Title title={"My To-dos"} />
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={"Create a new to-do..."}
          value={value}
          handleChange={handleChange}
          style={inputTodo}
        />
      </form>
      <Todo
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleCompleted={handleCompleted}
        handleChangeBtn={handleChangeBtn}
        handleChangeSubmit={handleChangeSubmit}
      />
    </div>
  );
};

export default Todolist;
