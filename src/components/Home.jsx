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
      {items.length == 0 && <p>No items sorry.</p>}

      <div className="background row">
        {items.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
          <Item name={item.name} description={item.description} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
