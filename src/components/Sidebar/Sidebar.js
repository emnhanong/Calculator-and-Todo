import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  BsCalculator,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Sidebar = (props) => {
  const { handleToggle, toggle } = props;
  return (
    <div className="sidebar">
      <nav className="menu">
        <div className="toggleMenu">
          {toggle ? (
            <div className="arrow" onClick={handleToggle}><BsFillArrowLeftCircleFill /></div>
          ) : (
            <div className="arrow" onClick={handleToggle}><BsFillArrowRightCircleFill /></div>
          )}
        </div>
        {toggle ? (
          <div>
            <NavLink to="/calculator" activeClassName="active">
              <BsCalculator /> Calculator
            </NavLink>
            <NavLink to="/todolist" activeClassName="active">
              <AiOutlineUnorderedList /> TodoList
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/calculator" activeClassName="active">
              <BsCalculator />
            </NavLink>
            <NavLink to="/todolist" activeClassName="active">
              <AiOutlineUnorderedList />
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
