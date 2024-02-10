import Link from "next/link";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="misc-container">
      <h1>Coming Soon... stage</h1>
      <Link href="/about">
        <button type="button" className="btn-cart">
          Check out our about page
        </button>
      </Link>
    </div>
  );
};

export default ComingSoon;
