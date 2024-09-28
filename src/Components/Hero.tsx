import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <span className="loading loading-ball loading-xs"></span>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="../src/assets/images/profile-picture.jpg" className="max-w-sm max-h-64 rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-gray-100 text-5xl font-bold text-center md:text-left">Bernard Bereness</h1>
                    <p className="text-gray-100 text-justify py-6 text-lg">Bonjour!! My name is <b className="transition duration-300 ease-in-out transform text-cyan-400 hover:scale-105">Bernard Bereness</b>. I am a tech enthusiast currently studying at Bina Nusantara University. Alongside my studies, I am working part-time for the Bina Nusantara IT Division until February 2025. I am passionate about exploring new technologies and contributing to innovative projects in the tech industry. I continuously seek opportunities to apply my skills in real-world scenarios, eager to learn and grow within the dynamic field of technology. I primarily work with the Laravel framework and am actively progressing in other backend frameworks.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero