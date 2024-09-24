import NavbarItem from "../Fragments/NavbarItem"
import UnlistedList from "../Elements/UnlistedList";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-900 text-yellow-300 h-20 justify-around items-center hidden md:flex">
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
        </nav>
    )
}

export default Navbar
