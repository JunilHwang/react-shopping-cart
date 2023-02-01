import { Link } from "react-router-dom";
import classnames from "classnames";
import styleUtils from "../../../../styles/Utils.module.scss";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <nav
        className={classnames(
          styles.nav,
          styleUtils.flex,
          styleUtils.justifyAround
        )}
      >
        <div className={classnames(styleUtils.flexCenter)}>
          <Link to="/">
            <h3 className={styles.navTitle}>CLEAN CODE SHOP</h3>
          </Link>
        </div>

        <div
          className={classnames(
            styleUtils.flexCenter,
            styleUtils.alignItemsCenter,
            styleUtils.gap15
          )}
        >
          <Link to="/cart" className={styles.navButton}>
            장바구니
          </Link>
          <Link to="/order-list" className={styles.navButton}>
            주문목록
          </Link>
        </div>
      </nav>
    </header>
  );
}
