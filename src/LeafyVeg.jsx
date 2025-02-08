import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { addToCart } from "./Store";

function LeafyVeg() {
    const dispatch = useDispatch();
    const leafyVeg = useSelector(state => state.products.leafyVeg);
    const [filters, setFilters] = useState({ all: true, below100: false, above100: false });
    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // Pagination State
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const handleFilterChange = (filter) => {
        setFilters((prev) => {
            const updatedFilters = { ...prev, [filter]: !prev[filter] };

            if (filter === "all" && !prev.all) {
                return { all: true, below100: false, above100: false };
            }
            if (filter !== "all") {
                updatedFilters.all = false;
            }
            if (!updatedFilters.below100 && !updatedFilters.above100) {
                updatedFilters.all = true;
            }
            return updatedFilters;
        });

        setCurrentPage(1); // Reset to first page on filter change
    };

    const handleSearch = () => {
        setSearchQuery(searchTerm.toLowerCase());
        setCurrentPage(1); // Reset to first page on search
    };

    const filteredItems = leafyVeg.filter((item) => {
        if (searchQuery && !item.name.toLowerCase().includes(searchQuery)) {
            return false;
        }
        if (filters.all) return true;
        if (filters.below100 && item.price < 100) return true;
        if (filters.above100 && item.price >= 100) return true;
        return false;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-success">Leafy Vegetables</h1>

            {/* Search Bar */}
            <div className="d-flex justify-content-center mb-3">
                <input 
                    type="text" 
                    className="form-control w-50 me-2" 
                    placeholder="Search leafy vegetables..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-success" onClick={handleSearch}>Search</button>
            </div>

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
                    <label className="form-check-label fw-bold text-dark" htmlFor="below100">Price Below ₹100</label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="above100" 
                        checked={filters.above100} 
                        onChange={() => handleFilterChange("above100")} 
                    />
                    <label className="form-check-label fw-bold text-dark" htmlFor="above100">Price Above ₹100</label>
                </div>
            </div>

            {/* Vegetable Cards */}
            <div className="row g-4">
                {paginatedItems.length > 0 ? (
                    paginatedItems.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card shadow-sm border-success h-100">
                                <img 
                                    src={item.image || "https://via.placeholder.com/150"} 
                                    alt={item.name} 
                                    className="card-img-top p-3 rounded" 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-success">{item.name}</h5>
                                    <p className="fw-bold">Price: ₹{item.price}</p>
                                    <button 
                                        className="btn btn-success mt-2"
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

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    {/* Previous Button */}
                    <button 
                        className="btn btn-outline-success me-2" 
                        onClick={() => setCurrentPage(currentPage - 1)} 
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index + 1}
                            className={`btn mx-1 ${currentPage === index + 1 ? "btn-success" : "btn-outline-success"}`} 
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button 
                        className="btn btn-outline-success ms-2" 
                        onClick={() => setCurrentPage(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default LeafyVeg;
