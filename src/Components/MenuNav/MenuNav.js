import "./MenuNav.css";
import MenuNavItem from "../MenuNavItem/MenuNavItem";

const MenuNav = () => {
  return (
    <div className="menuNav">
      <MenuNavItem text="Amigurumis" />
      <MenuNavItem text="Trapillo" />
      <MenuNavItem text="Colgantes" />
      <MenuNavItem text="Indumentaria Bebé" />
      <MenuNavItem text="Tejidos" />
      <MenuNavItem text="Accesorios Bebé" />
      <MenuNavItem text="Apegos" />
    </div>
  );
};

export default MenuNav;
