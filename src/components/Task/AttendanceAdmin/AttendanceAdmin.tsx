import { Card, Col, Modal, Row } from 'react-bootstrap';
import './attendanceAdmin.scss'
import { CellProps } from 'react-table';
import Table from '../../Table';
import { attendanceData } from './data'
import { useState } from 'react';



interface AttendanceData {
    day: number;
    status: string;
}

const AttendanceAdmin = () => {

    const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
                    const filter = attendance.filter((data: AttendanceData) => data.day === day)
                    const status = filter[0]?.status;
                    console.log(status === 'present');
                    return status === 'present' ? <div>
                        <i onClick={handleShow} className='uil uil-check fs-16 text-success cursor-pointer'></i>

                        <Modal show={show} onHide={handleClose} className='modal'>
                            <Modal.Header onHide={handleClose} closeButton>
                                <Modal.Title as="h3">Attendance Info</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='body'>
                                <div className='content'>
                                    <h4>Timesheet <span>{filter[0]?.date}</span> </h4>
                                    <div className='punch'>
                                        <h6>Punch In at</h6>
                                        <p>{filter[0]?.punchIn} AM</p>
                                    </div>
                                    <div className='time'>
                                        <h4>3.45 hrs</h4>
                                    </div>
                                    <div className='punch'>
                                        <h6>Punch Out at</h6>
                                        <p>{filter[0]?.punchOut} PM</p>
                                    </div>
                                    <div className='extra'>
                                        <div className='break'>
                                            <h6>
                                                Break
                                            </h6>
                                            <p>{filter[0]?.break} hrs</p>
                                        </div>
                                        <div className='overtime'>
                                            <h6>
                                                Overtime
                                            </h6>
                                            <p>{filter[0]?.overtime} hrs</p>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
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