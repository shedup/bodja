import { CustomNavbar, Item } from "@/components";
import { client } from "@/lib/client";
import React from "react";

const Home = ({ items }) => {
  return (
    <>
      <div className="heading">
        <h1>Bodja Merch site</h1>
        <p>Buy to support our team.</p>
      </div>
      <div className="items-container">
        {items?.map((item) => (
          <Item item={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "item"]';
  const items = await client.fetch(query);

  return {
    props: { items },
  };
};
export default Home;
