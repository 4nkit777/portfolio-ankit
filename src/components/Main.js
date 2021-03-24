import React from "react";
// import  MainImage from '../assets/main-img.jpg';

const Main = () => {
  return (
    <main className='d-flex vh-100 col-10 col-md-10'>
      <div className='d-flex justify-content-between p-1 w-100'>
        {/* text */}
        <div className='d-flex flex-column align-items-start justify-content-center p-1 position-relative '>
          <h2>
            Hi! I am <br />
            <span style={{ color: "#1F3A99" }}>Ankit Sil</span>
          </h2>
          <p className='mt-3'>UI/UX Designer | An aspiring Web Developer</p>
          <p
            className='mb-5'
            style={{
              fontSize: "0.8rem",
              color: "#091B59",
              fontWeight: "600",
            }}
          >
            He's a UI/UX Designer based in Toronto, ON. An autodidact, he's
            constantly improving user experiences by applying Design Thinking
            Principles on to his designs.
          </p>
          {/* <div className='container'>
            <div className='row justify-content-start'>
              <button
                className='btn col-md-3 mr-2 main-btn'
                onClick={() =>
                  (window.location.href = "mailto:ankit.sil@outlook.com")
                }
              >
                Contact Me
              </button>
              <button
                className='btn col-md-3 main-btn'
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/ankit-sil-562557164/")
                }
              >
                Let's Chat!
              </button>
            </div>
          </div> */}

          <div className='d-flex justify-content-around w-100 main-screen-btn-container'>
            {/* <button
              className='btn col-md-6 mr-2 main-btn'
              onClick={() =>
                (window.location.href = "mailto:ankit.sil@outlook.com")
              }
            >
              Contact Me
            </button>
            <button
              className='btn col-md-6 main-btn '
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/ankit-sil-562557164/")
              }
            >
              Let's Chat!
            </button> */}
            <button
              className='btn btn-light rounded learn-more-btn w-75 mr-2 p-2'
              onClick={() =>
                (window.location.href = "mailto:ankit.sil@outlook.com")
              }
            >
              Contact Me
            </button>
            <button
              className='btn btn-light rounded learn-more-btn w-75 p-2'
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/ankit-sil-562557164/")
              }
            >
              Let's Chat!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
