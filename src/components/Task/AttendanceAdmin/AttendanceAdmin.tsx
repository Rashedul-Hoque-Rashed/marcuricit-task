import { Card, Col, Row } from 'react-bootstrap';
import './attendanceAdmin.scss'
import { CellProps } from 'react-table';
import Table from '../../Table';
import {attendanceData} from './data'

const AttendanceAdmin = () => {


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
        ...Array.from({ length: 30 }, (_, index) => {
            const day = index + 1;
            return {
                Header: day.toString(),
                accessor: `day${day}`,
                Cell: (props: CellProps<any>) => {
                    const { status } = props.row.original[`day${day}`];
                    return status === 'present' ? <i className="fas fa-check-circle text-success"></i> : <i className="fas fa-times-circle text-danger"></i>;
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