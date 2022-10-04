import React from "react";

const useDegree = (temp) => {
  const tempr = (deg) => {
    if (deg < 30 && deg > 25) {
      return "purple";
    } else if (deg < 25 && deg > 20) {
      return "orange";
    } else if (deg > 30) {
      return "red";
    } else if (deg < 25) {
      return "gray";
    }
  };

  return tempr;
};

export default useDegree;
