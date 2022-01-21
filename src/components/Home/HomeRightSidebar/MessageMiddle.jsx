import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const MessageMiddle = ({ _id, image, name, title }) => {
  return (
    <Link to={`/profile/${_id}`}>
      <Card key={_id} className="mb-1 mt-2 ">
        <div className="d-flex align-items-center">
          <Card.Img
            src={image}
            className="sidebar-Home3-images ml-2 mt-0 d-flex align-items-baseline"
          />
          <Card.Body className="p-2 card-profile-title test3 p-0">
            <p className="mb-1 text-dark">
              {name} {name}
            </p>
            <small className="text-muted">{title}</small>
          </Card.Body>
        </div>
      </Card>
    </Link>
  )
}
export default MessageMiddle
