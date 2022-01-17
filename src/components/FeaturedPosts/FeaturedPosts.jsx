import { Container, Row } from "react-bootstrap";
import "./FeaturedPosts.css";
const FeaturedPosts = () => {
  return (
    <>
      <Container className="">
        <Row>
          <h5 className="title">About</h5>
        </Row>
        <Row className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          temporibus dolore error recusandae non nihil qui praesentium cum
          veritatis aliquam aut, nam, officiis earum iure rerum eum corporis
          repudiandae nobis! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Veniam, cupiditate dicta, est maxime tempore quam nulla nostrum
          recusandae earum numquam reiciendis.
        </Row>
      </Container>
    </>
  );
};
export default FeaturedPosts;
