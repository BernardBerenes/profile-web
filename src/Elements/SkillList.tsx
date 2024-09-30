import React from "react";

interface SkillListProps {
    skillName: string
}

const SkillList: React.FC<SkillListProps> = (props) => {
    const { skillName } = props
    const url = skillName.toLowerCase()
    const prefixPath = "src/assets/icons/"

    return (
        <li data-content="" className="step step-info">
            <img src={`${prefixPath}${url}.svg`} alt="" className="w-1/4 hidden lg:block" />
            <h4 className="text-xl">{ skillName }</h4>
        </li>
    )
}

export default SkillList