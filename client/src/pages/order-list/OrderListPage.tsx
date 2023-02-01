import { useQuery } from "react-query";
import { DefaultLayout, Order, PageHeader } from "../../components";
import { orderService } from "../../services";

export default function OrderListPage() {
  const { data: orders } = useQuery("orders", () => orderService.fetchOrders());
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
