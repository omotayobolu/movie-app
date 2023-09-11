import React from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <div className="lg:px-[10%] lg:py-[3%] px-[5%] py-[2%] bg-homepage-bg bg-cover bg-no-repeat">
      <div className="text-white">
        <nav className="flex flex-row justify-between items-center">
          <img src={Logo} alt="MovieBox" />
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to watch? "
              className="border border-gray-300 outline-none rounded-md px-3 py-2 w-[400px] bg-transparent text-white"
            />
            <FontAwesomeIcon
              className="absolute top-[50%] translate-y-[-50%] right-4"
              icon={faMagnifyingGlass}
            />
          </div>
          <div className="flex flex-row items-center gap-6">
            <p>Sign In</p>
            <div className="bg-rose-700 px-2 py-1 rounded-full">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Homepage;
