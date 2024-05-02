import { Card, Col, Dropdown, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import './leavesAdmin.scss';
import { useState } from 'react';
import {leavesData} from './data'
import Table from '../../Table';
import { Button } from 'react-bootstrap';
import {CellProps} from 'react-table'

const LeavesAdmin = () => {


    const columns = [
        {
            Header: "Employee",
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
            Header: "Leave Type",
            accessor: "leaveType",
            sort: false,
        },
        {
            Header: "From",
            accessor: "from",
            sort: true,
        },
        {
            Header: "To",
            accessor: "to",
            sort: true,
        },
        {
            Header: "No Of Days",
            accessor: "noOfDay",
            sort: true,
        },
        {
            Header: "Reason",
            accessor: "reason",
            sort: false,
        },
        {
            Header: "Status",
            accessor: "status",
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
                                <Dropdown.Item>
                                    <i className="uil uil-edit-alt me-2"></i>Edit
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-danger" onClick={() => setShowCenteredModal(true)}>
                                    <i className="uil uil-trash me-2"></i>Delete
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                        {/* <Modal
                            show={showCenteredModal2}
                            onHide={() => setShowCenteredModal2(false)}
                            centered
                        >
                            <Modal.Header closeButton>
                                <h2>Edit Holiday</h2>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="title">Holiday Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="title"
                                            id="title"
                                        />
                                    </Form.Group>

                                    <Form.Group className="">
                                        <Form.Label htmlFor="date">Holiday Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date"
                                            id="date"
                                        />
                                    </Form.Group>


                    
                                </Form>
                            </Modal.Body>
                            <Modal.Footer className='mx-auto'>
                            <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                            </Modal.Footer>
                        </Modal> */}


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
            value: leavesData.length,
        },
    ];



    return (
        <div className='leavesAdmin'>
            <div className="header">
                <div className="textContainer">
                    <h2>Leaves</h2>
                    <h4>Dashboard / Leaves</h4>
                </div>
                <div className="actionContainer">
                    <button>+ Add Leave</button>
                </div>

                {/* <Modal
                            show={showCenteredModal3}
                            onHide={() => setShowCenteredModal3(false)}
                            centered
                        >
                            <Modal.Header closeButton>
                                <h2>Add Holiday</h2>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="title">Holiday Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="title"
                                            id="title"
                                        />
                                    </Form.Group>

                                    <Form.Group className="">
                                        <Form.Label htmlFor="date">Holiday Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date"
                                            id="date"
                                        />
                                    </Form.Group>


                    
                                </Form>
                            </Modal.Body>
                            <Modal.Footer className='mx-auto'>
                            <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                            </Modal.Footer>
                        </Modal> */}

            </div>
            <div className="boxes">
                <div className="box">
                    <h4>Today Presents</h4>
                    <h2>12 / 60</h2>
                </div>
                <div className="box">
                    <h4>Planned Leaves</h4>
                    <h2>8 <span><small>Today</small></span></h2>
                </div>
                <div className="box">
                    <h4>Unplanned Leaves</h4>
                    <h2>0 <span><small>Today</small></span></h2>
                </div>
                <div className="box">
                    <h4>Pending Requests</h4>
                    <h2>12</h2>
                </div>
            </div>
            <div className="input">
          <FloatingLabel
            controlId="floatingInput"
            label="Employee Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Employee Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Leave Type"
          >
            <Form.Select aria-label="--Select--">
              <option value="1">Casual Leave</option>
              <option value="2">Medical Leave</option>
              <option value="3">Loss of Pay</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Leave Status"
          >
            <Form.Select aria-label="--Select--">
              <option value="1">Approve</option>
              <option value="2">Pending</option>
              <option value="3">Decline</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="From"
            className="mb-3"
          >
            <Form.Control type="date" placeholder="From" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="To"
            className="mb-3"
          >
            <Form.Control type="date" placeholder="To" />
          </FloatingLabel>
          <button className="btn-success width-sm">
            SEARCH
          </button>
        </div>


        <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Table
                                columns={columns}
                                data={leavesData}
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
    );
};

export default LeavesAdmin;