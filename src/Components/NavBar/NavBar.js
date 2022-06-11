import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import MenuNav from "../MenuNav/MenuNav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/img/logoMain.png"}
          className="logoMain"
        />
      </Link>
      <MenuNav />
      <CartWidget />
    </div>
  );
};

export default NavBar;
