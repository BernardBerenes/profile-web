import React from "react";
import FooterIcon from "../Fragments/FooterIcon";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-700 text-yellow-300 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Bernard Bereness. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                    <FooterIcon url="https://github.com/BernardBerenes" path="github" />
                    <FooterIcon url="https://www.linkedin.com/in/bernard-bereness-514259251/" path="linked-in" />
                    <FooterIcon url="https://www.instagram.com/bernardberenes/" path="instagram" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
