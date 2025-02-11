import { useSelector } from "react-redux";

function Orders() {
    const orderItems = useSelector(state => state.purchaseDetails);
    
    const orders = orderItems.map((order, index) => (
        <tr key={index} className={`table-${index % 2 === 0 ? 'light' : 'primary'}`}>
            <td>{order.date}</td>
            <td>
                <ul className="list-unstyled">
                    {order.items.map((pdetails, ind) => (
                        <li key={ind} className="d-flex align-items-center m-4  vw-5">
                            <img
                                src={pdetails.image} 
                                alt={pdetails.name} 
                                className="img-thumbnail" 
                                style={{ width: "50px", height: "50px", marginRight: "10px" }}
                            />
                            <span className={`text-${index % 2 === 0 ? 'success' : 'warning'}`} style={{ fontSize: "14px" }}>
                                {pdetails.name} - {pdetails.price} * {pdetails.quantity}
                            </span>
                        </li>
                    ))}
                </ul>
            </td>
            <td className="text-end">
                <strong className="text-success">₹{order.totalPrice.toFixed(2)}</strong>
            </td>
        </tr>
    ));

    return (
        <>
            {orders.length > 0 ? (
                <div className="container my-5">
                    <h1 className="text-center mb-4 text-primary">My Orders</h1>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover shadow-lg">
                            <thead className="thead-dark bg-info text-white">
                                <tr>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Items</th>
                                    <th scope="col">Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="container my-5">
                    <h1 className="text-center text-danger">No Orders Available</h1>
                </div>
            )}
        </>
    );
}

export default Orders;
