import { useEffect, useState } from "react";

const ExperienceCarousel: React.FC = () => {
    const images = [
        { src: 'src/assets/images/bncc.png', alt: 'Organization 1' },
        { src: 'src/assets/images/it-division.png', alt: 'Organization 2' },
        { src: 'src/assets/images/data-science.png', alt: 'Organization 3' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="w-3/12 right-56 top-64 fixed hidden lg:block">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={image.src} alt={image.alt} className="block w-full h-3/4 object-cover rounded-2xl"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCarousel;
