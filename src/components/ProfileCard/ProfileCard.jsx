import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({
  name = "Your Name",
  bio = "Short bio goes here. Tell people who you are in one sentence.",
  imageSrc = "",
}) {
  return (
    <div className="profile-card">
      <div className="profile-avatar-wrapper">
        {imageSrc ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            className="profile-avatar"
            src={imageSrc}
            alt={`Avatar of ${name}`}
          />
        ) : (
          <div className="profile-avatar profile-avatar--placeholder">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="profile-content">
        <div className="profile-name">{name}</div>
        <div className="profile-bio">{bio}</div>
      </div>
    </div>
  );
}
