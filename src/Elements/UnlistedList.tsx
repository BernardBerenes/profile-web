import React from "react";

interface UnlistedProps {
    children: React.ReactNode
}

const UnlistedList: React.FC<UnlistedProps> = ({children}) => {
    return (
        <ul className="list-none flex lg:gap-16 text-xl flex-col lg:flex-row">
            {children}
        </ul>
    )
}

export default UnlistedList