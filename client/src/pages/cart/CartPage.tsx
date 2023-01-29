import { useMemo } from "react";
import cx from "classnames";
import {
  Button,
  Checkbox,
  CheckboxContainer,
  DefaultLayout,
  DivideLine,
  Price,
} from "../../components";
import { dummyCarts } from "../../dummy";
import { ReactComponent as IconTrash } from "../../assets/svgs/trash.svg";
import styleUtils from "../../styles/modules/Utils.module.scss";
import styles from "./Cart.module.scss";

export default function CartPage() {
  const totalPrice = useMemo(
    () => dummyCarts.reduce((total, { product }) => total + product.price, 0),
    []
  );

  return (
    <DefaultLayout>
      <section className={styles.cartSection}>
        <header className={cx(styleUtils.flexColCenter, styleUtils.mt20)}>
          <h2 className={styles.cartSectionTitle}>장바구니</h2>
          <DivideLine className={styleUtils.mt20} />
        </header>

        <div className={styleUtils.flex}>
          <section className={styles.cartLeftSection}>
            <div
              className={cx(
                styleUtils.flex,
                styleUtils.justifyBetween,
                styleUtils.alignItemsCenter
              )}
            >
              <CheckboxContainer
                checkbox={{ name: "checkbox" }}
                label="선택해제"
              />
              <button className={styles.cartDeleteButton}>상품삭제</button>
            </div>
            <h3 className={styles.cartTitle}>
              든든배송 상품({dummyCarts.length}개)
            </h3>

            <DivideLine type="gray" className={styleUtils.mt10} />

            {dummyCarts.map(({ id, product }) => (
              <div key={id}>
                <div className={styles.cartContainer}>
                  <div
                    className={cx(
                      styleUtils.flex,
                      styleUtils.gap15,
                      styleUtils.mt10
                    )}
                  >
                    <Checkbox name={`cart-${id}`} />
                    <img
                      className={cx(styleUtils.w144, styleUtils.h144)}
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <span className={styles.cartName}>{product.name}</span>
                  </div>
                  <div
                    className={cx(
                      styleUtils.flexColCenter,
                      styleUtils.justifyEnd,
                      styleUtils.gap15
                    )}
                  >
                    <IconTrash />
                    <div className="number-input-container">
                      <input
                        type="number"
                        className="number-input"
                        defaultValue="1"
                      />
                      <div>
                        <button className="number-input-button">▲</button>
                        <button className="number-input-button">▼</button>
                      </div>
                    </div>
                    <Price className={styles.cartPrice} price={product.price} />
                  </div>
                </div>
                <DivideLine type="thin" className={styleUtils.mt10} />
              </div>
            ))}
          </section>

          <section className={styles.cartRightSection}>
            <div className={styles.cartRightSectionTop}>
              <h3 className={styles.cartTitle}>결제예상금액</h3>
            </div>
            <DivideLine type="thin" />

            <div className={styles.cartRightSectionBottom}>
              <div
                className={cx(
                  styleUtils.flex,
                  styleUtils.justifyBetween,
                  styleUtils.p20,
                  styleUtils.mt20
                )}
              >
                <span className="highlight-text">결제예상금액</span>
                <Price className="highlight-text" price={totalPrice} />
              </div>
              <div
                className={cx(
                  styleUtils.flexCenter,
                  styleUtils.mt30,
                  styleUtils.mx10
                )}
              >
                <Button
                  type="primary"
                  size="full"
                  className={styleUtils.flexCenter}
                >
                  주문하기({dummyCarts.length}개)
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </DefaultLayout>
  );
}
