import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <>
      <button
        className={`${
          navOpen ? "bg-X w-[26px] h-[26px]" : "bg-hamburger w-[32px] h-[18px]"
        } bg-no-repeat   absolute top-5 right-5 z-50 custom:hidden`}
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      ></button>
      <div
        id="overlay"
        className={`${navOpen ? "translate-x-0" : "-translate-x-full"} custom:hidden`}
        onClick={()=>setNavOpen(false)}
      ></div>
      <div
        id="nav-container"
        className={`flex grow ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } justify-between custom:translate-x-0`}
      >
        <nav id="mobile-nav">
          <ul className="flex gap-4">
            <li
              className="relative hover:cursor-pointer"
              onClick={() => {
                setFeaturesOpen(!featuresOpen);
              }}
            >
              Features
              <span
                className={`${
                  featuresOpen ? "rotate-180" : "rotate-0"
                } transition-transform ease-linear duration-100 w-[10px] h-[6px] mb-[1px] ml-2 content-[url(images/icon-arrow-down.svg)]`}
              ></span>
              <ul
                id="features-dropdown"
                className={`dropdown ${
                  featuresOpen ? "block" : "hidden"
                } dropdown custom:absolute custom:py-4 custom:px-6 custom:w-max  custom:rounded-lg custom:mt-4`}
              >
                <li className="mb-2 before:content-[url(images/icon-todo.svg)] before:mr-3 before:relative before:top-[2px]">
                  Todo List
                </li>
                <li className="mb-2 before:content-[url(images/icon-calendar.svg)] before:mr-3 before:relative before:top-[2px]">
                  Calendar
                </li>
                <li className="mb-2 before:content-[url(images/icon-reminders.svg)] before:mr-3 before:relative before:top-[2px]">
                  Reminders
                </li>
                <li className="mb-2 before:content-[url(images/icon-planning.svg)] before:mr-3 before:relative before:top-[2px]">
                  Planning
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                setCompanyOpen(!companyOpen);
              }}
              className="relative hover:cursor-pointer"
            >
              Company
              <span
                className={`${
                  companyOpen ? "rotate-180" : "rotate-0"
                } transition-transform ease-linear duration-100 w-[10px] h-[6px] mb-[1px] ml-2 content-[url(images/icon-arrow-down.svg)]`}
              ></span>
              <ul
                className={` dropdown ${
                  companyOpen ? "block" : "hidden"
                } dropdown custom:absolute custom:py-4 custom:px-6 custom:w-max  custom:rounded-lg custom:mt-4 ${featuresOpen ? "custom:left-16" : "custom:left-0"}`}
              >
                <li className="mb-2">History</li>
                <li className="mb-2">Our Team</li>
                <li className="mb-2">Blog</li>
              </ul>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div id="buttons">
          <button className="mr-5">Login</button>
          <button className="mr-5">Register</button>
        </div>
      </div>
    </>
  );
};
export default Nav;
