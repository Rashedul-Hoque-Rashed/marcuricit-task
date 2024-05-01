import './allEmployees.scss';
import { Card, Dropdown } from "react-bootstrap";

// images
import avatar from "../../../assets/images/users/avatar-7.jpg";
import { employeesData } from './data';

const AllEmployees = () => {


  return (
    <div className="allEmployees">
      <div className="header">
        <div className="textContainer">
          <h2>Employee</h2>
          <h4>Dashboard / Employee</h4>
        </div>
        <div className="actionContainer">
        <i className="uil uil-grid fs-24"></i>
        <i className="uil uil-list-ul fs-24"></i>
          <button>+ Add Employee</button>
        </div>
      </div>
      <div className="wrapper">
        {
          employeesData.map(data => (
            <Card className="employeeCard">
              <Dropdown className="action float-end" align="end">
                <Dropdown.Toggle as="a" className="cursor-pointer arrow-none">
                  <i className="uil uil-ellipsis-v fs-16 text-black"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <i className="uil uil-edit-alt me-2"></i>Edit
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-danger">
                    <i className="uil uil-trash me-2"></i>Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Card.Body className="text-center p-0">
                <div className="profile-info pb-3">
                  <img
                    src={data.img}
                    alt=""
                    className="img-thumbnail avatar-xl rounded-circle"
                  />
                  <h4 className="mt-2 mb-0">{data.name}</h4>
                  <h6 className="text-muted fw-normal mt-2 mb-3">
                    {data.role}
                  </h6>
                </div>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default AllEmployees;
