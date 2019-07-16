import React from "react";

const SpecialButton = ({special}) => {
  return (
    <div class="special">
    <button >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {special}
    </button>
    </div>
  );
};
export default SpecialButton;
