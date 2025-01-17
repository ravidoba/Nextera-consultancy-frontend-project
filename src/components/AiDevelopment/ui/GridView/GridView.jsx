import './styles.scss';  // Import the SCSS file

const ApproachGrid = ({steps}) => {
  return (
    <section className="approach-section">
      <div className="grid-container">
        {steps.map((step) => (
          <div key={step.number} className="grid-item">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApproachGrid;
