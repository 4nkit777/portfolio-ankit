import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className='container text-center mt-5'>
      <p>The page you are looking for doesn't exists</p>
      <button className='text-center text-light btn btn-dark w-50'>
        <Link to='/'>Go Back</Link>
      </button>
    </div>
  );
}
