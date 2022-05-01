import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/AuthContext"

const Single = () => {
  const location = useLocation();
  const [std, setStd] = useState();
  const { deleteUser } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    setStd(location.state)
  }, [])
  console.log(std)
  const clickDeleteUser = async (docId) => {
    console.log(docId)
    await deleteUser(docId);
    navigate("/admin/students")
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={() => { clickDeleteUser(std && std.docID) }}> Delete</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{std && std.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{std && std.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{std && std.phoneNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">{std && std.department}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Course:</span>
                  <span className="itemValue">{std && std.course}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Vaccinated:</span>
                  <span className="itemValue">{std && std.vaccinated}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">No of Doses:</span>
                  <span className="itemValue">{std && std.vaccinationDose}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Vaccinated Date :</span>
                  <span className="itemValue">{std && std.vaccinationDate}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Covid Status:</span>
                  <span className="itemValue">{std && std.covidStatus}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Single;
