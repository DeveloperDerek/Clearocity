import axios from "axios";
import React, { useEffect, useState } from "react"
import moment from "moment" //moment(insert date here).format("MMM Do YY");

const OrderHistory = (props) => {
    const {id} = props
    const [order, setOrder] = useState(null)

    useEffect(() => {
        axios
        .get(`http://localhost:9000/api/order/single-view/${id}`)
        .then((res) => {
            setOrder(res.data)
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }, [])
    
    if (order === null) {
        return(<div>
            Loading...
        </div>)
    }

    const addZeroes = (num) => {
        const value = toString(num);
        const dec = value.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        const final = Number(num).toFixed(len)
        return final
    }

    return(
        <div className="container-fluid text-center">
            <h3>Order ID: {order._id}</h3>
            <h6>{moment(order.createdAt).format("MMMM Do, YYYY")}</h6>
            <h6>Name: {order.address.firstName} {order.address.lastName}</h6>
            <h6>Address: {order.address.address}, {order.address.suite ? order.address.suite + ",": ""} {order.address.city} {order.address.state} {order.address.zip}</h6>
            <h6>Paid: ${addZeroes(order.bill)}</h6>
                {order.cartItems.map((item, idx) => {
                    return(
                        <div key={idx}>
                            <h6>{item.product.title}</h6>
                            <h6>Qty: {item.quantity} ${item.price}</h6>
                        </div>
                    )
                })}
        </div>
    )
}

export default OrderHistory