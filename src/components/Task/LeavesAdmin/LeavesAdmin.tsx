import { Card, Col, Dropdown, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import './leavesAdmin.scss';
import { useEffect, useState } from 'react';
import { leavesData } from './data'
import Table from '../../Table';
import { Button } from 'react-bootstrap';
import { CellProps } from 'react-table'

const LeavesAdmin = () => {
    const [showCenteredModal4, setShowCenteredModal4] = useState<boolean>(false);
    const [showCenteredModal5, setShowCenteredModal5] = useState<boolean>(false);
    const [editData, setEditData] = useState<any>([]);
    const [filteredData, setFilteredData] = useState(leavesData);
    const [searchEmployeeName, setSearchEmployeeName] = useState('');
    const [selectedLeaveType, setSelectedLeaveType] = useState('');
    const [selectedLeaveStatus, setSelectedLeaveStatus] = useState('');


    const handleFilter = () => {
        const filtered = leavesData.filter(employee => {
            const nameMatch = employee.name.toLowerCase().includes(searchEmployeeName.toLowerCase());
            const typeMatch = !selectedLeaveType || employee.leaveType === selectedLeaveType;
            const statusMatch = !selectedLeaveStatus || employee.status === selectedLeaveStatus;
            return nameMatch && typeMatch && statusMatch;
        });
        setFilteredData(filtered);
    };


    const handleEmployeeNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchEmployeeName(event.target.value);
    };

    const handleLeaveTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLeaveType(event.target.value);
    };

    const handleLeaveStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLeaveStatus(event.target.value);
    };

    useEffect(() => {
        handleFilter();
    }, [searchEmployeeName, selectedLeaveType, selectedLeaveStatus]);

    const handleEdit = (rowData: any) => {
        setEditData(rowData);
        setShowCenteredModal4(true);
    };

    const handleCloseEditModal = () => {
        setShowCenteredModal4(false);
        setEditData([]);
    };

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
            Cell: (props: CellProps<any>) => {

                const { original: rowData } = props.row;

                const [showCenteredModal, setShowCenteredModal] = useState(false);

                return (
                    <>
                        <Dropdown className="action float-end" align="end">
                            <Dropdown.Toggle as="a" className="cursor-pointer arrow-none">
                                <i className="uil uil-ellipsis-v fs-16 text-black"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleEdit(rowData)}>
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
                                            defaultValue={editData?.noOfDay}
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
                                            defaultValue={editData?.remaining}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="example-textarea">
                                            Leave Reason
                                        </Form.Label>
                                        <Col>
                                            <Form.Control as="textarea" rows={3} defaultValue={editData?.reason} id="example-textarea" />
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
            value: filteredData.length,
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
                    <Form.Control type="text" placeholder="Employee Name" value={searchEmployeeName} onChange={handleEmployeeNameChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Leave Type"
                >
                    <Form.Select aria-label="--Select--" value={selectedLeaveType} onChange={handleLeaveTypeChange}>
                        <option value="">--select--</option>
                        <option value="Annual Leave">Annual Leave</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Maternity Leave">Maternity Leave</option>
                        <option value="Emergency Leave">Emergency Leave</option>
                        <option value="Personal Leave">Personal Leave</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Leave Status"
                >
                    <Form.Select aria-label="--Select--" value={selectedLeaveStatus} onChange={handleLeaveStatusChange}>
                        <option value="">--Select--</option>
                        <option value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
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
                                data={filteredData}
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