import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaSpotify } from "react-icons/fa";

const CustomFooter = () => {
  return (
    <div className="footer-container">
      <a
        href="https://www.instagram.com/bodja.podcast/"
        target="_blank"
        className="icon-links"
      >
        <AiFillInstagram size={"2.5em"} />
      </a>
      <a
        href="https://www.youtube.com/@BodjaPodcast"
        target="_blank"
        className="icon-links"
      >
        <AiFillYoutube size={"2.5em"} />
      </a>
      <a
        href="https://open.spotify.com/show/3jlX5LTMC7GJHDww2NelXW?go=1&sp_cid=971833fa67f0d623361bfab4e255b146&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=e9d8b86605fd48db"
        target="_blank"
        className="icon-links"
      >
        <FaSpotify size={"2.5em"} />
      </a>
      <a
        href="https://www.facebook.com/people/Bodja-Podcast/61550117754110/"
        target="_blank"
        className="icon-links"
      >
        <FaFacebook size={"2.5em"} />
      </a>
    </div>
  );
};

export default CustomFooter;
