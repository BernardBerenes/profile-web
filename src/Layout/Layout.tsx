import React from "react";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <Container>
            <Navbar />
                <main className="flex-grow flex flex-col bg-gray-900">{children}</main>
            <Footer />
        </Container>
    )
}

export default Layout