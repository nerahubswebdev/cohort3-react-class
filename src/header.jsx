import React from "react";
import "./styles/header.css";

function Header() {
  return (
    <header className="bg-white sticky top-0 z-1000 py-2">
      <div className="navbar max-w-[1200px] mx-auto flex justify-between items-center px-5">
        <div className="logo text-2xl font-bold">My Logo</div>
        <div
          className="menu-toggle flex flex-col cursor-pointer md:hidden"
          id="mobile-menu"
        >
          <span className="bar h-[3px] w-[25px] bg-gray-500 mb-1"></span>
          <span className="bar h-[3px] w-[25px] bg-gray-500 mb-1"></span>
          <span className="bar h-[3px] w-[25px] bg-gray-500 mb-1"></span>
        </div>
        <nav className="nav-desktop hidden md:flex">
          <ul className="nav-list flex space-x-2">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#project2"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Project2
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="./index.html"
                target="_blank"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Native-css-version
              </a>
            </li>
            <li>
              <a
                href="./tailwind-table.html"
                target="_blank"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Table
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav absolute top-12 left-0 right-0 bg-black bg-opacity-90 flex flex-col hidden">
          <ul className="nav-list flex flex-col items-center">
            <li className="my-2">
              <a
                href="#home"
                className="text-white hover:bg-gray-700 rounded py-2 px-4 transition"
              >
                Home
              </a>
            </li>
            <li className="my-2">
              <a
                href="#about"
                className="text-white hover:bg-gray-700 rounded py-2 px-4 transition"
              >
                About
              </a>
            </li>
            <li className="my-2">
              <a
                href="#skills"
                className="text-white hover:bg-gray-700 rounded py-2 px-4 transition"
              >
                Skills
              </a>
            </li>
            <li className="my-2">
              <a
                href="#projects"
                className="text-white hover:bg-gray-700 rounded py-2 px-4 transition"
              >
                Projects
              </a>
            </li>
            <li className="my-2">
              <a
                href="#experience"
                className="text-white hover:bg-gray-700 rounded py-2 px-4 transition"
              >
                Experience
              </a>
            </li>
            <li className="my-2">
              <a
                href="#project2"
                className="text-white hover:bg-gray-700 rounded py-2 px-4 transition"
              >
                Project2
              </a>
            </li>
            <li className="my-2">
              <a
                href="#contact"
                className="text-white hover:bg-gray-700 rounded py-2 px-4 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="./index.html"
                target="_blank"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Native-css-version
              </a>
            </li>
            <li>
              <a
                href="./tailwind-table.html"
                target="_blank"
                className="text-gray-700 hover:bg-gray-200 rounded py-2 px-4 transition"
              >
                Table
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
