import React from "react";
import ExperienceItem from "@/Fragments/ExperienceItem";

interface ExperienceListProps {
    jobs: boolean;
}

const ExperienceList: React.FC<ExperienceListProps> = (props) => {
    const { jobs } = props;

    return (
        <div className="flex flex-col items-center">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-gray-50">
                {jobs ? (
                    <>
                        <ExperienceItem 
                            time="???" 
                            organization="Next Journey?" 
                            description={[ 
                                "I am incredibly enthusiastic about pursuing a career as either a Software Engineer or a DevOps Engineer, as both roles offer unique opportunities to work at the intersection of technology and problem-solving. I am eager to continuously expand my technical skills and contribute to building scalable, efficient, and innovative solutions, whether it's by writing clean, maintainable code as a Software Engineer or by optimizing development workflows and automating infrastructure processes as a DevOps Engineer."
                            ]}
                            list={false}
                        />
                        <ExperienceItem 
                            time="March 2023 - March 2024" 
                            organization="Software Engineer at Bina Nusantara IT Division" 
                            description={[ 
                                "We're implementing new technologies that can be used by the Software Solution Group (SSG) or any other division.",
                                "Conducting weekly meetings to provide progress updates.",
                                "Researching and documenting the differences in features between Datadog and New Relic.",
                                "Conducting a Proof of Concept (POC) with Datadog and New Relic for Application Performance Monitoring, to be implemented at Bina Nusantara.",
                                "Researching media players to be replaced by Azure Media Services, including MediaKind (MK.IO), Wowza, and BlendVision.",
                                "Researching and implementing Kubernetes for several Bina Nusantara applications in collaboration with the IT Technology Team.",
                                "Researching and implementing Redis on Kubernetes."
                            ]}
                        />
                        <ExperienceItem 
                            time="October 2023 - May 2024" 
                            organization="Praetorian at Bina Nusantara Computer Club" 
                            description={[ 
                                "Conducting weekly training sessions to enhance Back-End Development skills using the Laravel framework.",
                                "Working on a final project about Back-End Development selection.",
                                "Teaching members of the Bina Nusantara Computer Club (BNCC) about Back-End Development with Laravel, covering topics such as Laravel architecture, Create Read Update Delete (CRUD), sessions, middleware, authentication, authorization, and more.",
                                "Assessing the mid and final projects of BNCC members."
                            ]}
                            last={true}
                        />
                    </>
                ) : (
                    <>
                        <ExperienceItem 
                            time="April 2023 - November 2023" 
                            organization="Activist at Data Science Club" 
                            description={[ 
                                "Completing assignments related to data science or data analysis, focusing on statistics and other topics using Python.",
                                "Designing the Data Science Club website using Figma, focusing on creating an intuitive user experience and visually appealing interface that aligns with the club’s goals,",
                                "Developing the Data Science Club website using React."
                            ]}
                        />
                        <ExperienceItem 
                            time="November 2022 - November 2023" 
                            organization="Member at Bina Nusantara Computer Club" 
                            description={[ 
                                "Actively participating in weekly bootcamp activities organized by the Praetorian division to enhance and develop comprehensive Back-End Development skills, focusing on best practices, modern tools, and hands-on projects aimed at building scalable, efficient server-side applications.",
                                "Engaging in discussions with other members.",
                                "Working on the mid and final projects assigned."
                            ]}
                            last={true}
                        />
                    </>
                )}
            </ul>
        </div>
    );
};

export default ExperienceList;
