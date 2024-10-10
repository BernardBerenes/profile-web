import React, { useEffect, useState } from "react"
import Loading from "./Loading"

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1250)
        
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex flex-col min-h-screen w-full font-roboto">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="flex-grow flex flex-col">{children}</div>
            )}
        </div>
    )
}

export default Container