import "./MenuNavItem.css";

const MenuNavItem = ({ text }) => {
  return (
    <div className="menuNavItem">
      <a className="menuNavItem-item">{text}</a>
    </div>
  );
};

export default MenuNavItem;
