import { Button, Card, Col, Dropdown, Modal, Row } from 'react-bootstrap';
import './Holiday.scss';
import Table from '../../Table';
import { useState } from 'react';
import { holidayData } from './data'
import { Form } from 'react-bootstrap';

const Holiday = () => {


    const [showCenteredModal2, setShowCenteredModal2] = useState<boolean>(false);
    const [showCenteredModal3, setShowCenteredModal3] = useState<boolean>(false);


    const columns = [
        {
            Header: "ID",
            accessor: "id",
            sort: true,
        },
        {
            Header: "Title",
            accessor: "title",
            sort: true,
        },
        {
            Header: "Holiday Date",
            accessor: "date",
            sort: false,
        },
        {
            Header: "Day",
            accessor: "day",
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
                                <Dropdown.Item onClick={() => setShowCenteredModal2(true)}>
                                    <i className="uil uil-edit-alt me-2"></i>Edit
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-danger" onClick={() => setShowCenteredModal(true)}>
                                    <i className="uil uil-trash me-2"></i>Delete
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                        <Modal
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
            value: holidayData.length,
        },
    ];



    return (
        <div className='holiday'>
            <div className="header">
                <div className="textContainer">
                    <h2>Holiday</h2>
                    <h4>Dashboard / Holiday</h4>
                </div>
                <div className="actionContainer">
                    <button onClick={() => setShowCenteredModal3(true)}>+ Add Holiday</button>
                </div>


                <Modal
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
                        </Modal>



            </div>


            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Table
                                columns={columns}
                                data={holidayData}
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

export default Holiday;