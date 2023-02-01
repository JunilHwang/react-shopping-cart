import { DefaultLayout, Order, PageHeader } from "../../components";
import { dummyOrders } from "../../dummy";

export default function OrderListPage() {
  return (
    <DefaultLayout>
      <Order.Section>
        <PageHeader>주문 목록</PageHeader>

        {dummyOrders.map((order) => (
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
