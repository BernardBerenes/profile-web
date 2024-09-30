import NavbarItem from "../Fragments/NavbarItem";
import UnlistedList from "../Elements/UnlistedList";
import React, { useState } from "react";
import Hamburger from "./Hamburger";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-gray-100 h-20 lg:justify-center items-center flex">
            <div className="lg:hidden mx-4">
                <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
            </div>

            <div className="w-full hidden lg:flex lg:justify-around">
                <UnlistedList>
                    <NavbarItem url="https://www.linkedin.com/in/bernard-bereness-514259251/" pageName="Bernard Bereness | Software Engineer"/>
                </UnlistedList>
                <UnlistedList>
                    <NavbarItem url="/" pageName="Home" />
                    <NavbarItem url="/about-me" pageName="About Me" />
                    <NavbarItem url="/experience" pageName="Experience" />
                </UnlistedList>
                <UnlistedList>
                    <NavbarItem url="http://ict.binus.edu/" pageName="Bina Nusantara IT Division" />
                </UnlistedList>
            </div>

            {isOpen && (
                <div className={`top-20 absolute z-40 h-full w-1/2 sm:w-72 bg-gray-800 lg:hidden`}>
                    <UnlistedList>
                        <h1 className="text-2xl text-center my-4">Bernard Bereness</h1>
                        <NavbarItem url="/" pageName="Home" icon="src/assets/icons/home.svg" />
                        <NavbarItem url="/about-me" pageName="About Me" icon="src/assets/icons/about-me.svg" />
                        <NavbarItem url="/experience" pageName="Experience" icon="src/assets/icons/experience.svg" />
                    </UnlistedList>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
