import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";

const OrderTab = () => {
    const {loggedUser} = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [orderNumber, setOrderNumber] = useState("");

    useEffect(() => {
        axios
        .get("http://localhost:9000/api/order/view", { withCredentials:true })
    .then((res) => {
        console.log(res.data)
        setOrders(res.data)})
        .catch((err) => console.log(err))
    }, [])

    const findOrder = () => {
        axios
        .get(`http://localhost:9000/api/order/single-view/${orderNumber}`)
        .then((order) => setOrders(order))
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <form onSubmit={findOrder}>
                <p>Enter confirmation order id</p>
                <input type="number" />
                <button>Search</button>
            </form>
            {loggedUser.check && orders.length > 0 ?
            <div>testing</div>
            :
            <div>nope</div>
            }
        </div>
    )
}

export default OrderTab