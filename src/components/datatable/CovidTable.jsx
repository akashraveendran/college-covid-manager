import "./datatable.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CovidTable = ({ userList }) => {
    const navigate = useNavigate()
    useEffect(() => {
        console.log(userList)
    }, [])
    const viewUser = (obj) => {
        navigate("/admin/students/student", { state: obj })
    }
    return (
        <div className="datatable">
            <div className="datatableTitle">
                VACCINATED STUDENTS
            </div>
            <table className="datagrid" >
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Course</th>
                    <th>Contact No</th>
                    <th>Mail Id</th>
                    <th>Covid Status</th>
                    <th>Action</th>
                </tr>
                {

                    userList.map((user) => (
                        <tr>
                            <td>{user.name} </td>
                            <td>{user.department} </td>
                            <td>{user.course} </td>
                            <td>{user.phoneNumber} </td>
                            <td>{user.email} </td>
                            <td style={user.covidStatus == "yes" ? { backgroundColor: "#ff8c8c", borderRadius: '10px' } : { backgroundColor: "#96fa84", borderRadius: '10px' }}>{user.covidStatus} </td>
                            <td className="cellAction">
                                <button className="viewButton" onClick={() => { viewUser(user) }}>View</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
};

export default CovidTable;
