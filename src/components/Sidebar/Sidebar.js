import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  BsCalculator,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdVideogameAsset } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Sidebar = (props) => {
  const { handleToggle, toggle } = props;
  const [respon, setRespon] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setRespon(false);
      } else {
        setRespon(true);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sidebar">
      {respon ? (
        <nav className="menu">
          <div className="toggleMenu">
            {toggle ? (
              <div className="arrow" onClick={handleToggle}>
                <BsFillArrowLeftCircleFill />
              </div>
            ) : (
              <div className="arrow" onClick={handleToggle}>
                <BsFillArrowRightCircleFill />
              </div>
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
              <NavLink to="/tictactoe" activeClassName="active">
                <MdVideogameAsset /> TicTacToe
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
              <NavLink to="/tictactoe" activeClassName="active">
                <MdVideogameAsset />
              </NavLink>
            </div>
          )}
        </nav>
      ) : (
        <nav className="menu-mobile menu">
          <div className="toggleMenu">
            {
              <div className="bars" onClick={handleToggle}>
                <FaBars />
              </div>
            }
          </div>
          <div className="wrap-sidebar">
            {toggle ? (
              <div className="sidebar-mobile-show">
                <NavLink to="/calculator" activeClassName="active">
                  <BsCalculator /> Calculator
                </NavLink>
                <NavLink to="/todolist" activeClassName="active">
                  <AiOutlineUnorderedList /> TodoList
                </NavLink>
                <NavLink to="/tictactoe" activeClassName="active">
                  <MdVideogameAsset /> TicTacToe
                </NavLink>
              </div>
            ) : (
              <div className="sidebar-mobile-hide">
                <NavLink to="/calculator" activeClassName="active">
                  <BsCalculator /> Calculator
                </NavLink>
                <NavLink to="/todolist" activeClassName="active">
                  <AiOutlineUnorderedList /> TodoList
                </NavLink>
                <NavLink to="/tictactoe" activeClassName="active">
                  <MdVideogameAsset /> TicTacToe
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
