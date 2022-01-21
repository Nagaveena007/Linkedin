import MessageMain from "../Components/MessageMain"
import MessageRightSidebar from "../Components/MessageRightSidebar"
import MessageMiddle from "../Components/MessageMiddle"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const Messages = () => {
  return (
    <Container>
      <Row>
        <Col xs="3">
          <MessageMain />
        </Col>
        <Col xs="6">
          <MessageMiddle />
        </Col>
        <Col xs="3">
          <MessageRightSidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default Messages
