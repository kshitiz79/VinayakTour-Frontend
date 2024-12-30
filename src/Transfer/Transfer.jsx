import React from 'react';
import car from '../images/car.png';
import sedanCar from '../images/sedanCar.png';
import suvCar from '../images/suvCar.png';
import luxuryCar from '../images/luxuryCar.png';
import './Transfer.css';

function Transfer() {
  return (
    <div className="transfer-page">
      <section className="hero">
        <img src={car} alt="Luxury Car" className="hero-image" />
        <div className="hero-text">
          <h1>Your Comfortable and Safe Journey Starts Here</h1>
          <p>
            Experience the best travel in our premium, well-maintained cars with top-class facilities.
          </p>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Our Cars?</h2>
        <div className="features">
          <div className="feature">
            <h3>Well-Maintained Vehicles</h3>
            <p>
              Our cars are regularly serviced to ensure smooth and safe travel. We prioritize safety
              and comfort, ensuring that every vehicle undergoes regular inspections to meet the
              highest standards of quality.
            </p>
          </div>
          <div className="feature">
            <h3>Comfortable and Spacious</h3>
            <p>
              Travel in comfort with air conditioning, leather seats, and plenty of legroom. Our
              cars are equipped with premium leather seating, offering a luxurious and relaxing
              experience for all passengers.
            </p>
          </div>
          <div className="feature">
            <h3>Experienced Drivers</h3>
            <p>
              Our professional drivers ensure a safe and smooth ride to your destination. Our
              drivers are highly trained and experienced, with an in-depth knowledge of local routes
              and traffic conditions to ensure the quickest and safest journey.
            </p>
          </div>
        </div>
      </section>

      <section className="fleet">
        <h2>Our Fleet of Cars</h2>
        <div className="car-list">
          <div className="car">
            <img src={sedanCar} alt="Sedan" />
            <h3>Sedan</h3>
            <p>Our Sedan Cars are the epitome of style, comfort, and efficiency, making them an ideal choice for individual travelers or small groups. Designed to deliver a smooth and relaxing ride, our sedans feature spacious interiors with premium leather seats and ample legroom to ensure maximum comfort. Whether you're traveling for business or leisure, these cars provide a perfect blend of elegance and practicality</p>
          </div>
          <div className="car">
            <img src={suvCar} alt="SUV" />
            <h3>SUV</h3>
            <p>Our SUV Cars offer the perfect combination of space, comfort, and luxury, making them an excellent choice for families or larger groups. Designed for both urban and off-road adventures, our SUVs feature roomy interiors with plush seating, ensuring every passenger enjoys maximum comfort. With ample cargo space, these vehicles are ideal for storing luggage, sports equipment, or shopping bags.</p>
          </div>
          <div className="car">
            <img src={luxuryCar} alt="Luxury Car" />
            <h3>Luxury Car</h3>
            <p>Our Luxury Cars redefine travel with elegance and sophistication, offering an unparalleled experience of comfort and style. Perfect for business trips, special occasions, or simply indulging in a premium journey, these high-end vehicles feature state-of-the-art amenities. From plush leather interiors and ambient lighting to advanced climate control and top-tier sound systems, every detail is designed to enhance your comfort</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The best transfer service I've ever used! The car was spotless, and the driver was very friendly. Highly recommend!"</p>
          <span>- Customer Name</span>
        </div>
        <div className="testimonial">
          <p>"I felt like a VIP during my entire journey. Comfortable ride with all the amenities I needed!"</p>
          <span>- Customer Name</span>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Travel in Comfort?</h2>
        <p>Book your transfer today and enjoy a hassle-free journey with us!</p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
}

export default Transfer;
