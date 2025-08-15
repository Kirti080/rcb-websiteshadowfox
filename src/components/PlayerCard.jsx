import React from "react";

export default function PlayerCard({ name, role, img }) {
  return (
    <div className="card" data-aos="fade-up">
      <img className="thumb" src={img} alt={name} />
      <h3 className="player-name">{name}</h3>
      <div className="player-role">{role}</div>
    </div>
  );
}
