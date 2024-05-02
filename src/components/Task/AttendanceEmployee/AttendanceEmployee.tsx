import { Card, Col, FloatingLabel, Form, ProgressBar, Row } from 'react-bootstrap';
import './AttendanceEmployee.scss'
import {attendanceData} from './data'
import Table from '../../Table';

const AttendanceEmployee = () => {



    const columns = [
        {
          Header: "ID",
          accessor: "id",
          sort: true,
        },
        {
          Header: "Date",
          accessor: "date",
          sort: true,
        },
        {
          Header: "PunchIn",
          accessor: "punchInTime",
          sort: true,
        },
        {
          Header: "PunchOut",
          accessor: "punchOutTime",
          sort: true,
        },
        {
          Header: "Break",
          accessor: "break",
          sort: true,
        },
        {
          Header: "Overtime",
          accessor: "overtime",
          sort: true,
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
          value: attendanceData.length,
        },
      ];



    return (
        <div className='attendanceEmployee'>
            <div className="textContainer">
                <h2>Attendance</h2>
                <h4>Dashboard / Attendance</h4>
            </div>
            <div className="boxes">
                <div className='content'>
                    <h4>Timesheet <span>11 Mar 2023</span> </h4>
                    <div className='punch'>
                        <h6>Punch In at</h6>
                        <p>Wed, 11th Mar 2023 10.00 AM</p>
                    </div>
                    <div className='time'>
                        <h4>3.45 hrs</h4>
                    </div>
                    <div className='btn'>
                        <button className='punchBtn'>Punch Out</button>
                    </div>
                    <div className='extra'>
                        <div className='break'>
                            <h6>
                                Break
                            </h6>
                            <p>1.21 hrs</p>
                        </div>
                        <div className='overtime'>
                            <h6>
                                Overtime
                            </h6>
                            <p>3 hrs</p>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <h4>Statistics</h4>
                    <div className='data'>
                        <div className='progressData'>
                            <div className='title'>
                                <h6>Today</h6>
                                <p>3.25 / 8 hrs</p>
                            </div>
                        <ProgressBar now={43} className="mb-3 progress-sm" variant="warning" />
                        </div>
                        <div className='progressData'>
                            <div className='title'>
                                <h6>This Week</h6>
                                <p>28 / 40 hrs</p>
                            </div>
                        <ProgressBar now={70} className="mb-3 progress-sm" variant="warning" />
                        </div>
                        <div className='progressData'>
                            <div className='title'>
                                <h6>This Month</h6>
                                <p>90 / 160 hrs</p>
                            </div>
                        <ProgressBar now={57} className="mb-3 progress-sm" variant="success" />
                        </div>
                        <div className='progressData'>
                            <div className='title'>
                                <h6>Remaining</h6>
                                <p>90 / 160 hrs</p>
                            </div>
                        <ProgressBar now={57} className="mb-3 progress-sm" variant="danger" />
                        </div>
                        <div className='progressData'>
                            <div className='title'>
                                <h6>Overtime</h6>
                                <p>4</p>
                            </div>
                        <ProgressBar now={25} className="mb-3 progress-sm" variant="primary" />
                        </div>
                    </div>
                </div>
                <div className='activity'>
                    <h4>Today Activity</h4>
                    <div>
                        <h6><small>Punch In at</small></h6>
                        <p><small> <i className='uil uil-clock'></i> 10.00 AM</small></p>
                    </div>
                    <div>
                        <h6><small>Punch Out at</small></h6>
                        <p> <small><i className='uil uil-clock'></i>  11.00 AM AM</small></p>
                    </div>
                    <div>
                        <h6><small>Punch In at</small></h6>
                        <p><small> <i className='uil uil-clock'></i> 11.15 AM</small></p>
                    </div>
                    <div>
                        <h6><small>Punch Out at</small></h6>
                        <p><small> <i className='uil uil-clock'></i>  1.30 PM AM</small></p>
                    </div>
                    <div>
                        <h6><small>Punch In at</small></h6>
                        <p><small> <i className='uil uil-clock'></i> 2.00 PM</small></p>
                    </div>
                    <div>
                        <h6><small>Punch Out at</small></h6>
                        <p> <small><i className='uil uil-clock'></i>  7.30 PM AM</small></p>
                    </div>
                </div>
            </div>
            <div className="input">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Date"
                    className="mb-3"
                >
                    <Form.Control type="date" placeholder="Date" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Select Month"
                    className="mb-3"
                >
                    <Form.Select aria-label="--Select--">
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Select Year"
                    className="mb-3"
                >
                    <Form.Select aria-label="--Select--">
                        <option value="1">2023</option>
                        <option value="2">2022</option>
                        <option value="3">2021</option>
                        <option value="3">2020</option>
                        <option value="3">2019</option>
                        <option value="3">2018</option>
                    </Form.Select>
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

export default AttendanceEmployee;