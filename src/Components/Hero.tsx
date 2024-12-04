import SectionTitle from "@/Elements/SectionTitle";

const Hero: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/CV - Bernard Bereness.pdf";
        link.download = "CV - Bernard Bereness.pdf"; // Default filename for download
        link.click();
    };

    return (
        <div className="hero mt-24 lg:mt-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="src/assets/images/profile-picture.jpg" className="w-40 rounded-lg shadow-2xl" />
                <div>
                    <div className="flex justify-between items-center">
                        <SectionTitle sectionTitle="Bernard Bereness" />
                        <button onClick={handleDownload} className={`px-4 py-2 text-white font-bold rounded hover:opacity-90 transition-all duration-500 transform hover:-translate-y-2 bg-teal-500`}>Download CV</button>
                    </div>
                    <p className="text-gray-100 text-justify py-6 text-lg">Bonjour!! My name is <b className="text-cyan-400">Bernard Bereness</b>. I am a tech enthusiast currently studying at Bina Nusantara University. Alongside my studies, I am working part-time for the Bina Nusantara IT Division until February 2025. I am passionate about exploring new technologies and contributing to innovative projects in the tech industry. Continuously seek opportunities to apply my skills in real-world scenarios, eager to learn and grow within the dynamic field of technology. I primarily work with the Laravel framework and am actively progressing in other backend frameworks.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero