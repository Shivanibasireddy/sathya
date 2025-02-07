import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <h1 className="text-primary">Welcome to the Home Page</h1>
            <p className="lead text-muted">This is the Home.jsx file with Bootstrap styling.</p>
            <button className="btn btn-primary mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
