import { useMemo } from "react";
import cx from "classnames";
import {
  Cart,
  Checkbox,
  CheckboxContainer,
  DefaultLayout,
  DivideLine,
  NumberInput,
  Price,
} from "../../components";
import { dummyCarts } from "../../dummy";
import { ReactComponent as IconTrash } from "../../assets/svgs/trash.svg";
import { styleUtils } from "../../styles";
import styles from "../../components/carts/Cart.module.scss";

export default function CartPage() {
  const totalPrice = useMemo(
    () => dummyCarts.reduce((total, { product }) => total + product.price, 0),
    []
  );

  return (
    <DefaultLayout>
      <Cart.Container>
        <Cart.Header>장바구니</Cart.Header>

        <Cart.SectionWrapper>
          <Cart.SectionLeft
            top={
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
            }
            title={<>든든배송 상품({dummyCarts.length}개)</>}
          >
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
                    <NumberInput defaultValue={1} />
                    <Price className={styles.cartPrice} price={product.price} />
                  </div>
                </div>
                <DivideLine type="thin" className={styleUtils.mt10} />
              </div>
            ))}
          </Cart.SectionLeft>

          <Cart.SectionRight
            title="결제예상금액"
            buttonLabel={<>주문하기({dummyCarts.length}개)</>}
          >
            <Cart.TotalPrice label="결제예상금액" value={totalPrice} />
          </Cart.SectionRight>
        </Cart.SectionWrapper>
      </Cart.Container>
    </DefaultLayout>
  );
}
