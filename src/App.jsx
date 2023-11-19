import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import Home from "./components/Home";
import "./App.css"
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <CustomNavbar />
      <div className="test">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ItemDetail />} />
      </Routes>
      <CustomFooter style={{width: "100%",}}/>


      </div>
    </>
  );
}

export default App;
