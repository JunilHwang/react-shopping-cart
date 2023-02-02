import { DefaultLayout, Order, PageHeader } from "../../components";
import { useOrders } from "../../store";

export default function OrderListPage() {
  const { orders } = useOrders();

  return (
    <DefaultLayout>
      <Order.Section>
        <PageHeader>주문 목록</PageHeader>

        {orders?.map((order) => (
          <Order.Group
            key={order.id}
            order={order}
            ItemComponent={Order.Item}
          />
        ))}
      </Order.Section>
    </DefaultLayout>
  );
}
