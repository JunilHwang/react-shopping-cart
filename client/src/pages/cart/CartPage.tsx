import { useCallback, useEffect, useMemo } from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import {
  Button,
  Cart,
  Checkbox,
  CheckboxContainer,
  DefaultLayout,
  Modal,
  PageHeader,
  useModalConfirm,
} from "../../components";
import { styleUtils } from "../../styles";
import {
  cartCheckedIdsAtom,
  useCartQuantity,
  useCarts,
  useCartsDelete,
  useOrderDetails,
} from "../../store";

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
  const { carts, refetchCarts } = useCarts();
  const { deleteCarts, deletedCarts } = useCartsDelete();
  const [quantityMap, setQuantityMap] = useCartQuantity(carts);
  const [checkedIds, setCheckedIds] = useAtom(cartCheckedIdsAtom);
  const setOrderDetails = useOrderDetails(checkedIds, quantityMap);
  const checkedDeleteConfirm = useModalConfirm();
  const orderConfirm = useModalConfirm();
  const navigate = useNavigate();

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
    () => carts.length > 0 && checkedIds.length === carts.length,
    [carts.length, checkedIds.length]
  );

  const noneChecked = useMemo(
    () => checkedIds.length === 0,
    [checkedIds.length]
  );

  const totalQuantity = useMemo(
    () =>
      Object.keys(quantityMap)
        .filter((id) => checkedMap[id])
        .reduce((acc, id) => acc + quantityMap[id], 0),
    [checkedMap, quantityMap]
  );

  const toggleChecked = useCallback(
    (targetId: number) => {
      setCheckedIds((ids) => {
        if (ids.includes(targetId)) {
          return ids.filter((id) => id !== targetId);
        } else {
          return [...ids, targetId];
        }
      });
    },
    [setCheckedIds]
  );

  const toggleAllChecked = useCallback(() => {
    setCheckedIds(() => {
      if (allChecked) {
        return [];
      } else {
        return carts.map(({ id }) => id);
      }
    });
  }, [allChecked, carts, setCheckedIds]);

  const changeQuantity = useCallback(
    (id: number, quantity: number) => {
      setQuantityMap((map) => ({
        ...map,
        [id]: quantity,
      }));
    },
    [setQuantityMap]
  );

  const deleteCheckedCarts = useCallback(() => {
    deleteCarts(checkedIds);
    checkedDeleteConfirm.close();
  }, [checkedDeleteConfirm, checkedIds, deleteCarts]);

  const deleteCart = useCallback(
    (id: number) => {
      deleteCarts([id]);
      checkedDeleteConfirm.close();
    },
    [checkedDeleteConfirm, deleteCarts]
  );

  const orderSelectedCarts = useCallback(() => {
    setOrderDetails(carts);
    navigate("/order");
  }, [carts, navigate, setOrderDetails]);

  useEffect(() => {
    if (deletedCarts) {
      refetchCarts();
      const allIds = carts.map(({ id }) => id);
      setCheckedIds((ids) =>
        ids.filter((checkedId) => allIds.includes(checkedId))
      );
    }
  }, [carts, deletedCarts, refetchCarts, setCheckedIds]);

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
                <Button
                  type="normal"
                  size="mini"
                  disabled={noneChecked}
                  onClick={checkedDeleteConfirm.open}
                >
                  상품삭제
                </Button>

                <Modal.Confirm
                  title="정말로 삭제하시겠습니까?"
                  show={checkedDeleteConfirm.show}
                  onClose={checkedDeleteConfirm.close}
                  onComplete={deleteCheckedCarts}
                />
              </div>
            }
            title={<>든든배송 상품({checkedIds.length}개)</>}
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
                onDelete={() => deleteCart(id)}
              />
            ))}
          </Cart.SectionLeft>

          <Cart.SectionRight
            title="결제예상금액"
            buttonLabel={<>주문하기({totalQuantity}개)</>}
            disabled={noneChecked}
            onClickButton={orderConfirm.open}
          >
            <Cart.TotalPrice label="결제예상금액" value={totalPrice} />
            <Modal.Confirm
              title="정말로 주문하시겠습니까?"
              show={orderConfirm.show}
              onClose={orderConfirm.close}
              onComplete={orderSelectedCarts}
            />
          </Cart.SectionRight>
        </Cart.SectionWrapper>
      </Cart.Container>
    </DefaultLayout>
  );
}
