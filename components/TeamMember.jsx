import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const TeamMember = ({ member: { image, name, role, details } }) => {
  return (
    <div className="item">
      {/* Have to be .webp for better responsiveness */}
      <img
        src={image && urlFor(image && image[0])}
        className="item-img-top"
        width={350}
        height={350}
        alt="The description of the image not available yet."
      />
      <div className="item-body">
        <h5 className="item-title">{name}</h5>
        <p className="item-price">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
