import "../styles/intro.css";

function Intro() {
  return (
    <section className="main">
      <div className="intro-container">
        <div className="description">
          <div className="desc-text">
            <div className="capsuleInfo">
              🚀 The Future of File Sharing is Here
            </div>
            <h1>
              Own Your Files.
              <span>Share Securely.</span>
            </h1>
            <p>
              MetaDrive revolutionizes file sharing with blockchain technology
              and IPFS storage. No more relying on centralized platforms that
              can disappear overnight.
            </p>
          </div>
          <div className="start">
            <button className="start-button">Get Started Free</button>
            <button className="watch">Watch Demo</button>
          </div>
          <div className="points">
            <div className="pointBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="green"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>
              <span>No signup required</span>
            </div>
            <div className="pointBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="green"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>
              <span>100% decentralized</span>
            </div>
            <div className="pointBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="green"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>
              <span>Open source</span>
            </div>
          </div>
        </div>
        <div className="image/video">
          <div className="imageContainer">
            <div className="imageHolder">
              <img
                src="https://media.istockphoto.com/id/1321965054/photo/network-of-interconnected-people-interactions-between-employees-and-working-groups-social.jpg?s=612x612&w=0&k=20&c=wL_foyV3Z_9eaiHbSXaDRwr8Fslvb8yxohegQ70NrF8="
                alt="DecentralDrive Dashboard"
                className="dashboard-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
