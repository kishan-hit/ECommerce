import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryCardComponent = ({category, idx}) => {
    const images = [
        "/images/fast-foods.jpg",
        "/images/chinese-food.jpg",
        "/images/north-indian.jpg",
        "/images/south-indian.jpg",
        "/images/desserts.jpg",
        "/images/street-foods.jpg",
        "/images/sea-foods.jpg",
        "/images/pizza.jpg",
    ];
    return (
        <Card >
            <Card.Img crossOrigin='anonymous' variant="top" src={images[idx]} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <LinkContainer to='/product-list' >
                    <Button variant="primary">Go to category</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    );
};

export default CategoryCardComponent;