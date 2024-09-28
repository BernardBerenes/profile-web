import React, { useEffect, useState } from 'react';
import FooterIcon from '../Fragments/FooterIcon';

const Carousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const prefixPath = "../src/assets/images/"
    const cards = [
        {
            title: "Cinemalix",
            description: "Cinemalix is a website designed to help people find tickets. Cinemalix was developed with the goal of making it easier for people to search for tickets.",
            imgSrc: `${prefixPath}project-1.png`,
            url: "https://github.com/BernardBerenes/Cinemalix"
        },
        {
            title: "Tutoran",
            description: "Tutoran is a website designed to help students find tutoring solutions. Tutoran offers a live Zoom feature, allowing students to engage in live tutoring sessions.",
            imgSrc: `${prefixPath}project-2.png`,
            url: "https://github.com/BernardBerenes/Tutoran"
        },
        {
            title: "WearHouse Web",
            description: "WearHouse is an app for storing information about costume or clothing ownership, serving as a storage solution for companies.",
            imgSrc: `${prefixPath}project-3.png`,
            url: "https://github.com/BernardBerenes/WearHouse-Web"
        },
        {
            title: "WearHouse API",
            description: "WearHouse is an app for storing information about costume or clothing ownership, serving as a storage solution for companies.",
            imgSrc: `${prefixPath}project-4.png`,
            url: "https://github.com/BernardBerenes/WearHouse-API"
        },
        {
            title: "React Calculator",
            description: "React Calculator is a calculator developed using React. It was created to fulfill an IT Division assignment.",
            imgSrc: `${prefixPath}project-5.png`,
            url: "https://github.com/BernardBerenes/calculator-app"
        }
    ];
    const maxVisibleCards = 4;
    const totalCards = cards.length;

    const moveToNextCard = () => {
        setIndex((prevIndex) => (prevIndex + 1) % Math.max(1, totalCards - maxVisibleCards + 1));
    };

    useEffect(() => {
        const interval = setInterval(moveToNextCard, 4500);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(index * 100) / maxVisibleCards}%)` }}>
                {cards.map((card, idx) => (
                    <div key={idx} className="flex-shrink-0 w-1/4 h-full flex justify-center items-center p-2">
                        <div className="card bg-base-100 w-80 h-96 shadow-xl flex flex-col">
                            <figure className="w-full h-3/4flex justify-center items-center overflow-hidden">
                                <img className="w-full h-full object-cover" src={card.imgSrc} alt={card.title}/>
                            </figure>
                            <div className="p-4 flex-grow flex flex-col justify-between">
                                <div>
                                    <h2 className="card-title">{card.title}</h2>
                                    <p className="text-justify">{card.description}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <FooterIcon url={card.url} path="github" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
