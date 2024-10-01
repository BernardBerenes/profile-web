import React from "react";

interface SectionTitleProps {
    sectionTitle: string;
    additionalCSS?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    const { sectionTitle, additionalCSS } = props;

    return (
        <h1 className={`text-gray-100 text-2xl font-bold text-center lg:text-left sm:text-4xl ${additionalCSS ? additionalCSS : ""}`}>
            {sectionTitle}
        </h1>
    );
};

export default SectionTitle;
