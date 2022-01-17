/* import { useState } from 'react' */
import { Col } from "react-bootstrap"
import "./sidebar.css";
import EditSidebox from "./EditSidebox";
import PromotedSideBox from "./PromotedSideBox";

const Sidebar = () => {
    return(
        <Col md={2} className="offset-8 bg px-0">
            <EditSidebox />
            <PromotedSideBox />
        </Col>
    )
}

export default Sidebar