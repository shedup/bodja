import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const CustomFooter = () => {
  return (
    <div className="footer-container">
      <a href="https://www.instagram.com/bodja.podcast/"></a>
      <AiFillInstagram width={200} />
      <AiFillYoutube />
    </div>
  );
};

export default CustomFooter;
