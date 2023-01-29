import { useMemo } from "react";
import { DefaultLayout, Price } from "../../components";
import { dummyCarts } from "../../dummy";
import { ReactComponent as IconTrash } from "../../assets/svgs/trash.svg";

export default function CartPage() {
  const totalPrice = useMemo(
    () => dummyCarts.reduce((total, { product }) => total + product.price, 0),
    []
  );

  return (
    <DefaultLayout>
      <section className="cart-section">
        <header className="flex-col-center mt-20">
          <h2 className="cart-section__title">장바구니</h2>
          <hr className="divide-line mt-20" />
        </header>

        <div className="flex">
          <section className="cart-left-section">
            <div className="flex justify-between align-items-center">
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  name="checkbox"
                  type="checkbox"
                  checked
                />
                <label className="checkbox-label" htmlFor="checkbox">
                  선택해제
                </label>
              </div>
              <button className="cart-delete-button">상품삭제</button>
            </div>
            <h3 className="cart-title">든든배송 상품({dummyCarts.length}개)</h3>

            <hr className="divide-line-gray mt-10" />

            {dummyCarts.map(({ id, product }) => (
              <div key={id}>
                <div className="cart-container">
                  <div className="flex gap-15 mt-10">
                    <input
                      className="checkbox"
                      name="checkbox"
                      type="checkbox"
                      checked
                    />
                    <img
                      className="w-144 h-144"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <span className="cart-name">{product.name}</span>
                  </div>
                  <div className="flex-col-center justify-end gap-15">
                    <IconTrash />
                    <div className="number-input-container">
                      <input type="number" className="number-input" value="1" />
                      <div>
                        <button className="number-input-button">▲</button>
                        <button className="number-input-button">▼</button>
                      </div>
                    </div>
                    <Price className="cart-price" price={product.price} />
                  </div>
                </div>
                <hr className="divide-line-thin mt-10" />
              </div>
            ))}
          </section>

          <section className="cart-right-section">
            <div className="cart-right-section__top">
              <h3 className="cart-title">결제예상금액</h3>
            </div>
            <hr className="divide-line-thin" />
            <div className="cart-right-section__bottom">
              <div className="flex justify-between p-20 mt-20">
                <span className="highlight-text">결제예상금액</span>
                <Price className="highlight-text" price={totalPrice} />
              </div>
              <div className="flex-center mt-30 mx-10">
                <button className="primary-button flex-center">
                  주문하기({dummyCarts.length}개)
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </DefaultLayout>
  );
}
