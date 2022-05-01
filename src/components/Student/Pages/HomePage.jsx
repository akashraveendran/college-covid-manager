import React from 'react'
import Banner from '../Banner'
import Map from '../Map'
import Navbar from '../Navbar'
import Footer from '../Footer'
import "./home.css"

function HomePage() {
    return (
        <div>
            <Navbar feeds />
            <Banner />
            <Map />
            <Footer />
        </div>
    )
}

export default HomePage