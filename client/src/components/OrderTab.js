import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";
import moment from "moment";
import { Link, navigate } from "@reach/router";

const OrderTab = () => {
    const {loggedUser} = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [orderNumber, setOrderNumber] = useState("");

    useEffect(() => {
        axios
        .get("http://localhost:9000/api/order/view", { withCredentials:true })
        .then((res) => {
        setOrders(res.data)})
        .catch((err) => console.log(err))
    }, [])

    const logout = () => {
        axios
            .post("http://localhost:9000/api/user/logout", {}, { withCredentials: true })
            .then((res) => {
                navigate("/");
                window.location.reload(false); //to refresh the page
            })
            .catch(console.log);
    }

    const findOrder = (e) => {
        e.preventDefault();
        axios
        .get(`http://localhost:9000/api/order/single-view/${orderNumber}`)
        .then((order) => navigate(`/order/${order.data._id}`))
        .catch((err) => console.log(err))
    }

    return(
        <div className="order-tab">
            {loggedUser.check ?
            <div>
                <h6 className="text-center">Hello, {loggedUser.userInfo.firstName}</h6>
                <button className="logoutt" onClick={logout}>Logout</button>
            </div>
                :
                ""
            }
            <form onSubmit={findOrder}>
                <p>Enter confirmation order id</p>
                <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
                <button className="searchBtn">Search</button>
            </form>
            {loggedUser.check ?
            <h3>Order History</h3>
            :
            ""
            }
            {orders.map((o, idx) => {
                return(
                    <div className="order-id" key={idx}>
                        <Link to={`/order/${o._id}`}>{o._id}</Link>
                        <h6>{moment(o.createdAt).format("MMMM Do, YYYY")}</h6>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderTab