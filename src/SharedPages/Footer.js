import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const day = new Date().getFullYear();

  return (
    <footer className="lg:flex items-center justify-around bg-gray-400 p-5">
      <div className="lg:text-center ">
        <p className="text-center">
          Copyright &copy; {day} - All right reserved
        </p>
      </div>

      <ul className="flex items-center justify-center gap-5 ">
        <li>
          <Link to="/home"> Home</Link>
        </li>
        <li tabIndex="0">
          <Link to="/todo"> To-Do</Link>
        </li>
        <li>
          <Link to="/calender"> Calender</Link>
        </li>
        <li>
          <Link to="/completedTask"> Completed Task</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
