import SectionTitle from "@/Elements/SectionTitle";
import React from "react";

const ExperienceList: React.FC = () => {
    return (
        <div className="flex flex-col items-center mt-4 max-h-full">
            <SectionTitle sectionTitle="Jobs" />
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-red-300">
                <li>
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"className="h-5 w-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">1984</time>
                    <div className="text-lg font-black">First Macintosh computer</div>
                    The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                    personal computer. It played a pivotal role in establishing desktop publishing as a general
                    office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                    in a beige case with integrated carrying handle; it came with a keyboard and single-button
                    mouse.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2001</time>
                    <div className="text-lg font-black">iPod</div>
                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                    designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                    8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                    million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                    over 20 years, the iPod brand is the oldest to be discontinued by Apple
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2015</time>
                    <div className="text-lg font-black">Apple Watch</div>
                    The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                    tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                    iOS and other Apple products and services
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ExperienceList