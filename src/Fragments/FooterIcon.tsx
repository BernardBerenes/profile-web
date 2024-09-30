import React from "react";
import { Link } from "react-router-dom";

interface FooterIconProps {
    url: string,
    path: string
}

const FooterIcon: React.FC<FooterIconProps> = (props) => {
    const { url, path } = props
    return (
        <Link to={url} className="hover:animate-heartbeat w-max">
            <img src={`src/assets/icons/${path}.svg`} alt={`${ path } icon`} className="h-6 w-6" />
        </Link>
    )
}

export default FooterIcon