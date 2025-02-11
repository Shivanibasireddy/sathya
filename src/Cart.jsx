import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Table, Container, Form, Alert } from "react-bootstrap";
import { clearCart, completePurchase, decrement, increment, remove } from "./Store";

function Cart() {
    let cartObjects = useSelector(state => state.cart);
    let dispatch = useDispatch();

    let totalPrice = cartObjects.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    let discountAmount = (totalPrice * discountPercentage) / 100;
    let finalPrice = totalPrice - discountAmount;

    let [coupon, setCoupon] = useState('');
    let [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
    let [showCouponApplied, setShowCouponApplied] = useState(false);

    let handleCouponPercentage = () => {
        switch (coupon.toUpperCase()) {
            case 'RATAN10':
                setCouponDiscountPercentage(10);
                setShowCouponApplied(true);
                break;
            case 'RATAN20':
                setCouponDiscountPercentage(20);
                setShowCouponApplied(true);
                break;
            case 'RATAN30':
                setCouponDiscountPercentage(30);
                setShowCouponApplied(true);
                break;
            default:
                alert("Invalid Coupon Code");
                setCouponDiscountPercentage(0);
        }
    };

    let couponDiscountAmount = (totalPrice * couponDiscountPercentage) / 100;

    let handleCompletePurchase=()=>{
        
        const purchaseDate=new Date().toLocaleDateString();
        let purchaseDetailsObject={
            date:purchaseDate,
            items:[...cartObjects],
            totalPrice:finalPrice
        }
        dispatch(clearCart());
        dispatch(completePurchase(purchaseDetailsObject));
    }

    return (
        <Container className="mt-4">
            {cartObjects.length > 0 ? (
                <>
                    <h2 className="text-center text-primary">Shopping Cart</h2>
                    <Table striped bordered hover responsive className="mt-3">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartObjects.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <Button variant="success" size="sm" onClick={() => dispatch(increment(item))}>+</Button>
                                        <Button variant="warning" size="sm" className="mx-2" onClick={() => dispatch(decrement(item))}>-</Button>
                                    </td>
                                    <td>
                                        <Button variant="danger" size="sm" onClick={() => dispatch(remove(item))}>Remove</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <h4 className="text-danger">Total Price: ₹{totalPrice.toFixed(2)}</h4>

                    {discountPercentage > 0 && (
                        <Alert variant="success">
                            <p>Discount Applied: {discountPercentage}%</p>
                            <p>Discount Amount: ₹{discountAmount.toFixed(2)}</p>
                        </Alert>
                    )}

                    <h4 className="text-primary">Final Amount: ₹{finalPrice.toFixed(2)}</h4>

                    <div className="d-flex gap-2 my-3">
                        <Button variant="outline-success" onClick={() => { setDiscountPercentage(10); }}>Apply 10% Discount</Button>
                        <Button variant="outline-success" onClick={() => { setDiscountPercentage(20); }}>Apply 20% Discount</Button>
                        <Button variant="outline-success" onClick={() => { setDiscountPercentage(30); }}>Apply 30% Discount</Button>
                    </div>

                    <Form className="my-3">
                        <Form.Group controlId="coupon">
                            <Form.Label>Enter Coupon Code</Form.Label>
                            <Form.Control 
                                type="text"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                placeholder="Enter Coupon Code"
                            />
                        </Form.Group>
                    </Form>

                    {showCouponApplied && (
                        <Alert variant="info">
                            <p>Coupon Applied: {coupon}</p>
                            <p>Coupon Discount: ₹{couponDiscountAmount.toFixed(2)}</p>
                        </Alert>
                    )}

                    <div className="d-flex gap-2">
                        <Button variant="primary" onClick={handleCouponPercentage}>Apply Coupon</Button>
                        <Button variant="success"onClick={handleCompletePurchase}>Complete Purchase</Button>
                    </div>
                </>
            ) : (
                <Alert variant="warning" className="text-center">Oops......!😱 Your Cart is Empty...</Alert>
            )}
        </Container>
    );
}

export default Cart;
