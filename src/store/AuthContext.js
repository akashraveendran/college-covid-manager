import React, { useContext, useState, useEffect } from "react"
import { auth, firestore } from "../firebase/config"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    function addUsertoDB(userdata) {
        return firestore.collection('userdata').add(userdata)
    }
    function getUserData(email) {
        return firestore.collection('userdata').where("email", "==", email).get()
    }
    function updateUserData(userdata) {
        return firestore.collection('userdata').doc("b9YR5nk0MOraIFa9h3TD").set(userdata)
    }
    function sendMessage(msgObj) {
        return firestore.collection('notifications').add(msgObj)
    }
    function getMessages(mail) {
        return firestore.collection('notifications').where("from", '==', mail).get()
    }
    function getExamNotifications() {
        return firestore.collection('notifications').where("from", '==', 'admin').get()
    }
    function adminLogin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function getAllUsers() {
        return firestore.collection('userdata').get()
    }
    function getAllMessages() {
        return firestore.collection('notifications').get()
    }
    function getVaccinatedUsers() {
        return firestore.collection('userdata').where("vaccinated", "==", "yes").get()
    }
    function getUsersCount() {
        firestore.collection('userdata').get().then((snapshot) => {
            console.log(snapshot.size)
            return (snapshot.size)
        })
    }
    function deleteUser(docId) {
        return firestore.collection('userdata').doc(docId).delete()
    }
    function applyExam(examObj, docId) {
        return firestore.collection('notifications').doc(docId).set(examObj)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        addUsertoDB,
        getUserData,
        updateUserData,
        sendMessage,
        getMessages,
        adminLogin,
        getAllUsers,
        getAllMessages,
        getVaccinatedUsers,
        getUsersCount,
        deleteUser,
        getExamNotifications,
        applyExam
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}