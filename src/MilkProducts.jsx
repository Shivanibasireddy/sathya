import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addToCart } from "./Store";

function MilkProducts() {
    let dispatch = useDispatch();
    let milkProducts = useSelector(state => state.products.milkItems);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        setSearchQuery(searchTerm.toLowerCase());
    };

    const filteredItems = milkProducts.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-primary">Milk Products</h1>
            
            {/* Search Bar */}
            <div className="d-flex justify-content-center mb-3">
                <input 
                    type="text" 
                    className="form-control w-50 me-2" 
                    placeholder="Search milk products..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            </div>

            <div className="row g-4">
                {filteredItems.map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card shadow-sm border-primary h-100">
                            <img src={item.image || "https://via.placeholder.com/150"} className="card-img-top" alt={item.name} />
                            <div className="card-body text-center d-flex flex-column">
                                <h5 className="card-title text-primary">{item.name}</h5>
                                <p className="fw-bold">Price: ${item.price}</p>
                                <button 
                                    className="btn btn-primary mt-auto" 
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MilkProducts;
