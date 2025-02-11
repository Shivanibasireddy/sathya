import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const featuredProducts = {
        vegItems: [{ imgSrc: 'veg.jpg', name: 'Fresh Vegetables', id: 1 }],
        leafyVeg: [{ imgSrc: 'ly.jpg', name: 'Leafy Vegetables', id: 4 }],
        nonVegItems: [{ imgSrc: 'non-veg.jpg', name: 'Non-Veg Items', id: 2 }],
        milkProducts: [{ imgSrc: 'milk.jpg', name: 'Milk Products', id: 3 }],
        fruits: [{ imgSrc: 'fr.jpg', name: 'Fresh Fruits', id: 5 }]
    };

    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Main Content */}
            <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center p-4">
                <header>
                    <h1 className="text-primary">Welcome to My Grocery Shop!</h1>
                    <p className="lead">Fresh products delivered to your door.</p>
                    <Link to="/vegItems" className="btn btn-success btn-lg">Shop Now</Link>
                </header>

                {/* Featured Products */}
                <section className="mt-4 w-100 px-5">
                    <h3 className="text-center text-secondary">Featured Categories</h3>

                    {/* First Row: Veg Items and Non-Veg Items */}
                    <div className="row mt-4 justify-content-center">
                        {/* Veg Items */}
                        <div className="col-md-5 col-sm-6 mb-4">
                            <div className="card h-100">
                                <img src={featuredProducts.vegItems[0].imgSrc} className="card-img-top" alt={featuredProducts.vegItems[0].name} style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{featuredProducts.vegItems[0].name}</h5>
                                    <Link to="/vegItems" className="btn btn-success btn-lg">Shop Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* Non-Veg Items */}
                        <div className="col-md-5 col-sm-6 mb-4">
                            <div className="card h-100">
                                <img src={featuredProducts.nonVegItems[0].imgSrc} className="card-img-top" alt={featuredProducts.nonVegItems[0].name} style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{featuredProducts.nonVegItems[0].name}</h5>
                                    <Link to="/nonVegItems" className="btn btn-success btn-lg">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row: Leafy Vegetables, Milk Products, and Fruits */}
                    <div className="row mt-4 justify-content-center">
                        {/* Leafy Vegetables */}
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card h-100">
                                <img src={featuredProducts.leafyVeg[0].imgSrc} className="card-img-top" alt={featuredProducts.leafyVeg[0].name} style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{featuredProducts.leafyVeg[0].name}</h5>
                                    <Link to="/leafyVeg" className="btn btn-success btn-lg">Shop Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* Milk Products */}
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card h-100">
                                <img src={featuredProducts.milkProducts[0].imgSrc} className="card-img-top" alt={featuredProducts.milkProducts[0].name} style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{featuredProducts.milkProducts[0].name}</h5>
                                    <Link to="/milkProducts" className="btn btn-success btn-lg">Shop Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* Fruits */}
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card h-100">
                                <img src={featuredProducts.fruits[0].imgSrc} className="card-img-top" alt={featuredProducts.fruits[0].name} style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{featuredProducts.fruits[0].name}</h5>
                                    <Link to="/fruits" className="btn btn-success btn-lg">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4 w-100 fixed-bottom">
                &copy; 2025 My Grocery Shop. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
