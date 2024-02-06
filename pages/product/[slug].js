import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import toast from "react-hot-toast";

const ItemDetails = ({ item }) => {
  const { image, name, details, price } = item;
  const [index, setIndex] = useState(0);
  const { qty, incQty, setQty, decQty, onAdd, notAvail, setShowCart } =
    useStateContext();
  const handleBuyNow = () => {
    onAdd(item, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={image ? urlFor(image && image[index]) : null}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <p className="details">{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <button type="button" className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </button>
              <span className="num">{qty}</span>
              <button type="button" className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </button>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(item, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "item"] {
        slug {
            current
        }
    }`;
  const items = await client.fetch(query);
  const paths = items.map((item) => ({
    params: {
      slug: item.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "item" && slug.current == '${slug}'][0]`;

  const item = await client.fetch(query);

  return {
    props: { item },
  };
};

export default ItemDetails;
