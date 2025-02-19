import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Dummy Image Component (Agar file nahi hai)
const ExampleCarouselImage = ({ text }) => {
    return (
        <div style={{ height: "250px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h2>{text}</h2>
        </div>
    );
};

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
