import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = ({height = "h-screen"}) => {
  return (
    <div className={`flex justify-center items-center ${height}`}>
      <h1 className="text-6xl font-semibold bg-linear-to-br from-[#8a57ff] to-[#b07df6] bg-clip-text text-transparent tracking-widest flex items-center">
        L
        <span className="relative mx-3 w-12 h-12 flex justify-center items-center">
          {/* Outer rotating border */}
          <span>
            <FadeLoader speedMultiplier={1} color="#5f1ef6" />
          </span>
        </span>
        ADING
      </h1>
    </div>
  );
};

export default LoadingSpinner;
