import React from "react"
import Layout from "../Layout/Layout"
import ExperienceList from "@/Components/ExperienceList"
import ExperienceCarousel from "@/Fragments/ExperienceCarousel"

const Experience: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-center text-gray-50 font-bold text-2xl sm:text-4xl mt-20 lg:mt-0">Jobs</h1>
            <ExperienceList jobs={true} />
            
            <ExperienceCarousel />

            <h1 className="text-center text-gray-50 font-bold text-2xl sm:text-4xl">Organizations</h1>
            <ExperienceList jobs={false} />
        </Layout>
    )
}

export default Experience