import { ComingSoon, CustomNavbar, Item } from "@/components";
import { useStateContext } from "@/context/StateContext";
import { client } from "@/lib/client";
import React, { useEffect } from "react";

const Home = ({ items }) => {
  useEffect(() => {
    document.title = "Merch - Bodja";
  });
  const { setQty } = useStateContext();
  setQty(1);
  return (
    <>
      {/* <div className="heading">
        <h1>Bodja Merch site</h1>
        <p>Buy to support our team.</p>
      </div>
      <div className="items-container">
        {items?.map((item) => (
          <Item item={item} key={item._id} />
        ))}
      </div> */}
      <ComingSoon />
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
