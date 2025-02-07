import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function MilkProducts() {
    const dispatch = useDispatch();
    const milkProducts = useSelector(state => state.products.milkItems);
    const [filters, setFilters] = useState({ all: true, below100: false, above100: false });

    // Handle checkbox selection
    const handleFilterChange = (filter) => {
        setFilters((prev) => {
            const updatedFilters = { ...prev, [filter]: !prev[filter] };

            // If "Show All" is checked, reset all other filters
            if (filter === "all" && !prev.all) {
                return { all: true, below100: false, above100: false };
            }

            // If any other filter is checked, uncheck "Show All"
            if (filter !== "all") {
                updatedFilters.all = false;
            }

            // If no specific filter is selected, reset to "Show All"
            if (!updatedFilters.below100 && !updatedFilters.above100) {
                updatedFilters.all = true;
            }

            return updatedFilters;
        });
    };

    // Filter products based on selected checkboxes
    const filteredItems = milkProducts.filter((item) => {
        if (filters.all) return true;
        if (filters.below100 && item.price < 100) return true;
        if (filters.above100 && item.price >= 100) return true;
        return false;
    });

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-primary">Milk Products</h1>

            {/* Filter Checkboxes */}
            <div className="d-flex justify-content-center mb-3">
                <div className="form-check me-3">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="showAll" 
                        checked={filters.all} 
                        onChange={() => handleFilterChange("all")} 
                    />
                    <label className="form-check-label fw-bold text-dark" htmlFor="showAll">Show All</label>
                </div>
                <div className="form-check me-3">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="below100" 
                        checked={filters.below100} 
                        onChange={() => handleFilterChange("below100")} 
                    />
                    <label className="form-check-label fw-bold text-dark" htmlFor="below100">Price Below $100</label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="above100" 
                        checked={filters.above100} 
                        onChange={() => handleFilterChange("above100")} 
                    />
                    <label className="form-check-label fw-bold text-dark" htmlFor="above100">Price Above $100</label>
                </div>
            </div>

            {/* Product Cards */}
            <div className="row g-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card shadow-sm border-primary h-100">
                                <img 
                                    src={item.image || "https://via.placeholder.com/150"} 
                                    alt={item.name} 
                                    className="card-img-top p-3 rounded" 
                                />
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
                    ))
                ) : (
                    <p className="text-center text-danger fw-bold">No items found</p>
                )}
            </div>
        </div>
    );
}

export default MilkProducts;
