import "../styles/FeaturedSermon.css";

function FeaturedSermon() {
  // Replace these placeholders with details from the church's YouTube channel.
  const sermon = {
    title: "JOY IS COMING",
    speaker: "Rev'Dr. Sunday A. Ajekiigbe ",
    category: "Sunday Worship Service",
    description:
      "Watch this featured message and grow deeper in your understanding of God's Word.",
    videoId: "yZaW0-KVdJc",
    youtubeUrl: "https://www.youtube.com/@ncbcofatedo",
  };

  const hasVideo = sermon.videoId !== "YOUR_YOUTUBE_VIDEO_ID";

  return (
    <section className="featured-sermon-section" id="sermons">
      <div className="container">
        <div className="sermon-section-heading">
          {/* <p className="sermon-eyebrow">SERMONS & TEACHINGS</p> */}
          <h2>
            Grow Through <span>God's Word</span>
          </h2>
          <p>
            Explore biblical teachings that encourage spiritual growth <span> and
            strengthen your walk with God.</span>
          </p>
        </div>

        <div className="row align-items-center g-5">
          {/* Sermon information */}
          <div className="col-lg-5">
            <span className="sermon-category">{sermon.category}</span>

            <h3 className="sermon-title">{sermon.title}</h3>

            <p className="sermon-speaker">By {sermon.speaker}</p>

            <p className="sermon-description">{sermon.description}</p>

            <a
              href={sermon.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sermon-youtube-btn"
            >
              Watch on YouTube
              <span aria-hidden="true"> →</span>
            </a>
          </div>

          {/* YouTube video */}
          <div className="col-lg-7">
            <div className="sermon-video-wrapper">
              {hasVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${sermon.videoId}`}
                  title={sermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="sermon-video-placeholder">
                  <div className="sermon-play-icon">▶</div>
                  <p>Add the church's featured YouTube video ID</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSermon;
