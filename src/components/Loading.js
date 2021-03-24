import React from "react";
// import lottie from "lottie-web";
// import loadingAnimation from "../animations/9629-loading.json";
import loadingAnimation from "../assets/loading-animation-transparent.gif";

export default function Loading() {
  return (
    <div className='bg-dark vh-100 d-flex justify-content-center align-items-center'>
      <img
        src={loadingAnimation}
        alt='loading...'
        className='loading-spinner'
      />
    </div>
  );
}
