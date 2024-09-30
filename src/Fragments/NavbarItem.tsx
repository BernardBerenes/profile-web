import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

interface NavbarItemProps {
    url: string,
    pageName: string,
    icon?: string
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    const { url, pageName, icon } = props
    const location = useLocation()
    const [ isAnimated, setIsAnimated ] = useState(false)
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const animating = async () => {
            await sleep(2500)
            setIsAnimated(true)
        }
        animating()
    }, [])

    const isActive = location.pathname === url

    return (
        <li className={`${isAnimated ? "hover:animate-heartbeat" : "lg:animate-slideInFromLeft"} hover:text-cyan-400 hover:shadow-lg flex p-4 lg:p-0 items-center ${isActive ? "text-cyan-600 font-bold" : ""}`}>
            {icon && (
                <img src={icon} alt={`${pageName} icon`} className="h-6 mr-4" />
            )}
            <Link to={url} className={`text-lg lg:text-lg sm:text-2xl ${isActive ? "text-cyan-400" : ""}`}>{pageName}</Link>
        </li>
    )
}

export default NavbarItem
