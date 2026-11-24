import "../styles/Welcome.css";

function Welcome() {
  return (
    <section className="welcome-section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Introduction text */}
          <div className="col-lg-6">
            {/* <p className="welcome-eyebrow">WELCOME TO NEW COVENANT</p> */}

            <h2 className="welcome-heading">
              A Place to Grow in <span>Faith</span> and <span>Purpose</span>
            </h2>

            <p className="welcome-description">
              New Covenant Baptist Church is a place where faith is nurtured,
              lives are shaped by God's Word, and people are encouraged to live
              out their purpose in Christ.
            </p>

            <p className="welcome-description">
              We are committed to raising a generation of believers who make a
              meaningful difference both in their walk with God and in the world
              around them.
            </p>

            <a href="#vision" className="welcome-link">
              Discover Our Vision
              <span aria-hidden="true"> →</span>
            </a>
          </div>

          {/* Church photograph */}
          <div className="col-lg-6">
            <div className="welcome-image-wrapper">
              <img
                src="/Images/welcome-image.jpg"
                alt="Worship and fellowship at New Covenant Baptist Church"
                className="welcome-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
