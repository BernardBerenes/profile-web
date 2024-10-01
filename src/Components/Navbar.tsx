import NavbarItem from "../Fragments/NavbarItem";
import UnlistedList from "../Elements/UnlistedList";
import React, { useState } from "react";
import Hamburger from "./Hamburger";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const prefixPath = "src/assets/icons/"

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-gray-100 h-20 w-full z-10 lg:justify-center items-center flex fixed lg:relative">
            <div className="lg:hidden mx-4">
                <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
            </div>
            <div className="w-full hidden lg:flex lg:justify-around">
                <UnlistedList>
                    <NavbarItem url="https://www.linkedin.com/in/bernard-bereness-514259251/" pageName="Bernard Bereness | Software Engineer" />
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
                <div className={`top-20 absolute z-40 min-h-full w-1/2 sm:w-72 bg-gray-800 lg:hidden`}>
                    <UnlistedList>
                        <h1 className="text-2xl text-center my-4">Bernard Bereness</h1>
                        <NavbarItem url="/" pageName="Home" icon={`${prefixPath}home.svg`} />
                        <NavbarItem url="/about-me" pageName="About Me" icon={`${prefixPath}about-me.svg`} />
                        <NavbarItem url="/experience" pageName="Experience" icon={`${prefixPath}experience.svg`} />
                    </UnlistedList>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
