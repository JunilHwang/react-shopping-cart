import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="nav flex justify-around">
        <div className="flex-center">
          <Link to="/">
            <h3 className="nav-title">CLEAN CODE SHOP</h3>
          </Link>
        </div>
        <div className="flex align-items-center gap-15">
          <Link to="/cart" className="nav-button">
            장바구니
          </Link>
          <Link to="/order-list" className="nav-button">
            주문목록
          </Link>
        </div>
      </nav>
    </header>
  );
}
