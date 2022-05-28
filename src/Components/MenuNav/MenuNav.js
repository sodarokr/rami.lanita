import "./MenuNav.css";
import MenuNavItem from "../MenuNavItem/MenuNavItem";

const MenuNav = () => {
  return (
    <div className="menuNav">
      <MenuNavItem text="Amigurumi" />
      <MenuNavItem text="Trapillo" />
      <MenuNavItem text="Crochet" />
      <MenuNavItem text="Indumentaria Bebé" />
      <MenuNavItem text="Tejidos de Punto" />
      <MenuNavItem text="Accesorios Montessori" />
      <MenuNavItem text="Apegos" />
    </div>
  );
};

export default MenuNav;
