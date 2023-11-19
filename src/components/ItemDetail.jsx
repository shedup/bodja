import "./ItemDetail.css";
import tshirt from "../assets/tibetanTshirt.jpg";

function ItemDetail(props){

  return (
  <>
    <div className="outer">
    <div className="inner">
      <h1>Tibetan Shirt</h1>
      <img src={tshirt} className="card-img-top img-fluid" style={{ width: 500, height: 600 }} alt="Placeholder" />
      <p>Price: $99</p>
      <p>Details: A traditional Tibetan Shirt</p>
      </div>
    </div>
  </>);
}

export default ItemDetail;