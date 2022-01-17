import { Card, Container, Row } from "react-bootstrap";
import "./FeaturedPosts.css";
const FeaturedPosts = () => {
  return (
    <>
      <Card
        className="px-2 mb-2"
        style={{
          borderRadius: "9px",
          /*  borderTop: "3px solid black" */
        }}
      >
        <Row>
          <h5 className="title__deco">About</h5>
        </Row>
        <Row className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          temporibus dolore error recusandae non nihil qui praesentium cum
          veritatis aliquam aut, nam, officiis earum iure rerum eum corporis
          repudiandae nobis! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Veniam, cupiditate dicta, est maxime tempore quam nulla nostrum
          recusandae earum numquam reiciendis.
        </Row>
      </Card>
      <Card
        className="px-2 mt-4 mb-2"
        style={{
          borderRadius: "9px",
        }}
      >
        <div>
          <h5 className="title">Featured</h5>
        </div>
        <div
          className="card mb-3"
          style={{ overflow: "hidden", margin: "10px", borderRadius: "9px" }}
        >
          <small className="text-muted py-2 px-2">Link · 1yr</small>
          <div className="row g-0" style={{ backgroundColor: "#f9fafb" }}>
            <div className="col-md-6">
              <img
                src="https://media-exp1.licdn.com/dms/image/sync/C5627AQHfFErx6yiF0Q/articleshare-shrink_800/0/1641826486687?e=1642543200&v=beta&t=EmJxf1s5L0ixuzz1MPQc31pcNCA-tpho4AY29FrdPWg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h6 className="card-title">
                  How I Built Business Intelligence/ Analytics Setup For
                  Startups{" "}
                </h6>
                <p className="card-text">
                  My approach to explain the process of building Business
                  Intelligence stack is by understanding the startup’s Why?
                  What? and How? By that I…
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default FeaturedPosts;
