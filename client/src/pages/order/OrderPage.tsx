import { useAtom } from "jotai";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cart,
  DefaultLayout,
  Modal,
  Order,
  PageHeader,
  useModalConfirm,
} from "../../components";
import {
  cartCheckedIdsAtom,
  orderDetailsAtom,
  useCartsDelete,
  useOrderAdd,
} from "../../store";

export default function OrderPage() {
  const [orderDetails] = useAtom(orderDetailsAtom);
  const [checkedIds] = useAtom(cartCheckedIdsAtom);
  const { addOrder, addedOrder } = useOrderAdd();
  const { deleteCarts } = useCartsDelete();
  const navigate = useNavigate();

  const totalQuantity = useMemo(
    () => orderDetails.reduce((acc, { quantity }) => acc + quantity, 0),
    [orderDetails]
  );

  const totalPrice = useMemo(
    () =>
      orderDetails.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0
      ),
    [orderDetails]
  );

  const orderConfirm = useModalConfirm();

  const addOrderWithDetails = useCallback(() => {
    addOrder(orderDetails);
  }, [addOrder, orderDetails]);

  useEffect(() => {
    deleteCarts(checkedIds);
  }, [checkedIds, deleteCarts]);

  useEffect(() => {
    if (addedOrder) {
      navigate("/order-list");
    }
  }, [addedOrder, navigate]);

  return (
    <DefaultLayout>
      <Cart.Container>
        <PageHeader>주문/결제</PageHeader>

        <Cart.SectionWrapper>
          <Cart.SectionLeft title={<>주문 상품({orderDetails.length}건)</>}>
            {orderDetails.map((orderDetail) => (
              <>
                <Order.DetailItem key={orderDetail.id} {...orderDetail} />
              </>
            ))}
          </Cart.SectionLeft>

          <Cart.SectionRight
            title="결제금액"
            buttonLabel={<>주문하기({totalQuantity}개)</>}
            onClickButton={orderConfirm.open}
          >
            <Cart.TotalPrice label="총 결제금액" value={totalPrice} />
            <Modal.Confirm
              title="정말로 주문하시겠습니까?"
              show={orderConfirm.show}
              onClose={orderConfirm.close}
              onComplete={addOrderWithDetails}
            />
          </Cart.SectionRight>
        </Cart.SectionWrapper>
      </Cart.Container>
    </DefaultLayout>
  );
}
