import "./datatable.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const VaccinatedTable = ({ userList }) => {
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
                    <th>Vaccination Status</th>
                    <th>Vaccinated Date</th>
                    <th>No of Doses</th>
                    <th>Action</th>
                </tr>
                {

                    userList.map((user) => (
                        <tr>
                            <td>{user.name} </td>
                            <td>{user.department} </td>
                            <td>{user.course} </td>
                            <td style={user.vaccinated == "yes" ? { backgroundColor: "#96fa84", borderRadius: '10px' } : { backgroundColor: "#ff8c8c", borderRadius: '10px' }}>{user.vaccinated} </td>
                            <td>{user.vaccinationDate}</td>
                            <td>{user.vaccinationDose}</td>
                            <td className="cellAction">
                                <button className="viewButton" onClick={() => { viewUser(user) }}>View</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
};

export default VaccinatedTable;
