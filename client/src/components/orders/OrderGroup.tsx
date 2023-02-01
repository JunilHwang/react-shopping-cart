import { IOrder, IOrderDetail } from "../../types";
import styles from "./Order.module.scss";

interface IProps {
  order: IOrder;
  ItemComponent: (props: IOrderDetail) => JSX.Element;
}

export default function OrderGroup({ order, ItemComponent }: IProps) {
  return (
    <div className={styles.orderList} key={order.id}>
      <div className={styles.orderListHeader}>
        <span>주문번호: {order.id}</span>
        <span>상세보기 &gt;</span>
      </div>
      {order.orderDetails.map((orderDetail) => (
        <ItemComponent key={orderDetail.id} {...orderDetail} />
      ))}
    </div>
  );
}
