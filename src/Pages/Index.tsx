import Layout from "../Layout/Layout"
import Hero from "../Components/Hero"
import Carousel from "../Components/Project"
import Skill from "../Components/Skill"

const Index: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <Carousel />
            <Skill />
        </Layout>
    )
}

export default Index