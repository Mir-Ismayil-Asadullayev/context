import "./assets/css/App.css";
import SideBar from "./components/SideBar.jsx";
import Products from "./components/Products.jsx";
import icon from "./assets/images/263142.png";

function App() {
  return (
    <>
      <div className="shoppingCart">
        <div className="title">Your Shopping Cart</div>
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className="container">
        <Products />
        <SideBar />
      </div>
    </>

  )
}

export default App;
