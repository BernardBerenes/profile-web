import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface NavbarItemProps {
    url: string,
    pageName: string
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    const { url, pageName } = props
    const [ isAnimated, setIsAnimated ] = useState(false)
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const animating = async () => {
            await sleep(2500)
            setIsAnimated(true)
        }
        animating()
    }, [])

    return (
        <li className={`${isAnimated ? "hover:animate-heartbeat" : "animate-slideInFromLeft"} hover:text-orange-400 hover:shadow-lg`}>
            <Link to={url}>{ pageName }</Link>
        </li>
    )
}

export default NavbarItem