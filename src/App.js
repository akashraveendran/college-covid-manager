import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthProvider } from "./store/AuthContext"

import StudentLogin from './components/Student/Pages/Login';
// import AdminLogin from './components/Admin/Login';
import Register from './components/Student/Pages/Register';
import HomePage from './components/Student/Pages/HomePage';
import ContactPage from './components/Student/Pages/ContactPage';
import Profile from './components/Student/Pages/Profile';
import UpdateProfile from './components/Student/Pages/UpdateProfile';
import Notifications from './components/Student/Pages/Notifications';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import NewExam from "./pages/new/NewExam";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin">
              <Route index element={<AdminRoute><Home /></AdminRoute>} />
              <Route path="login" element={<Login />} />
              <Route path="students">
                <Route index element={<AdminRoute><List students="Students" /></AdminRoute>} />
                <Route path="student" element={<AdminRoute><Single /></AdminRoute>} />
                <Route path="vaccinated" element={<AdminRoute><List vaccinated="vaccinated" /></AdminRoute>} />
                <Route path="covid-status" element={<AdminRoute><List covidStatus="covid-status" /></AdminRoute>} />
                <Route path="add-notification" element={<AdminRoute><NewExam title="Add New Exam Notification" /></AdminRoute>} />
                <Route path="Exams" element={<AdminRoute><List exams="Exams" /></AdminRoute>} />
                <Route
                  path="new"
                  element={<AdminRoute><New title="Add New Student" /></AdminRoute>}
                />
              </Route>
              <Route path="messages" element={<AdminRoute><List messages="Messages" /></AdminRoute>} />
            </Route>
            <Route path='/' >
              <Route index element={<PrivateRoute><HomePage /></PrivateRoute>} />
              <Route path='contact' element={<PrivateRoute><ContactPage /></PrivateRoute>} />
              <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path='update-profile' element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
              <Route path='notifications' element={<PrivateRoute><Notifications /></PrivateRoute>} />
              <Route path='login' element={<StudentLogin />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
