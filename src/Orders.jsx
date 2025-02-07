import { useDispatch, useSelector } from "react-redux";

function Orders() {
    const purchase = useSelector(state => state.completePurchase);

    const finalItems = purchase.map((order, index) => (
        <li key={index}>
            <p>Date: {order.purchaseDate}</p> 
            <p>Total Amount To Pay: {order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
            <ul>
                {order.items.map((item, idx) => (
                    <li key={idx}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
        </li>
    ));

    return (
        <>
            <h2>Purchase History...</h2>
            {purchase.length===0?(
                <p>No Purchase History Available</p>
            ):(
                
            <ul>{finalItems}</ul>)}
        </>
    );
}

export default Orders;
