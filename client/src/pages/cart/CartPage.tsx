import { useCallback, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import {
  Button,
  Cart,
  Checkbox,
  CheckboxContainer,
  DefaultLayout,
  PageHeader,
} from "../../components";
import { styleUtils } from "../../styles";
import { useCarts } from "../../store";

const convertIdsToBooleanMap = (
  allIds: number[],
  checkedIds: number[]
): { [id: string]: boolean } =>
  allIds.reduce(
    (acc: Record<number, boolean>, id) => ({
      ...acc,
      [id]: checkedIds.includes(id),
    }),
    {}
  );

export default function CartPage() {
  const { carts } = useCarts();
  const [quantityMap, setQuantityMap] = useState<Record<string, number>>({});
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const checkedMap = useMemo(
    () =>
      convertIdsToBooleanMap(
        carts.map(({ id }) => id),
        checkedIds
      ),
    [carts, checkedIds]
  );

  const totalPrice = useMemo(
    () =>
      carts
        .filter(({ id }) => checkedIds.includes(id))
        .reduce(
          (total, { id, product }) => total + quantityMap[id] * product.price,
          0
        ),
    [carts, checkedIds, quantityMap]
  );

  const allChecked = useMemo(
    () => checkedIds.length === carts.length,
    [carts.length, checkedIds.length]
  );

  const toggleChecked = useCallback((targetId: number) => {
    setCheckedIds((ids) => {
      if (ids.includes(targetId)) {
        return ids.filter((id) => id !== targetId);
      } else {
        return [...ids, targetId];
      }
    });
  }, []);

  const toggleAllChecked = useCallback(() => {
    setCheckedIds(() => {
      if (allChecked) {
        return [];
      } else {
        return carts.map(({ id }) => id);
      }
    });
  }, [allChecked, carts]);

  const changeQuantity = useCallback((id: number, quantity: number) => {
    setQuantityMap((map) => ({
      ...map,
      [id]: quantity,
    }));
  }, []);

  useEffect(() => {
    setQuantityMap(
      carts.reduce(
        (acc, { id }) => ({
          ...acc,
          [id]: 1,
        }),
        {}
      )
    );
  }, [carts]);

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
                  label="선택해제"
                  onChange={toggleAllChecked}
                  checked={allChecked}
                />
                <Button type="normal" size="mini">
                  상품삭제
                </Button>
              </div>
            }
            title={<>든든배송 상품({carts.length}개)</>}
          >
            {carts.map(({ id, product }) => (
              <Cart.Item
                key={id}
                product={product}
                quantity={quantityMap[id]}
                checkbox={
                  <Checkbox
                    name={`cart-${id}`}
                    onChange={() => toggleChecked(id)}
                    checked={checkedMap[id]}
                  />
                }
                onChangeQuantity={(quantity) => changeQuantity(id, quantity)}
              />
            ))}
          </Cart.SectionLeft>

          <Cart.SectionRight
            title="결제예상금액"
            buttonLabel={<>주문하기({carts.length}개)</>}
          >
            <Cart.TotalPrice label="결제예상금액" value={totalPrice} />
          </Cart.SectionRight>
        </Cart.SectionWrapper>
      </Cart.Container>
    </DefaultLayout>
  );
}
