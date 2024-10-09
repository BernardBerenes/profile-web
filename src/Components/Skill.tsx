import React from 'react'
import { IconCloudDemo } from './IconCloudDemo'
import SkillList from '@/Fragments/SkillList'
import SectionTitle from '@/Elements/SectionTitle'

const Skill: React.FC = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto mb-12">
            <SectionTitle sectionTitle="Skills" additionalCSS="ms-4 mt-4" />
            <div className="flex justify-center">
                <IconCloudDemo />
            </div>
            <div className="text-white flex justify-center mt-4">
                <ul className="steps hidden lg:inline-grid">
                    <SkillList skillName="HTML" />
                    <SkillList skillName="CSS" />
                    <SkillList skillName="JavaScript" />
                    <SkillList skillName="React" />
                    <SkillList skillName="Laravel" />
                    <SkillList skillName="Docker" />
                    <SkillList skillName="Kubernetes" />
                    <SkillList skillName="Many More..." />
                </ul>
                <ul className="steps steps-vertical block lg:hidden">
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
