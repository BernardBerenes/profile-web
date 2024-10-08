import React from 'react'

interface ExperienceItemProps {
    time: string,
    organization: string,
    description: string[],
    list?: boolean
    last?: boolean
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
    const { time, organization, description, list = true, last = false } = props

    return (
        <li>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-start md:text-end">
                <time className="font-mono italic">{ time }</time>
                <div className="text-lg font-black">{ organization }</div>
                <ul className={`w-11/12 md:w-2/3 ml-4 md:ml-auto text-justify ${ list ? 'list-disc' : 'list-none'}`}>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            {!last && <hr className="bg-white" /> }
        </li>
    )
}

export default ExperienceItem