import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";

const HomePage = () => {
    const categories = [
        "Fast foods",
        "Chinese",
        "North Indian",
        "South Indian",
        "Desserts",
        "Street foods",
        "Sea foods",
        "pizza",
    ];
    return (
        <>
            <ProductCarouselComponent />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {
                        categories.map((category, idx) => (
                            <CategoryCardComponent key={idx} category={category} idx={idx} />
                    ))}
                </Row>
            </Container>
        </>
    )
};

export default HomePage;