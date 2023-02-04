import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultLayout, Order, PageHeader } from "../../components";
import { useCartAddByProductId, useOrders } from "../../store";

export default function OrderListPage() {
  const { orders } = useOrders();
  const { addCart, addedCart } = useCartAddByProductId();
  const navigate = useNavigate();

  const addCartById = useCallback(
    (productId: number) => {
      addCart(productId);
    },
    [addCart]
  );

  useEffect(() => {
    if (addedCart) {
      navigate("/cart");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addedCart]);

  return (
    <DefaultLayout>
      <Order.Section>
        <PageHeader>주문 목록</PageHeader>

        {orders?.map((order) => (
          <Order.Group
            key={order.id}
            order={order}
            ItemComponent={(props) => (
              <Order.Item {...props} onClickCart={addCartById} />
            )}
          />
        ))}
      </Order.Section>
    </DefaultLayout>
  );
}
