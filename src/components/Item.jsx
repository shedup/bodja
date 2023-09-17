import "./Item.css";
import tshirt from "../assets/tibetanTshirt.jpg";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

function Item(props) {
  return (
    <>
      {props.items.length == 0 && <p>No items sorry.</p>}
      {props.items.map((key, index) => (
        <div className="card" key={props.items[index].name}>
          <img
            src={tshirt}
            className="card-img-top"
            alt="Placeholder"
            style={{ width: "18rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.items[index].name}</h5>
            <p className="card-text">{props.items[index].description}</p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Item;
