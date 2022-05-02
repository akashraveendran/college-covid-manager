import React from 'react'
import { Navigate } from "react-router-dom"
import { useAuth } from '../store/AuthContext'

export default function AdminRoute({ children }) {
    const { currentUser } = useAuth()
    let admin = currentUser.displayName != "Student" && currentUser.displayName != "TEACHER"
    return (admin ? children : <Navigate to="/admin/login" />)
}
