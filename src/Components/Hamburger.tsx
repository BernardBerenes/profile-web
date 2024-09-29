import React from "react";

interface HamburgerProps {
    toggleMenu: () => void; // Define a prop for the toggleMenu function
    isOpen: boolean; // Define a prop to determine the menu state
}

const Hamburger: React.FC<HamburgerProps> = ({ toggleMenu, isOpen }) => {
    return (
        <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
                className="w-10 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
            </svg>
        </button>
    );
};

export default Hamburger;
