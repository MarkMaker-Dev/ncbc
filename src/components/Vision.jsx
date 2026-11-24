import "../styles/Vision.css";

function Vision() {
  const visionPillars = [
    {
      title: "Spiritual Growth",
      description:
        "Growing believers in their relationship with God through faith, prayer and spiritual maturity.",
      image: "/Images/Teaching.jpg",
      alt: "People worshipping together in church",
    },
    {
      title: "Biblical Foundation",
      description:
        "Building lives on the truth of God's Word and a deeper understanding of Scripture.",
      image: "/Images/pastor-1.jpg",
      alt: "An open Bible",
    },
    {
      title: "Kingdom Impact",
      description:
        "Equipping believers to make a positive difference in their communities and the world.",
      image: "/Images/community-impact-clean.jpg",
      alt: "Church members serving their community",
    },
  ];

  return (
    <section className="vision-section" id="vision">
      <div className="container">
        <div className="vision-heading">
          {/* <p className="vision-eyebrow">OUR VISION</p> */}

          <h2>
            Raising a Generation of Believers That Are
            <span> Heavenly </span> and <span>Earthly</span> Relevant.
          </h2>

          <p className="vision-intro">
            We are committed to nurturing believers who are firmly rooted in
            Christ and equipped to make a meaningful impact in the world around
            them.
          </p>
        </div>

        <div className="row g-4 vision-pillars">
          {visionPillars.map((pillar) => (
            <div className="col-md-4" key={pillar.number}>
              <article className="vision-card">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="vision-card-image"
                />

                <div className="vision-card-overlay"></div>

                <div className="vision-card-content">

                  <h3>{pillar.title}</h3>

                  <p>{pillar.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vision;
