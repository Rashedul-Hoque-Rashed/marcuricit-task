import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import './attendanceAdmin.scss'
import { CellProps } from 'react-table';
import Table from '../../Table';
import {attendanceData} from './data'
import { Form } from 'react-bootstrap';
import { useState } from 'react';



interface AttendanceData {
    day: number;
    status: string;
}

const AttendanceAdmin = () => {

    const [showCenteredModal7, setShowCenteredModal7] = useState<boolean>(false);


    const columns = [
        {
            Header: "Employee",
            accessor: "employeeName",
            Cell: (props: CellProps<any>) => {
                const { img, employeeName } = props.row.original;
                return (
                    <div className="d-flex align-items-center">
                        <img src={img} alt={employeeName} className="me-2 rounded-circle" style={{ width: '30px', height: '30px' }} />
                        <span>{employeeName}</span>
                    </div>
                );
            },
            sort: true,
        },
        ...Array.from({ length: 30 }, (_, index) => {
            const day = index + 1;
            return {
                Header: day.toString(),
                accessor: `day${day}`,
                Cell: (props: CellProps<any>) => {
                    const { attendance } = props.row.original;
                    const filter = attendance.filter((data:AttendanceData) => data.day === day)
                    const status = filter[0]?.status;
                    console.log(status === 'present');
                    return status === 'present' ? <div>
                        <i onClick={() => setShowCenteredModal7(true)} className='uil uil-check fs-16 text-success cursor-pointer'></i>

                        <Modal
                            show={showCenteredModal7}
                            onHide={() => setShowCenteredModal7(false)}
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
                        </div> : <i className='uil uil-times fs-16 text-danger'></i>;
                },
                sort: false,
            };
        }),
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
            value: attendanceData.length,
        },
    ];


    return (
        <div className='attendanceAdmin'>
            <div className="textContainer">
                <h2>Attendance</h2>
                <h4>Dashboard / Attendance</h4>
            </div>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Table
                                columns={columns}
                                data={attendanceData}
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

export default AttendanceAdmin;