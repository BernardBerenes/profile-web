import Container from "../Components/Container"
import Navbar from "../Components/Navbar"

const Index = () => {
    return (
        <Container>
            <Navbar />
            <h1 className="text-center text-4xl mt-4 font-bold text-red-600">If you visit this website, you will see a deployed Kubernetes.</h1>
        </Container>
    )
}

export default Index