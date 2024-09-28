import Layout from "../Layout/Layout"
import Hero from "../Components/Hero"
import Carousel from "../Components/Carousel"

const Index: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-center text-4xl mt-4 font-bold text-gray-100">Website with Deployed Kubernetes.</h1>
            <Hero />
            <Carousel />
        </Layout>
    )
}

export default Index