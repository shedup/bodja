import Link from "next/link";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="misc-container">
      <h1>Coming Soon...</h1>
      <p>
        Check out our <Link href="/about">about</Link> page
      </p>
    </div>
  );
};

export default ComingSoon;
