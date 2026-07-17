import "./HowItWorks.css";

import {
  FaSearch,
  FaUserCheck,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Search Service",
    description:
      "Find the home service you need from our wide range of verified categories.",
  },
  {
    id: 2,
    icon: <FaUserCheck />,
    title: "Choose Professional",
    description:
      "Compare ratings, reviews and pricing before selecting the best provider.",
  },
  {
    id: 3,
    icon: <FaCheckCircle />,
    title: "Get It Done",
    description:
      "Book instantly and let experienced professionals complete your work.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section">

      <div className="section-heading">
        <h2>How It Works</h2>
        <p>
          Booking a trusted service is simple and takes just a few minutes.
        </p>
      </div>

      <div className="steps-container">

        {steps.map((step, index) => (
          <div className="step-card" key={step.id}>

            <div className="step-number">
              {step.id}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

            {index !== steps.length - 1 && (
              <div className="arrow">
                ➜
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
};

export default HowItWorks;