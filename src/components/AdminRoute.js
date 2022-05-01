import React from 'react'
import { Navigate } from "react-router-dom"
import { useAuth } from '../store/AuthContext'

export default function AdminRoute({ children }) {
    const { currentUser } = useAuth()
    return currentUser ? children : <Navigate to="/admin/login" />
}
