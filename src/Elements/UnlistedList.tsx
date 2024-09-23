import React from "react";

interface UnlistedProps {
    children: React.ReactNode
}

const UnlistedList: React.FC<UnlistedProps> = ({children}) => {
    return (
        <ul className="list-none flex gap-16 text-xl">
            {children}
        </ul>
    )
}

export default UnlistedList