import React from 'react';

const PremiumCard = ({ title, price, oldPrice, features, isFree }) => {
  return (
    <div className={`pricing-card ${isFree ? 'free-card' : 'premium-card'}`}>
      <h3 className="title">{title}</h3>
      <div className="price-section">
        {isFree ? (
          <button className="experience-btn">Experience Now</button>
        ) : (
          <>
            <div className="price">
              <span>₹{price}</span> 
              <span className="old-price">₹{oldPrice}</span>
            </div>
            <button className="purchase-btn">Purchase</button>
          </>
        )}
      </div>
      <ul className="features">
        {features.map((feature, idx) => (
          <li key={idx} className={feature.included ? 'included' : 'excluded'}>
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PremiumCard;
