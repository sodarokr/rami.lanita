import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import MenuNav from "../MenuNav/MenuNav";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src="/img/logoMain.png" className="logoMain" />
      <MenuNav />
      <CartWidget />
    </div>
  );
};

export default NavBar;
