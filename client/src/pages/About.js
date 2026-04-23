import "./About.css";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

function About() {
  const [profile, setProfile] = useState(null);
  const username = "bhuwani7777777";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div className="about-container">

      {/* 🔥 HEADER */}
      <div className="about-header">
        <h1>About Me</h1>
        <p>Passionate Full Stack Developer building modern web applications</p>
      </div>

      {/* 👤 PROFILE SECTION */}
      {profile && (
        <div className="about-profile">

          <div className="profile-left">
            <img src={profile.avatar_url} alt="avatar" />
          </div>

          <div className="profile-right">
            <h2>{profile.name || "Bhuwani"}</h2>

            <p className="bio">
              {profile.bio || "Full Stack Developer (MERN) | AI Enthusiast"}
            </p>

            <div className="github-stats">
              <div className="stat">
                <h3>{profile.public_repos}</h3>
                <p>Repositories</p>
              </div>

              <div className="stat">
                <h3>{profile.followers}</h3>
                <p>Followers</p>
              </div>

              <div className="stat">
                <h3>{profile.following}</h3>
                <p>Following</p>
              </div>
            </div>

            <a
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View GitHub Profile →
            </a>
          </div>

        </div>
      )}

      {/* 🧠 SKILLS / SUMMARY */}
      <div className="about-summary">
        <h2>Who I Am</h2>
        <p>
          I am a passionate Full Stack Developer specializing in MERN stack,
          building scalable, high-performance web applications. I enjoy solving
          complex problems, designing modern UI, and continuously learning new
          technologies.
        </p>
      </div>

      {/* 📊 GITHUB ACTIVITY */}
      <div className="github-activity">
        <h2>GitHub Activity</h2>

        <div className="calendar-box">
          <GitHubCalendar
            username={username}
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            theme={{
              light: ['#0f172a', '#0e4429', '#006d32', '#26a641', '#39d353'],
              dark: ['#0f172a', '#0e4429', '#006d32', '#26a641', '#39d353']
            }}
          />
        </div>
      </div>

    </div>
  );
}

export default About;