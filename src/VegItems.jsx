import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { addToCart } from "./Store";

function VegItems() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.vegItem);
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
    const filteredItems = vegItems.filter(item => {
        if (filters.all) return true;
        if (filters.below100 && item.price < 100) return true;
        if (filters.above100 && item.price >= 100) return true;
        return false;
    });


    let VegItems=useSelector(state=>state.vegItem)
    let perPage=3;
    let totalPages=vegItems.length/perPage;
    let [pageNumber,setPageNumber]=useState(1);
    let pageEndIndex=perPage*pageNumber;
    let pageStartIndex=pageEndIndex-perPage;
    let currentItems=vegItems.Slice(pageStartIndex,pageEndIndex);
    let handlePage=((page)=>{
        setPageNumber(page);
    })

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-success">Vegetables</h1>

            {/* Checkbox Filters */}
            <div className="mb-4 d-flex justify-content-center gap-3">
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="all" 
                        checked={filters.all} 
                        onChange={() => handleFilterChange("all")} 
                    />
                    <label className="form-check-label fw-bold" htmlFor="all">
                        Show All
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="below100" 
                        checked={filters.below100} 
                        onChange={() => handleFilterChange("below100")} 
                    />
                    <label className="form-check-label fw-bold text-primary" htmlFor="below100">
                        Price Below ₹100
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="above100" 
                        checked={filters.above100} 
                        onChange={() => handleFilterChange("above100")} 
                    />
                    <label className="form-check-label fw-bold text-danger" htmlFor="above100">
                        Price Above ₹100
                    </label>
                </div>
            </div>

            {/* Vegetable List */}
            <div className="row g-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
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

            <ul>
                {currentItems.map((item,index)=>{
                    <li>{item}</li>
                })
                }
            </ul>
            <button onClick={()=>{handlePage(pageNumber-1)}}>Prev</button>
            <ul>
                {Array.from({length:totalPages},
                    (_,index)=>{
                        <button onClick={handlePage(index+1)}>{index+1}</button>
                    }
                )
                }
            </ul>

            <button onClick={()=>{handlePage(pageNumber+1)}}>Next</button>

        </div>


    );
}

export default VegItems;
