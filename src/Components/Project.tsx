import React, { useEffect, useState } from 'react';
import FooterIcon from '../Fragments/FooterIcon';
import SectionTitle from '@/Elements/SectionTitle';

const Carousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(5);
    const prefixPath = "src/assets/images/";

    const cards = [
        {
            title: "Cinemalix",
            description: "Cinemalix is a website designed to help people find tickets. Cinemalix was developed with the goal of making it easier for people to search for tickets.",
            techStack: "Laravel",
            imgSrc: `${prefixPath}project-1.png`,
            url: "https://github.com/BernardBerenes/Cinemalix"
        },
        {
            title: "Tutoran",
            description: "Tutoran is a website designed to help students find tutoring solutions. Tutoran offers a live Zoom feature, allowing students to engage in live tutoring sessions.",
            techStack: "Laravel",
            imgSrc: `${prefixPath}project-2.png`,
            url: "https://github.com/BernardBerenes/Tutoran"
        },
        {
            title: "WearHouse Web",
            description: "WearHouse is an app for storing information about costume or clothing ownership, serving as a storage solution for companies.",
            techStack: "HTML CSS JS",
            imgSrc: `${prefixPath}project-3.png`,
            url: "https://github.com/BernardBerenes/WearHouse-Web"
        },
        {
            title: "WearHouse API",
            description: "WearHouse is an app for storing information about costume or clothing ownership, serving as a storage solution for companies.",
            techStack: ".NET CORE",
            imgSrc: `${prefixPath}project-4.png`,
            url: "https://github.com/BernardBerenes/WearHouse-API"
        },
        {
            title: "React Calculator",
            description: "React Calculator is a calculator developed using React. It was created to fulfill an IT Division assignment.",
            techStack: "React JS",
            imgSrc: `${prefixPath}project-5.png`,
            url: "https://github.com/BernardBerenes/calculator-app"
        },
        {
            title: "ERamen Shop",
            description: "ERamen Shops is a website used for marketing a ramen shop, with the hope that it can expand the restaurant's connections.",
            techStack: "HTML CSS JS",
            imgSrc: `${prefixPath}project-6.png`,
            url: "https://github.com/BernardBerenes/ERamen-Shops"
        }
    ];

    const totalCards = cards.length;
    const updateVisibleCards = () => {
        const width = window.innerWidth;
        if (width >= 1280) {
            setVisibleCards(5);
        } else if (width >= 1024) {
            setVisibleCards(4);
        } else if (width >= 768) {
            setVisibleCards(3);
        } else if (width >= 600) {
            setVisibleCards(2);
        } else {
            setVisibleCards(1);
        }
    };

    useEffect(() => {
        const moveToNextCard = () => {
            setIndex((prevIndex) => (prevIndex + 1) % (totalCards - visibleCards + 1));
        };

        updateVisibleCards();
        
        window.addEventListener('resize', updateVisibleCards);

        const interval = setInterval(moveToNextCard, 3500);

        return () => {
            window.removeEventListener('resize', updateVisibleCards);
            clearInterval(interval);
        };
    }, [totalCards, visibleCards]);

    return (
        <div className="relative w-full max-w-7xl mx-auto">
            <SectionTitle sectionTitle="Projects" additionalCSS="ms-4" />
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(index * 100) / visibleCards}%)` }}>
                    {cards.map((card, idx) => (
                        <div key={ idx } className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full flex justify-center items-center p-4">
                            <div className="card w-72 h-96 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-out">
                                <figure className="w-full h-40 flex justify-center items-center overflow-hidden">
                                    <img className="w-full h-full object-cover rounded-t-xl" src={ card.imgSrc } alt={ card.title } />
                                </figure>
                                <div className="p-4 flex-grow flex flex-col justify-between bg-gray-700 text-gray-50 rounded-b-xl">
                                    <div>
                                        <h2 className="card-title text-lg font-semibold">{ card.title }</h2>
                                        <p className="text-sm text-justify">{ card.description }</p>
                                    </div>
                                    <div className="card-actions justify-between">
                                        <h6 className="text-sm">{ card.techStack }</h6>
                                        <FooterIcon url={ card.url } path="github" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
