import React from "react";

import fastDeliveryIcon from '../assets/icons/fast-delivery.svg';
import customerServiceIcon from '../assets/icons/customer-service.svg';
import originalPlantsIcon from '../assets/icons/original-plants.svg';
import affordablePriceIcon from '../assets/icons/affordable-price.svg';

const advantagesData = [
  {
    icon: fastDeliveryIcon,
    title: "Fast Delivery",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
    icon: customerServiceIcon,
    title: "Great Customer Service",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
    icon: originalPlantsIcon,
    title: "Original Plants",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
    icon: affordablePriceIcon,
    title: "Affordable Price",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
];

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__container">
        {advantagesData.map((advantage, index) => (
          <div key={index} className="advantages__card">
            <div className="advantages__header">
              <img src={advantage.icon} alt={`${advantage.title} icon`} className="advantages__icon" />
              <h5 className="advantages__title">{advantage.title}</h5>
            </div>
            <div className="advantages__description-container">
              <p className="advantages__description">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
