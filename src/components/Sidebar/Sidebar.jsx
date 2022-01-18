/* import { useState } from 'react' */
import { Col } from "react-bootstrap"
import "./Sidebar.css";
import "./alsoViewed.css"

import EditSidebox from "./EditSidebox";
import PromotedSideBox from "./PromotedSideBox";
import AlsoViewed from "./AlsoViewed";

const Sidebar = () => {
    return(
        <Col md={2} className="offset-8 bg px-0">
            <EditSidebox />
            <PromotedSideBox />
            <AlsoViewed />
        </Col>
    )
}

export default Sidebar