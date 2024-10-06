import Layout from "../Layout/Layout"
import Hero from "../Components/Hero"
import Skill from "../Components/Skill"
import Project from "../Components/Project"

const Index: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <Project />
            <Skill />
        </Layout>
    )
}

export default Index