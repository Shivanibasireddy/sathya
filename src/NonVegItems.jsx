import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addToCart } from "./Store";

function NonVegItems() {
    const dispatch = useDispatch();
    const nonvegItems = useSelector(state => state.products.nonVeg);
    const [filters, setFilters] = useState({ all: true, below100: false, above100: false });

    // Handle checkbox changes
    const handleFilterChange = (filter) => {
        setFilters(prev => {
            const newFilters = { ...prev, [filter]: !prev[filter] };

            // If "Show All" is checked, uncheck all price filters
            if (filter === "all" && newFilters.all) {
                return { all: true, below100: false, above100: false };
            }

            // If any price filter is checked, uncheck "Show All"
            if (filter !== "all") {
                newFilters.all = false;
            }

            // If no price filter is selected, reset to "Show All"
            if (!newFilters.below100 && !newFilters.above100) {
                newFilters.all = true;
            }

            return newFilters;
        });
    };

    // Filter items based on selected checkboxes
    const filteredItems = nonvegItems.filter(item => {
        if (filters.all) return true;
        if (filters.below100 && item.price < 100) return true;
        if (filters.above100 && item.price >= 100) return true;
        return false;
    });

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-danger">Non-Veg Items</h1>

            {/* Checkbox Filters */}
            <div className="mb-3 text-center">
                <label className="me-3">
                    <input 
                        type="checkbox" 
                        checked={filters.all} 
                        onChange={() => handleFilterChange("all")}
                    /> Show All
                </label>
                <label className="me-3">
                    <input 
                        type="checkbox" 
                        checked={filters.below100} 
                        onChange={() => handleFilterChange("below100")}
                    /> Price Below $100
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked={filters.above100} 
                        onChange={() => handleFilterChange("above100")}
                    /> Price Above $100
                </label>
            </div>

            {/* Display Filtered Items */}
            <div className="row g-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card shadow-sm border-danger h-100">
                                <img 
                                    src={item.image || "https://via.placeholder.com/150"} 
                                    className="card-img-top p-3 rounded" 
                                    alt={item.name} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-danger">{item.name}</h5>
                                    <p className="fw-bold text-success">Price: ${item.price}</p>
                                    <button 
                                        className="btn btn-primary" 
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

export default NonVegItems;
