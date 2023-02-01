import { useMemo } from "react";
import cx from "classnames";
import {
  Button,
  Cart,
  Checkbox,
  CheckboxContainer,
  DefaultLayout,
  PageHeader,
} from "../../components";
import { dummyCarts } from "../../dummy";
import { styleUtils } from "../../styles";

export default function CartPage() {
  const totalPrice = useMemo(
    () => dummyCarts.reduce((total, { product }) => total + product.price, 0),
    []
  );

  return (
    <DefaultLayout>
      <Cart.Container>
        <PageHeader>장바구니</PageHeader>

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
                <Button type="normal" size="mini">
                  상품삭제
                </Button>
              </div>
            }
            title={<>든든배송 상품({dummyCarts.length}개)</>}
          >
            {dummyCarts.map(({ id, product }) => (
              <Cart.Item
                product={product}
                key={id}
                checkbox={<Checkbox name={`cart-${id}`} />}
              />
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
