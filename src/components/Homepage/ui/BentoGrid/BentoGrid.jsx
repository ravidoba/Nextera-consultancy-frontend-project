import React from "react";
import "./BentoGrid.scss";

const BentoLayout = ({data}) => {
 

  return (
    <div className="bento-layout">
      <div className="bento-grid">
        {data.map((feature, index) => (
          <div key={index} className={`bento-item item-${index + 1}`}>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoLayout;
