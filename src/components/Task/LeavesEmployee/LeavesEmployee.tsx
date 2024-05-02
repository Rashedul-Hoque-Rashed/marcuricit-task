import React, { useState } from 'react';
import { Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './LeavesEmployee.scss'
import {leavesData} from './data';
import Table from '../../Table';

const LeavesEmployee = () => {
    const [showCenteredModal4, setShowCenteredModal4] = useState<boolean>(false);
    const [showCenteredModal5, setShowCenteredModal5] = useState<boolean>(false);



    const columns = [
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
                                <Dropdown.Item onClick={() => setShowCenteredModal4(true)}>
                                    <i className="uil uil-edit-alt me-2"></i>Edit
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-danger" onClick={() => setShowCenteredModal(true)}>
                                    <i className="uil uil-trash me-2"></i>Delete
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                        <Modal
                            show={showCenteredModal4}
                            onHide={() => setShowCenteredModal4(false)}
                            centered
                        >
                            <Modal.Header closeButton>
                                <h2>Edit Leaves</h2>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Leaves Type
                                        </Form.Label>
                                        <Col>
                                            <Form.Select>
                                                <option>Casual Leave</option>
                                                <option>Medical Leave</option>
                                                <option>Loss of Pay</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="title">From</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="from"
                                            id="from"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="title">To</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="to"
                                            id="to"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="date">Number Of Day</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="noOfDay"
                                            id="noOfDay"
                                            min={0}
                                            max={12}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="date">Remaining Leaves</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="noOfDay"
                                            id="noOfDay"
                                            max={12}
                                            min={0}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="example-textarea">
                                            Leave Reason
                                        </Form.Label>
                                        <Col>
                                            <Form.Control as="textarea" rows={3} id="example-textarea" />
                                        </Col>
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
            value: leavesData.length,
        },
    ];




    return (
        <div className='leavesEmployee'>
            <div className="header">
                <div className="textContainer">
                    <h2>Leaves</h2>
                    <h4>Dashboard / Leaves</h4>
                </div>
                <div className="actionContainer">
                    <button onClick={() => setShowCenteredModal5(true)}>+ Add Leave</button>
                </div>

                <Modal
                            show={showCenteredModal5}
                            onHide={() => setShowCenteredModal5(false)}
                            centered
                        >
                            <Modal.Header closeButton>
                                <h2>Add Leaves</h2>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Leaves Type
                                        </Form.Label>
                                        <Col>
                                            <Form.Select>
                                                <option>Casual Leave</option>
                                                <option>Medical Leave</option>
                                                <option>Loss of Pay</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="title">From</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="from"
                                            id="from"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="title">To</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="to"
                                            id="to"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="date">Number Of Day</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="noOfDay"
                                            id="noOfDay"
                                            min={0}
                                            max={12}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="date">Remaining Leaves</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="noOfDay"
                                            id="noOfDay"
                                            max={12}
                                            min={0}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="example-textarea">
                                            Leave Reason
                                        </Form.Label>
                                        <Col>
                                            <Form.Control as="textarea" rows={3} id="example-textarea" />
                                        </Col>
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
            <div className="boxes">
                <div className="box">
                    <h4>Annual Leave</h4>
                    <h2>12</h2>
                </div>
                <div className="box">
                    <h4>Medical Leaves</h4>
                    <h2>3</h2>
                </div>
                <div className="box">
                    <h4>Others Leaves</h4>
                    <h2>4</h2>
                </div>
                <div className="box">
                    <h4>Remaining Leave</h4>
                    <h2>5</h2>
                </div>
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

export default LeavesEmployee;