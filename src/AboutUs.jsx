import React from "react";
import { FaUsers, FaRegLightbulb, FaPhoneAlt } from "react-icons/fa"; // Importing icons

const AboutUs = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">About Us</h2>

      <div className="row">
        {/* Company Info Section */}
        <div className="col-md-6">
          <h3 className="text-success mb-3">
            <FaRegLightbulb className="me-2" />
            Our Story
          </h3>
          <p>
            Welcome to our store! We are a passionate team dedicated to offering the finest selection of fresh Veg Items, Non-Veg Items, Fruits, Milk Products, and Leafy Vegetables. Our commitment is to provide the highest quality products sourced from trusted vendors, ensuring a healthy and sustainable lifestyle for all our customers.
          </p>
          <p>
            We started with a mission to make fresh produce accessible to everyone, offering the best products at affordable prices while maintaining quality and freshness.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="col-md-6">
          <h3 className="text-success mb-3">
            <FaRegLightbulb className="me-2" />
            Our Mission
          </h3>
          <p>
            Our mission is to provide the freshest, healthiest, and most affordable food products to our customers. We believe in delivering high-quality, responsibly sourced goods while supporting local communities.
          </p>

          <h3 className="text-danger mb-3">
            <FaRegLightbulb className="me-2" />
            Our Vision
          </h3>
          <p>
            We aim to become a leading name in the food industry, setting a benchmark for quality and sustainability. Our vision is to create a future where healthy, fresh food is accessible to all.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-5">
        <h3 className="text-danger mb-3 text-center">
          <FaUsers className="me-2" />
          Meet Our Team
        </h3>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Shivani Basireddy</h5>
                <p className="card-text">Founder & CEO</p>
                <p className="card-text">
                  Shivani is passionate about bringing fresh food to the community and founded this business to offer high-quality, sustainable produce to customers.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Elon Musk</h5>
                <p className="card-text">Operations Manager</p>
                <p className="card-text">
                  Musk oversees day-to-day operations, ensuring the smooth functioning of the supply chain and customer service.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
             
              <div className="card-body">
                <h5 className="card-title">Alex</h5>
                <p className="card-text">Marketing Head</p>
                <p className="card-text">
                  Alex is responsible for marketing strategies, ensuring that our products reach the right audience through effective campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us CTA */}
      <div className="mt-5 text-center">
        <h4>
          <FaPhoneAlt className="me-2" />
          Want to learn more about us?
        </h4>
        <p>Feel free to contact us for more information or visit us in-store.</p>
        <a href="/contact" className="btn btn-success btn-lg">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
