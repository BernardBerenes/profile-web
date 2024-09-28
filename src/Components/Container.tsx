import React, { useEffect, useState } from "react"
import Test from "./Loading"

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2250)
        
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex flex-col h-screen w-full font-roboto">
            {isLoading ? (
                <Test />
            ) : (
                children
            )}
        </div>
    )
}

export default Container