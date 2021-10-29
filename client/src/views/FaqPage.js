import Footer from "../components/Footer"
import HomeButton from "../components/HomeButton"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const FaqPage = () => {
    return(
        <div>
            <Navbar />
            <HomeButton />
            <div className="policies">
                <h1>FAQ</h1>
                <p>1. Where do you guys ship from?</p>

                <p>We are from California and we have our supplier ship it for us. We have many warehouses in the U.S, U,K, & China. Depending on our inventory, we will ship from where there is inventory.</p>

                <p>2.  How long does it take to ship?</p>

                <p>All orders are processed within 3-5 business days. We have staff working 24/7 to make sure your order gets received and sent as soon as possible.</p>

                <p>Once it is shipped, your order will take between 10-14 business days (domestic shipping), or 2-4 weeks (international shipping) for it to arrive at your doorstep depending on the efficiency of your local postal service. </p>

                <p>3. Can I return/exchange my order?</p>

                <p>Exchanges are welcome if you receive a defective product or if you would like to switch out an item size in consideration to our current stock. Items must be in new condition with tags attached and   customers are responsible for return shipping.
                Store credit may also be issued if you are not satisfied with your size/ color of the style
                Refunds/Returns are allowed if you receive defective product (within 7 days of receipt). Tags must be attached.</p>
                <p>If 14 days have gone by since you received your purchase, we can’t offer you store credit, an exchange, or a refund. </p>

                <p>4. What if I received the wrong item(s) or it came defective?</p>

                <p>If you received a wrong or defective product, we will offer an exchange for the correct or same item if available. If we are unable to offer a replacement product, a refund or store credit will be issued. Please contact us first for approval and return instructions. We will not accept returns without prior notice and approval.</p>

                <p>5. What is your Return Policy? </p>

                <p>Returned products must be in its original condition. The product must be unworn, unwashed, and contains all original packaging with tags still attached. Upon receipt of returned goods, we reserve the right to deny a return if the merchandise does not meet the policy requirements.</p>

                <p>Return period for approved products: 7 days from the date on the original invoice for domestic orders, 14 days from the date on the invoice for international orders. Returns will typically take 7-10 business days to process. You will be notified via email when the return transaction has been processed. We recommend you use a return shipping service with a tracking number. Shipping and handling charges are non-refundable.</p>

                <p>6. What is your Free Warranty Policy?</p>

                <p>We offer a free one year warranty for limited time for certain customers. If you did not purchase while this promotion is indicated on our menu bar, then you do not qualify; however, if you purchased while the Free Warranty Policy is available, then we will replace your product for free! With documentation, and proof, our team will make sure you receive the product at no cost.</p>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default FaqPage