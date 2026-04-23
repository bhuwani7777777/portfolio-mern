import "./About.css";
import { useEffect, useState } from "react";

function About() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);

  const username = "bhuwani7777777"; // ✅ your GitHub

  useEffect(() => {
    // 👤 Fetch profile
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setProfile(data));

    // 📦 Fetch repos
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="about-container">

      <h1 className="page-title">About Me</h1>

      {/* 👤 PROFILE */}
      {profile && (
        <div className="github-profile">

          <img src={profile.avatar_url} alt="avatar" />

          <h2>{profile.name || "Bhuwani"}</h2>

          <p>{profile.bio || "Full Stack Developer (MERN)"}</p>

          <div className="github-stats">
            <span>📦 {profile.public_repos} Repos</span>
            <span>👥 {profile.followers} Followers</span>
            <span>➡️ {profile.following} Following</span>
          </div>

          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            View GitHub Profile
          </a>

        </div>
      )}

      {/* 📦 REPOS */}
      <h2 className="section-title">My GitHub Projects</h2>

      <div className="repos-grid">
        {repos.slice(0, 6).map(repo => (
          <div key={repo.id} className="repo-card">

            <h3>{repo.name}</h3>

            <p>{repo.description || "No description available"}</p>

            <div className="repo-info">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </div>

            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View Repository →
            </a>

          </div>
        ))}
      </div>

    </div>
  );
}

export default About;