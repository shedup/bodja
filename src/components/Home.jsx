import "./Home.css";
import Item from "./Item.jsx";

function Home() {
  let items = [
    { name: "Tshirt1", description: "Tibetan traditional shirt" },
    { name: "Tshirt2", description: "Tibetan traditional shirt" },
    { name: "Tshirt3", description: "Tibetan traditional shirt" },
    { name: "Tshirt4", description: "Tibetan traditional shirt" },
  ];

  return (
    <>
      <div className="background row">
        <Item items={items} />
      </div>
    </>
  );
}

export default Home;
