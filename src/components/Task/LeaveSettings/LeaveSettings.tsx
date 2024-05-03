import { useState } from 'react';
import './LeaveSettings.scss'
import { Button, Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import Table from '../../Table';
import { leaveData } from './data'
import { CellProps } from 'react-table'


const LeaveSettings = () => {

    const [showCenteredModal8, setShowCenteredModal8] = useState<boolean>(false);
    const [showCenteredModal9, setShowCenteredModal9] = useState<boolean>(false);
    const [toggleOn, setToggleOn] = useState<boolean>(true);
    const [edit1, setEdit1] = useState<boolean>(false);
    const [edit2, setEdit2] = useState<boolean>(false);
    const [edit3, setEdit3] = useState<boolean>(false);
    const [edit4, setEdit4] = useState<boolean>(false);
    const [edit5, setEdit5] = useState<boolean>(false);
    const [edit6, setEdit6] = useState<boolean>(false);
    const [edit7, setEdit7] = useState<boolean>(false);
    const [edit8, setEdit8] = useState<boolean>(false);
    const [edit9, setEdit9] = useState<boolean>(false);
    const [edit10, setEdit10] = useState<boolean>(false);


    const columns = [
        {
            Header: "Name",
            accessor: "serviceTime",
            sort: true,
        },
        {
            Header: "Day",
            accessor: "day",
            sort: false,
        },
        {
            Header: "Assignee",
            accessor: "name",
            Cell: (props: CellProps<any>) => {
                const { img, name } = props.row.original;
                return (
                    <div className="d-flex align-items-center">
                        <img src={img} alt={name} className="me-2 rounded-circle" style={{ width: '30px', height: '30px' }} />
                        <span>{name}</span>
                    </div>
                );
            },
            sort: true,
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
                                <Dropdown.Item onClick={() => setShowCenteredModal9(true)}>
                                    <i className="uil uil-edit-alt me-2"></i>Edit
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-danger" onClick={() => setShowCenteredModal(true)}>
                                    <i className="uil uil-trash me-2"></i>Delete
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                        <Modal
                            show={showCenteredModal9}
                            onHide={() => setShowCenteredModal9(false)}
                            centered
                        >
                            <Modal.Header closeButton>
                                <h2>Edit Custom Policy</h2>
                            </Modal.Header>
                            <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="title">Policy Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    id="title"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="day">Day</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="day"
                                    id="day"
                                />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label htmlFor="employee">Add Employee</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="employee"
                                    id="employee"
                                />
                            </Form.Group>



                        </Form>
                    </Modal.Body>
                            <Modal.Footer className='mx-auto'>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Modal>


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
            value: leaveData.length,
        },
    ];

    return (
        <div className='leaveSettings'>
            <div className="header">
                <div className="textContainer">
                    <h2>Leave Settings</h2>
                    <h4>Dashboard / Leave Settings</h4>
                </div>
                <div className="actionContainer">
                    <button onClick={() => setShowCenteredModal8(true)}>+ Add New</button>
                </div>
                <Modal
                    show={showCenteredModal8}
                    onHide={() => setShowCenteredModal8(false)}
                    centered
                >
                    <Modal.Header closeButton>
                        <h2>Add Custom Policy</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="title">Policy Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    id="title"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="day">Day</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="day"
                                    id="day"
                                />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label htmlFor="employee">Add Employee</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="employee"
                                    id="employee"
                                />
                            </Form.Group>



                        </Form>
                    </Modal.Body>
                    <Modal.Footer className='mx-auto'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


            <div className='content'>
                <div className='titleDiv'>
                    <h4 className="title">Annual</h4>
                    <button className={`${toggleOn ? 'toggleBtnOn' : 'toggleBtnOff'} `} onClick={() => setToggleOn(!toggleOn)}>
                        {
                            toggleOn ? 'ON' : 'OFF'
                        }
                        <i className='uli uil-circle'></i>
                    </button>
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="days">Days</Form.Label>
                            <Form.Control
                                type="text"
                                name="days"
                                id="days"
                            />
                        </Form.Group>
                    </Form>
                    {
                        edit1 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit1(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit1(true)}>Edit</button>
                    }
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Label htmlFor="forward">Carry forward</Form.Label>
                        <Form.Group className="mb-3 forward">
                            <Form.Control
                                type="text"
                                name="forward"
                                id="forward"
                            />
                            <div className='check'>
                                <input type="radio" name="option" id="no" />No
                                <input type="radio" name="option" id="yes" />Yes
                            </div>
                        </Form.Group>
                    </Form>
                    {
                        edit2 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit2(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit2(true)}>Edit</button>
                    }
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Label htmlFor="earned">Earned leave</Form.Label>
                        <Form.Group className="mb-3">
                            <div className='check'>
                                <input type="radio" name="option" id="no" />No
                                <input type="radio" name="option" id="yes" />Yes
                            </div>
                        </Form.Group>
                    </Form>
                    {
                        edit3 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit3(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit3(true)}>Edit</button>
                    }
                </div>
                <div className='policy'>
                    <h5>Custom Policy</h5>
                    <button onClick={() => setShowCenteredModal8(true)}>+ Add Custom Policy</button>
                    <Modal
                    show={showCenteredModal8}
                    onHide={() => setShowCenteredModal8(false)}
                    centered
                >
                    <Modal.Header closeButton>
                        <h2>Add Custom Policy</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="title">Policy Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    id="title"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="day">Day</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="day"
                                    id="day"
                                />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label htmlFor="employee">Add Employee</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="employee"
                                    id="employee"
                                />
                            </Form.Group>



                        </Form>
                    </Modal.Body>
                    <Modal.Footer className='mx-auto'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Table
                                    columns={columns}
                                    data={leaveData}
                                    pageSize={5}
                                    sizePerPageList={sizePerPageList}
                                    isSortable={true}
                                    pagination={true}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='content'>
                <div className='titleDiv'>
                    <h4 className="title">Sick</h4>
                    <button className={`${toggleOn ? 'toggleBtnOn' : 'toggleBtnOff'} `} onClick={() => setToggleOn(!toggleOn)}>
                        {
                            toggleOn ? 'ON' : 'OFF'
                        }
                        <i className='uli uil-circle'></i>
                    </button>
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="days">Days</Form.Label>
                            <Form.Control
                                type="text"
                                name="days"
                                id="days"
                            />
                        </Form.Group>
                    </Form>
                    {
                        edit4 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit4(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit4(true)}>Edit</button>
                    }
                </div>
                
                <div className='policy'>
                    <h5>Custom Policy</h5>
                    <button onClick={() => setShowCenteredModal8(true)}>+ Add Custom Policy</button>
                    <Modal
                    show={showCenteredModal8}
                    onHide={() => setShowCenteredModal8(false)}
                    centered
                >
                    <Modal.Header closeButton>
                        <h2>Add Custom Policy</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="title">Policy Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    id="title"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="day">Day</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="day"
                                    id="day"
                                />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label htmlFor="employee">Add Employee</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="employee"
                                    id="employee"
                                />
                            </Form.Group>



                        </Form>
                    </Modal.Body>
                    <Modal.Footer className='mx-auto'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Table
                                    columns={columns}
                                    data={leaveData}
                                    pageSize={5}
                                    sizePerPageList={sizePerPageList}
                                    isSortable={true}
                                    pagination={true}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='content'>
                <div className='titleDiv'>
                    <h4 className="title">Hospitalisation</h4>
                    <button className={`${toggleOn ? 'toggleBtnOn' : 'toggleBtnOff'} `} onClick={() => setToggleOn(!toggleOn)}>
                        {
                            toggleOn ? 'ON' : 'OFF'
                        }
                        <i className='uli uil-circle'></i>
                    </button>
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="days">Days</Form.Label>
                            <Form.Control
                                type="text"
                                name="days"
                                id="days"
                            />
                        </Form.Group>
                    </Form>
                    {
                        edit5 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit5(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit5(true)}>Edit</button>
                    }
                </div>
            </div>
            <div className='content'>
                <div className='titleDiv'>
                    <h4 className="title">Maternity Assigned to female only</h4>
                    <button className={`${toggleOn ? 'toggleBtnOn' : 'toggleBtnOff'} `} onClick={() => setToggleOn(!toggleOn)}>
                        {
                            toggleOn ? 'ON' : 'OFF'
                        }
                        <i className='uli uil-circle'></i>
                    </button>
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="days">Days</Form.Label>
                            <Form.Control
                                type="text"
                                name="days"
                                id="days"
                            />
                        </Form.Group>
                    </Form>
                    {
                        edit6 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit6(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit6(true)}>Edit</button>
                    }
                </div>
            </div>
            <div className='content'>
                <div className='titleDiv'>
                    <h4 className="title">Paternity Assigned to male only</h4>
                    <button className={`${toggleOn ? 'toggleBtnOn' : 'toggleBtnOff'} `} onClick={() => setToggleOn(!toggleOn)}>
                        {
                            toggleOn ? 'ON' : 'OFF'
                        }
                        <i className='uli uil-circle'></i>
                    </button>
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="days">Days</Form.Label>
                            <Form.Control
                                type="text"
                                name="days"
                                id="days"
                            />
                        </Form.Group>
                    </Form>
                    {
                        edit7 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit7(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit7(true)}>Edit</button>
                    }
                </div>
            </div>
            <div className='content'>
                <div className='titleDiv'>
                    <h4 className="title">LOP</h4>
                    <button className={`${toggleOn ? 'toggleBtnOn' : 'toggleBtnOff'} `} onClick={() => setToggleOn(!toggleOn)}>
                        {
                            toggleOn ? 'ON' : 'OFF'
                        }
                        <i className='uli uil-circle'></i>
                    </button>
                </div>
                <div>
                    <Button className='btn-danger mb-3'>
                        Delete
                    </Button>
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="days">Days</Form.Label>
                            <Form.Control
                                type="text"
                                name="days"
                                id="days"
                            />
                        </Form.Group>
                    </Form>
                    {
                        edit8 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit8(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit8(true)}>Edit</button>
                    }
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Label htmlFor="forward">Carry forward</Form.Label>
                        <Form.Group className="mb-3 forward">
                            <Form.Control
                                type="text"
                                name="forward"
                                id="forward"
                            />
                            <div className='check'>
                                <input type="radio" name="option" id="no" />No
                                <input type="radio" name="option" id="yes" />Yes
                            </div>
                        </Form.Group>
                    </Form>
                    {
                        edit9 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit9(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit9(true)}>Edit</button>
                    }
                </div>
                <div className='formDiv'>
                    <Form>
                        <Form.Label htmlFor="earned">Earned leave</Form.Label>
                        <Form.Group className="mb-3">
                            <div className='check'>
                                <input type="radio" name="option" id="no" />No
                                <input type="radio" name="option" id="yes" />Yes
                            </div>
                        </Form.Group>
                    </Form>
                    {
                        edit10 ? <div className='actionBtn'>
                            <button className='cancel' onClick={()=>setEdit10(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div> : <button className='editBtn' onClick={()=>setEdit10(true)}>Edit</button>
                    }
                </div>
                <div className='policy'>
                    <h5>Custom Policy</h5>
                    <button onClick={() => setShowCenteredModal8(true)}>+ Add Custom Policy</button>
                    <Modal
                    show={showCenteredModal8}
                    onHide={() => setShowCenteredModal8(false)}
                    centered
                >
                    <Modal.Header closeButton>
                        <h2>Add Custom Policy</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="title">Policy Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    id="title"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="day">Day</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="day"
                                    id="day"
                                />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label htmlFor="employee">Add Employee</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="employee"
                                    id="employee"
                                />
                            </Form.Group>



                        </Form>
                    </Modal.Body>
                    <Modal.Footer className='mx-auto'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Table
                                    columns={columns}
                                    data={leaveData}
                                    pageSize={5}
                                    sizePerPageList={sizePerPageList}
                                    isSortable={true}
                                    pagination={true}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LeaveSettings;