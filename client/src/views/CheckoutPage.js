import Cart from "../components/Cart";

const CheckoutPage = (props) => {
    const {address} = props;
    return(
        <div className="container-fluid">
            <Cart address={address} />
        </div>
        )
}

export default CheckoutPage