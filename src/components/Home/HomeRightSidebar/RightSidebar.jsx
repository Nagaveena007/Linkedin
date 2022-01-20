import { Card, Button } from "react-bootstrap";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <>
      <Card id="right-sidebar" className="py-2" style={{ borderRadius: "7px" }}>
        <span className="d-flex flex-row">
          <Card.Title className="my-auto px-2">Add your feed </Card.Title>
          <i
            className="bi bi-info-square-fill ml-auto my-auto pr-2"
            style={{ color: "gray" }}
          ></i>
        </span>
        <Card.Body>
          <div className="d-flex flex-row mb-2">
            <i
              className="bi bi-circle-fill mr-3"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h6 className="mb-0">Huawei</h6>
              <p>Company · Telecomunications</p>
              <Button
                type="button"
                class="btn-connect btn btn-primary px-2 py-1"
              >
                <i class="bi bi-plus"></i> Follow
              </Button>
            </span>
          </div>
          <div className="d-flex flex-row mb-2">
            <i
              className="bi bi-circle-fill mr-3"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h6 className="mb-0">Natalia Gutiérrez Botero</h6>
              <p>Gerente de RRHH,Director de RRHH ...</p>
              <Button
                type="button"
                class="btn-connect btn btn-primary px-2 py-1"
              >
                <i class="bi bi-plus"></i> Follow
              </Button>
            </span>
          </div>
          <div className="d-flex flex-row">
            <i
              className="bi bi-circle-fill mr-3"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h6 className="mb-0">Samsung Electronics</h6>
              <p>Company · Consumer Electronics</p>
              <Button
                type="button"
                class="btn-connect btn btn-primary px-2 py-1"
              >
                <i class="bi bi-plus"></i> Follow
              </Button>
            </span>
          </div>
        </Card.Body>
        <Card.Footer className="pt-2 pb-0">
          <p>
            {" "}
            View all recommendations <i class="bi bi-arrow-right ml-2"></i>
          </p>
        </Card.Footer>
      </Card>
      <Card id="right-sidebar" className="mt-2">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53UK7awzablMA4_9zwAs-M1GfWpSGD6k-OQ&usqp=CAU" alt="linkedin adv" />
      </Card>
    </>
  );
};

export default RightSidebar;
