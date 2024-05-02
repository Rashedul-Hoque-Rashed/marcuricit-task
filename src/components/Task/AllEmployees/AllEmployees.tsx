import './allEmployees.scss';
import { Button, Card, Col, Dropdown, FloatingLabel, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { employeesData } from './data';
import { useState } from 'react';
import Table from '../../Table';

const AllEmployees = () => {
  const [showCenteredModal, setShowCenteredModal] = useState<boolean>(false);
  const [showScrollableModal, setShowScrollableModal] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const [grid, setGrid] = useState<boolean>(true);
  
  /*
   * handle form submission
   */
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const columns = [
    {
      Header: "ID",
      accessor: "id",
      sort: true,
    },
    {
      Header: "Name",
      accessor: "name",
      sort: true,
    },
    {
      Header: "Employee ID",
      accessor: "employeeId",
      sort: false,
    },
    {
      Header: "Email",
      accessor: "email",
      sort: true,
    },
    {
      Header: "Mobile",
      accessor: "mobile",
      sort: false,
    },
    {
      Header: "Join Date",
      accessor: "joiningDate",
      sort: true,
    },
    {
      Header: "Role",
      accessor: "role",
      sort: false,
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: () => {
        const [showCenteredModal, setShowCenteredModal] = useState(false);
        
        return (
          <>
            <Dropdown className="action float-end" align="end">
              <Dropdown.Toggle as="a" className="cursor-pointer arrow-none">
                <i className="uil uil-ellipsis-v fs-16 text-black"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setShowScrollableModal(true)}>
                  <i className="uil uil-edit-alt me-2"></i>Edit
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-danger" onClick={() => setShowCenteredModal(true)}>
                  <i className="uil uil-trash me-2"></i>Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Modal
              show={showCenteredModal}
              onHide={() => setShowCenteredModal(false)}
              centered
            >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body className='text-center'>
                <h3>Delete Employee</h3>
                <h6>Are you sure want to delete?</h6>
              </Modal.Body>
              <Modal.Footer className='mx-auto'>
                <Button variant="danger">Delete</Button>
                <Button variant="light" onClick={() => setShowCenteredModal(false)}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      },
      sort: false,
    },
  ];
  
  const sizePerPageList = [
    {
      text: "5",
      value: 5,
    },
    {
      text: "10",
      value: 10,
    },
    {
      text: "25",
      value: 25,
    },
    {
      text: "All",
      value: employeesData.length,
    },
  ];


  return (
    <div className="allEmployees">
      <div className="header">
        <div className="textContainer">
          <h2>Employee</h2>
          <h4>Dashboard / Employee</h4>
        </div>
        <div className="actionContainer">
          <i className="uil uil-grid fs-24" onClick={()=>setGrid(true)}></i>
          <i className="uil uil-list-ul fs-24" onClick={()=>setGrid(false)}></i>
          <button onClick={() => setShowScrollableModal(true)}>+ Add Employee</button>
        </div>


        <Modal
          show={showScrollableModal}
          onHide={() => setShowScrollableModal(false)}
          scrollable
        >
          <Modal.Header onHide={() => setShowScrollableModal(false)} closeButton>
            <Modal.Title as="h5">Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className='addEmployeeForm' noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose your email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustomPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustomConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please confirm your password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustomEmployeeID">
                <Form.Label>Employee ID</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Employee ID"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a employee id.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustomEmployeeID">
                <Form.Label>Joining Date</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="date"
                    placeholder="Joining Date"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please select your joining date.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustomEmployeeID">
                <Form.Label>Phone</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your phone number.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Company
                </Form.Label>
                <Col>
                  <Form.Select>
                    <option>Global Technologies</option>
                    <option>Delta Infotech</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Department
                </Form.Label>
                <Col>
                  <Form.Select>
                    <option>Web Development</option>
                    <option>IT Management</option>
                    <option>Marketing</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Designation
                </Form.Label>
                <Col>
                  <Form.Select>
                    <option>Web Developer</option>
                    <option>Web Designer</option>
                    <option>IOS Developer</option>
                    <option>Marketing</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>



      </div>
      <div className="wrapper">
        <div className="input">
        <FloatingLabel
          controlId="floatingInput"
          label="Employee ID"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Employee ID" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Employee Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Employee Name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Designation"
        >
          <Form.Select aria-label="Floating label select">
            <option>Select Designation</option>
            <option value="1">John Smith</option>
            <option value="2">Emily Johnson</option>
            <option value="3">Michael Brown</option>
          </Form.Select>
        </FloatingLabel>
        <button className="btn-success width-sm">
          SEARCH
        </button>
        </div>
        <div className={`${grid ? 'employeesCard' : ''}`}>    
        {
          grid ? employeesData.map(data => (
            <Card className="employeeCard">
              <Dropdown className="action float-end" align="end">
                <Dropdown.Toggle as="a" className="cursor-pointer arrow-none">
                  <i className="uil uil-ellipsis-v fs-16 text-black"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setShowScrollableModal(true)}>
                    <i className="uil uil-edit-alt me-2"></i>Edit
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-danger" onClick={() => setShowCenteredModal(true)}>
                    <i className="uil uil-trash me-2"></i>Delete
                  </Dropdown.Item>
                  <Modal
                    show={showCenteredModal}
                    onHide={() => setShowCenteredModal(false)}
                    centered
                  >
                    <Modal.Header onHide={() => setShowCenteredModal(false)} closeButton>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                      <h3>Delete Employee</h3>
                      <h6>Are you sure want to delete?</h6>
                    </Modal.Body>
                    <Modal.Footer className='mx-auto'>
                      <Button variant="danger">Delete</Button>
                      <Button variant="light" onClick={() => setShowCenteredModal(false)}>
                        Cancel
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
          )) :  <Row>
          <Col>
            <Card>
              <Card.Body>
                <Table
                  columns={columns}
                  data={employeesData}
                  pageSize={5}
                  sizePerPageList={sizePerPageList}
                  isSortable={true}
                  pagination={true}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        }
        </div>
      </div>
    </div>
  );
};

export default AllEmployees;
