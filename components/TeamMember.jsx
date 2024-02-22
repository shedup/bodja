import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
// import default1 from "/images/default.png";

const TeamMember = ({ member: { image, name, role, details } }) => {
  return (
    <div className="team">
      {/* Have to be .webp for better responsiveness */}
      <img
        src={image ? urlFor(image && image[0]) : "/images/default.png"}
        className="team-img-top"
        width={450}
        height={350}
        alt="The description of the image not available yet."
      />
      <div className="team-body">
        <h5 className="team-name">{name}</h5>
        <p className="team-role">{details}</p>
      </div>
    </div>
  );
};

export default TeamMember;
