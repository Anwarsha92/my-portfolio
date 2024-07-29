import React from "react";

const TabButton = ({ active, selecTab, children }) => {
  const buttonClasses = active
    ? "border-b border-purple-600"
    : "text-[#ADB7BE]";
  return (
    <div>
      <button onClick={selecTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`} >{children}</p>
        
      </button>
    </div>
  );
};

export default TabButton;
