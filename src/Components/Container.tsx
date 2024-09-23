import React from "react"

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="h-screen w-full font-roboto">
            {children}
        </div>
    )
}

export default Container