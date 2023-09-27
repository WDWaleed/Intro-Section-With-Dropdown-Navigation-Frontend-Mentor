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
        className={`${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } custom:hidden`}
        onClick={() => setNavOpen(false)}
      ></div>
      <div
        id="nav-container"
        className={`flex grow ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } justify-between custom:translate-x-0 bg-white text-MediumGray`}
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
                } transition-transform ease-linear duration-100 w-[10px] h-[6px] mb-[3px] ml-2`}
                style={{ content: `url(images/icon-arrow-down.svg)` }}
              ></span>
              <ul
                id="features-dropdown"
                className={`dropdown ${
                  featuresOpen ? "block" : "hidden"
                } dropdown custom:absolute custom:py-4 custom:px-6 custom:w-max  custom:rounded-lg custom:mt-4`}
              >
                <li className="mb-2 before:mr-3 before:relative before:top-[1px] text-MediumGray">
                  Todo List
                </li>
                <li className="mb-2  before:mr-3 before:relative before:top-[1px] text-MediumGray">
                  Calendar
                </li>
                <li className="mb-2 before:mr-3 before:relative before:top-[1px] text-MediumGray">
                  Reminders
                </li>
                <li className="mb-2 before:mr-3 before:relative before:top-[1px] text-MediumGray">
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
                } transition-transform ease-linear duration-100 w-[10px] h-[6px] mb-[3px] ml-2`}
                style={{content: `url(images/icon-arrow-down.svg)`}}
              ></span>
              <ul
                className={` dropdown ${
                  companyOpen ? "block" : "hidden"
                } dropdown custom:absolute custom:py-4 custom:px-6 custom:w-max  custom:rounded-lg custom:mt-4 ${
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
          <button className="mr-8 border-2 border-MediumGray hover:text-AlmostBlack hover:border-AlmostBlack">Register</button>
        </div>
      </div>
    </>
  );
};
export default Nav;
