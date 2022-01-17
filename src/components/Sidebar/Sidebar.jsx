/* import { useState } from 'react' */
import { Col } from "react-bootstrap"
import "./sidebar.css";
import SideboxEdit from "./SideboxEdit";

const Sidebar = () => {
    return(
        <Col md={2} className="offset-8 bg px-0">
            <SideboxEdit />
        </Col>
    )
}

export default Sidebar