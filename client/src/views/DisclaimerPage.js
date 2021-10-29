import Footer from "../components/Footer"
import HomeButton from "../components/HomeButton"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const DisclaimerPage = () => {
    return(
        <div>
            <Navbar />
            <HomeButton />
            <div className="policies">
                <h1>Disclaimer</h1>
                <p>By purchasing our product, you automatically understand that results may vary from person to person. No two persons are the same, and as such, results cannot be fully guaranteed.</p>

                <p>This product has been evaluated and approved by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease.</p>

                <p>Your use of the site and the purchase of our product is subject to our Terms of Service, Privacy Policy and Medical Disclaimer.</p>

                <p>All content sold or provided by clearocityskincare.com and its related companies are strictly for informational purposes only. While all attempts have been made to verify the accuracy of information provided on our website and within the publications, neither the authors nor the publishers are responsible for assuming liability for possible inaccuracies.</p>

                <p>The authors and publishers disclaim any responsibility for the inaccuracy of the content, including but not limited to errors or omissions. Loss of property, injury to self or others, and even death could occur as a direct or indirect consequence of the use and application of any content found herein.</p>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default DisclaimerPage