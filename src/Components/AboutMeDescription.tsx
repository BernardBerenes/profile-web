import React from 'react';
import Typewriter from 'typewriter-effect';

const AboutMeDescription: React.FC = () => {
    return (
        <div className="relative flex-grow bg-gray-900 text-white flex items-center justify-center px-8 2xl:px-0 gap-4">
            <img src="src/assets/images/profile.png" alt="Profile" className="inset-0 object-cover hidden md:block h-96 lg:h-[50.5rem]"/>
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                    Hi! I'm <span className="text-indigo-500 inline-block">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Bernard Bereness.")
                                    .pauseFor(999999999999)
                                    .start();
                            }}
                        />
                    </span>
                </h1>
                <h2 className="mt-4 text-xl lg:text-2xl">Software Engineer at Bina Nusantara IT Division</h2>
                <p className="mt-6 text-sm md:text-base text-gray-300 text-justify">
                    Hi! My name is Bernard Bereness, I’m 19 years old and I have three siblings. I am currently a software engineer studying and working at Bina Nusantara IT Division. I am passionate about exploring technology, especially in the fields of software development and cloud infrastructure. In my spare time, I am learning a lot about trending technologies that are currently in demand, such as Kubernetes, Redis, and Kafka, as well as programming languages like Go, JavaScript, PHP, and Python.
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-300 text-justify">
                    I also work on personal projects to apply my knowledge and enhance my skills, focusing on creating applications that can positively impact people's lives. I'm always eager to connect with fellow tech enthusiasts and collaborate on exciting projects. I believe that keeping up with the latest advancements is crucial in this rapidly evolving field, and I enjoy tackling challenges that allow me to develop innovative solutions.
                </p>
            </div>
        </div>
    );
};

export default AboutMeDescription;
