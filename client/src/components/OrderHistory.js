import axios from "axios";
import React, { useEffect, useState } from "react"

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:9000/api/order/view")
        .then((res) => setOrders(res.data))
        .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            
        </div>
    )
}

export default OrderHistory