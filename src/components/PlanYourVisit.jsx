import "../styles/PlanYourVisit.css";

function PlanYourVisit() {
  const services = [
    {
      day: "Sunday",
      title: "1st Service (English)",
      time: "7:30 AM",
    },
    {
      day: "Sunday",
      title: "Sunday School",
      time: "9:00 AM",
    },
    {
      day: "Sunday",
      title: "2nd Service (Yoruba)",
      time: "10:00 AM",
    },
    {
      day: "Wednesday",
      title: "Bible Study / Prayer Meeting",
      time: "5:30 PM",
    },
    {
      day: "Thursday",
      title: "Discipleship Class",
      time: "5:00 PM",
    },
  ];

  return (
    <section className="visit-section" id="visit">
      <div className="container">
        <div className="visit-heading">
          {/* <p className="visit-eyebrow">YOU ARE WELCOME HERE</p> */}
          <h2>
            Plan Your <span>Visit</span>
          </h2>
          <p>
            Whether you're visiting for the first time or looking for a church
            to call home, we'd love to welcome you.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Service information */}
          <div className="col-lg-6">
            <div className="visit-information">
              <h3>Join Us for Worship</h3>
              <p className="visit-subtitle">
                Find a service time that works for you.
              </p>

              <div className="service-list">
                {services.map((service, index) => (
                  <div className="service-item" key={index}>
                    <div>
                      <h4>{service.name}</h4>
                      <p>{service.day}</p>
                    </div>

                    <span className="service-time">{service.time}</span>
                  </div>
                ))}
              </div>

              <div className="visit-contact">
                <h4>Have Questions?</h4>
                <p>
                  We'd be happy to help you prepare for your visit. Get in touch
                  with us.
                </p>

                <a
                  href="https://wa.me/YOUR_PHONE_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-contact-btn"
                >
                  Contact Us on WhatsApp
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Church location */}
          <div className="col-lg-6">
            <div className="visit-location">
              <h3>Find Us</h3>

              <p>
                New Covenant Baptist Church, Ofatedo, Osogbo, Osun State,
                Nigeria.
              </p>

              <div className="visit-map">
                <iframe
                  src="https://www.google.com/maps?q=New+Covenant+Baptist+Church+Ofatedo+Osogbo&output=embed"
                  title="New Covenant Baptist Church location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=New+Covenant+Baptist+Church+Ofatedo+Osogbo"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link"
              >
                Get Directions <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanYourVisit;
