import Link from "next/link";
import React from "react";

const success = () => {
  return (
    <div className="misc-container">
      <h1>Thank You For Your Purchase</h1>
      <p>
        Email{" "}
        <a href="mailto:bodja.podcast@gmail.com">bodja.podcast@gmail.com </a>{" "}
        for any questions regarding your purchase.
      </p>
      <Link href="/">
        <button type="button" className="btn-cart">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default success;
