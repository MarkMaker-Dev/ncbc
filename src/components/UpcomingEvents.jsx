import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../Services/eventsService";
import "../styles/UpcomingEvents.css";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        setError("");

        const data = await getUpcomingEvents();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("We couldn't load upcoming events. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  
  function formatEventDate(dateString) {
    if (!dateString) {
      return {
        day: "--",
        month: "---",
        fullDate: "Date unavailable",
      };
    }

    const date = new Date(`${dateString}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
      return {
        day: "--",
        month: "---",
        fullDate: "Date unavailable",
      };
    }

    return {
      day: date.toLocaleDateString("en-GB", {
        day: "2-digit",
      }),
      month: date.toLocaleDateString("en-GB", {
        month: "short",
      }),
      fullDate: date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
  }

  return (
    <section className="upcoming-events section-padding" id="events">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Upcoming Events & Programmes</h2>
          <p>
            Stay connected with what is happening at New Covenant Baptist
            Church.
          </p>
        </div>

        {loading && (
          <div className="events-message">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading upcoming events...</p>
          </div>
        )}

        {!loading && error && (
          <div className="events-message">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="events-empty">
            <h3>Stay Tuned for Upcoming Events</h3>
            <p>
              There are no upcoming events to display right now. Please check
              back soon.
            </p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="row g-4">
            {events.map((event) => {
              const date = formatEventDate(event.date);

              return (
                <div className="col-md-6 col-lg-4" key={event.id}>
                  <article className="event-card">
                    {event.image && (
                      <div className="event-card-image">
                        <img src={event.image} alt={event.title} />
                      </div>
                    )}

                    <div className="event-card-content">
                      <div className="event-date">
                        <span>{date.day}</span>
                        <small>{date.month}</small>
                      </div>

                      <h3>{event.title}</h3>

                      <p>{event.description}</p>

                      <div className="event-details">
                        <span>{date.fullDate}</span>
                        <span>{event.time}</span>
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-5">
          <a href="/events" className="events-view-all">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
