import "./Item.css";
import tshirt from "../assets/tibetanTshirt.jpg";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

function Item(props) {
  return (
    <>
          <div className="card" key={props.name}>
            <img src={tshirt} className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
          </div>
      </div>
    </>
  );
}

export default Item;
