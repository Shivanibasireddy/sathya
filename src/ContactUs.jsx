import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 text-primary">Contact Us</h2>

      <div className="row">
        {/* Contact Information */}
        <div className="col-md-6">
          <h3 className="mb-3 text-primary">Our Contact Details</h3>
          <ul className="list-unstyled">
            <li><strong>Name:</strong> Shivani Basireddy</li>
            <li><strong>Address:</strong> Ameerpet Street, Hyderabad, India</li>
            <li><strong>Phone:</strong> +91 6303950350</li>
            <li><strong>Email:</strong> deliciousworld@gmail.com</li>
            <li><strong>Business Hours:</strong> Mon - Sat, 9 AM - 8 PM</li>
          </ul>

          {/* Social Media Links */}
          <div className="mt-4">
            <h4 className="text-primary" >Follow Us</h4>
            <div className="d-flex justify-content-start gap-3">
                <a href="https://www.facebook.com" target="_blank" className="text-primary"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="https://www.instagram.com" target="_blank" className="text-danger"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="text-success"><i className="fab fa-whatsapp fa-2x"></i></a>
                </div>
                </div>
                </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h3 className="mb-3 text-primary">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="form-control" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="form-control" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required 
                className="form-control" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="4" 
                required 
                className="form-control" 
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-danger mb-3">Our Location</h3>
          <div className="shadow-sm rounded">
            <MapContainer center={[17.385, 78.4867]} zoom={13} style={{ height: "400px", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[17.385, 78.4867]}>
                <Popup>We are here!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
