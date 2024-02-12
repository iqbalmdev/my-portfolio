import React from "react";
import movingShapeStyles from "./movingShapesStyles.module.css";
const mss = movingShapeStyles;
const MovingShapes = () => {
  return (
    <div className={mss.moving_shapes_container}>
      <svg className={mss.shape}>
        <rect x="10" y="10" width="100" height="50" />
      </svg>
      <svg className="moving-shape">
        <circle cx="50" cy="50" r="40" />
      </svg>
    </div>
  );
};

export default MovingShapes;
