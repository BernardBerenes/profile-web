import React from 'react'
import { IconCloudDemo } from './IconCloudDemo'
import SkillList from '@/Elements/SkillList'

const Skill: React.FC = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto mb-10">
            <h1 className="font-bold text-gray-50 ml-4 mt-4 text-center text-lg md:text-left sm:text-3xl ">Skills</h1>
            <div className="flex justify-center">
                <IconCloudDemo />
            </div>
            <div className="text-white flex justify-center mt-4">
                <ul className="steps">
                    <SkillList skillName="HTML" />
                    <SkillList skillName="CSS" />
                    <SkillList skillName="JavaScript" />
                    <SkillList skillName="React" />
                    <SkillList skillName="Laravel" />
                    <SkillList skillName="Docker" />
                    <SkillList skillName="Kubernetes" />
                    <SkillList skillName="Many More..." />
                </ul>
            </div>
        </div>
    )
}

export default Skill
