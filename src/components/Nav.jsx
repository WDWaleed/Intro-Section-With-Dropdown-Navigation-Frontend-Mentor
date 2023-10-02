import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Toggle navigation menu"
        className={`${
          navOpen ? "h-[26px] w-[26px] bg-X" : "h-[18px] w-[32px] bg-hamburger"
        } absolute   right-5 top-5 z-50 bg-no-repeat custom:hidden`}
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      ></button>
      <div
        id="overlay"
        className={`${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } custom:hidden`}
        onClick={() => setNavOpen(false)}
      ></div>
      <div
        id="nav-container"
        className={`flex grow ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } justify-between bg-white text-MediumGray custom:translate-x-0`}
      >
        <nav id="mobile-nav">
          <ul className="flex gap-8">
            <li
              className="relative hover:cursor-pointer hover:text-AlmostBlack"
              onClick={() => {
                setFeaturesOpen(!featuresOpen);
              }}
            >
              Features
              <span
                className={`${
                  featuresOpen ? "rotate-180" : "rotate-0"
                } mb-[3px] ml-2 h-[6px] w-[10px] transition-transform duration-100 ease-linear`}
                style={{ content: `url(images/icon-arrow-down.svg)` }}
              ></span>
              <ul
                id="features-dropdown"
                className={`dropdown ${
                  featuresOpen ? "block" : "hidden"
                } dropdown custom:absolute custom:mt-4 custom:w-max custom:rounded-lg  custom:px-6 custom:py-4`}
              >
                <li className="mb-2 text-MediumGray before:relative before:top-[1px] before:mr-3">
                  Todo List
                </li>
                <li className="mb-2  text-MediumGray before:relative before:top-[1px] before:mr-3">
                  Calendar
                </li>
                <li className="mb-2 text-MediumGray before:relative before:top-[1px] before:mr-3">
                  Reminders
                </li>
                <li className="mb-2 text-MediumGray before:relative before:top-[1px] before:mr-3">
                  Planning
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                setCompanyOpen(!companyOpen);
              }}
              className="relative hover:cursor-pointer hover:text-AlmostBlack"
            >
              Company
              <span
                className={`${
                  companyOpen ? "rotate-180" : "rotate-0"
                } mb-[3px] ml-2 h-[6px] w-[10px] transition-transform duration-100 ease-linear`}
                style={{ content: `url(images/icon-arrow-down.svg)` }}
              ></span>
              <ul
                className={` dropdown ${
                  companyOpen ? "block" : "hidden"
                } dropdown custom:absolute custom:mt-4 custom:w-max custom:rounded-lg  custom:px-6 custom:py-4 ${
                  featuresOpen ? "custom:left-16" : "custom:left-0"
                }`}
              >
                <li className="mb-2 text-MediumGray">History</li>
                <li className="mb-2 text-MediumGray">Our Team</li>
                <li className="mb-2 text-MediumGray">Blog</li>
              </ul>
            </li>
            <li className="hover:text-AlmostBlack">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-AlmostBlack">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div id="buttons">
          <button className="mr-8 hover:text-AlmostBlack">Login</button>
          <button className="mr-8 border-2 border-MediumGray hover:border-AlmostBlack hover:text-AlmostBlack">
            Register
          </button>
        </div>
      </div>
    </>
  );
};
export default Nav;
