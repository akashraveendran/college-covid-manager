import "./datatable.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ExamTable = ({ exams }) => {
    useEffect(() => {
        exams.forEach((exam) => {
            if (exam.appliedUsers.length != 0) {
                exam.applied = exam.appliedUsers.length
            } else {
                exam.applied = 0
            }
        })
    })
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Exams Details
            </div>
            <table className="datagrid" >
                <tr>
                    <th >Title</th>
                    <th>Date</th>
                    <th>Department</th>
                    <th>Number of Applicants</th>
                </tr>
                {

                    exams.map((exam) => (
                        <tr>
                            <td>{exam.title} </td>
                            <td>{exam.examDate}</td>
                            <td>{exam.department} </td>
                            {console.log(exams)}
                            <td>{exam.applied}</td>
                        </tr>
                    ))
                }
            </table>
        </div >
    );
};

export default ExamTable;
