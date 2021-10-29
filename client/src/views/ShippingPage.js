import Footer from "../components/Footer"
import HomeButton from "../components/HomeButton"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const ShippingPage = () => {
    return(
        <>
        <Navbar />
        <HomeButton />
        <div className="policies">
            <h1>Shipping Policy</h1>
            <p>We reserve the right to make any amendments to this policy at any time. Notification of any changes will be published on this page.</p>

            <p>﻿Shipping Information</p>
            <p>All orders made Sunday-Thursday are processed the same or next day.</p>
            <p>Processing time takes 2-3 business days.</p>
            <p>United States orders arrive within 12-20 Days or faster after processing.</p>
            <p>United Kingdom items arrive within 12-25 Days or faster after processing.</p>
            <p>International orders (outside of the United States) can take 20-40 Days or faster depending on your location.</p>
            <p>Orders that pass a 60 day processing period are immediately investigated.</p>
            <p>Upon conclusion of the investigation a refund to the customer may apply.</p>
            <p>Tracking info is provided via emails and you can track your order at any time, but please keep in mind that we are shipping from our warehouses through EMS shipping so once you receive your tracking, please wait a few days for it to update.</p>
        </div>
        <Newsletter />
        <Footer />
        </>
    )
}

export default ShippingPage