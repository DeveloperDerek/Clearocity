import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import HomeButton from "../components/HomeButton"

const RefundPage = () => {
    return(
        <>
        <Navbar />
        <HomeButton />
        <div className="policies">
            <h1>Returns</h1>
            <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>

            <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>

            <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>

            <p>Additional non-returnable items:</p>
            <p>Gift cards</p>
            <p>Downloadable software products</p>
            <p>Some health and personal care items</p>

            <p>To complete your return, we require a receipt or proof of purchase.</p>

            <p>Please do not send your purchase back to the manufacturer.</p>

            <p>Refunds (if applicable)</p>
            <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
            <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>

            <p>Late or missing refunds (if applicable)</p>
            <p>If you haven’t received a refund yet, first check your bank account again.
            Then contact your credit card company, it may take some time before your refund is officially posted.</p>
            <p>Next contact your bank. There is often some processing time before a refund is posted.</p>
            <p>If you’ve done all of this and you still have not received your refund yet, please contact us at support@clearocity@gmail.com</p>

            <p>Sale items (if applicable)</p>
            <p>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>

            <p>Exchanges (if applicable)</p>
            <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@clearocity@gmail.com.</p>

            <p>Gifts</p>
            <p>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>

            <p>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>

            <p>Shipping</p>
            <p>To return your product, you should email us or contact us.</p>

            <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

            <p>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>

        </div>
        <Newsletter />
        <Footer />
        </>
    )
}

export default RefundPage