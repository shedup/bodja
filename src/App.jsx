import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import Home from "./components/Home";
import "./App.css"

function App() {
  return (
    <>
      <CustomNavbar />
      <div className="test">
      <Home />
      <CustomFooter style={{width: "100%",}}/>


      </div>
    </>
  );
}

export default App;
