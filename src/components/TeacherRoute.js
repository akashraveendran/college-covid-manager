import React from 'react'
import { Navigate } from "react-router-dom"
import { useAuth } from '../store/AuthContext'

export default function TeacherRoute({ children }) {
    const { currentUser } = useAuth()
    return currentUser ? children : <Navigate to="/teacher/login" />
}