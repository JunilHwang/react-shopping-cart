import classnames from "classnames";
import {
  Button,
  DefaultLayout,
  DivideLine,
  PriceAndQuantity,
} from "../../components";
import { dummyOrders } from "../../dummy";
import styleUtils from "../../styles/modules/Utils.module.scss";
import styles from "./Order.module.scss";

export default function OrderListPage() {
  return (
    <DefaultLayout>
      <section className={classnames(styles.orderSection)}>
        <header
          className={classnames(styleUtils.flexColCenter, styleUtils.mt20)}
        >
          <h2 className={styles.orderSectionTitle}>주문 목록</h2>
          <DivideLine className={styleUtils.mt20} />
        </header>

        {dummyOrders.map((order) => (
          <div className={styles.orderList} key={order.id}>
            <div className={styles.orderListHeader}>
              <span>주문번호: {order.id}</span>
              <span>상세보기 &gt;</span>
            </div>
            {order.orderDetails.map((orderDetail) => (
              <div className={styles.orderListItem} key={orderDetail.id}>
                <div
                  className={classnames(
                    styleUtils.flex,
                    styleUtils.gap15,
                    styleUtils.mt10
                  )}
                >
                  <img
                    className={classnames(styleUtils.w144, styleUtils.h144)}
                    src={orderDetail.imageUrl}
                    alt={orderDetail.name}
                  />
                  <div
                    className={classnames(styleUtils.flexCol, styleUtils.gap15)}
                  >
                    <span className={styles.orderName}>{orderDetail.name}</span>
                    <PriceAndQuantity
                      className={styles.orderInfo}
                      price={orderDetail.price}
                      quantity={orderDetail.quantity}
                    />
                  </div>
                </div>
                <Button
                  className={classnames(
                    styleUtils.flexCenter,
                    styleUtils.alignSelfStart
                  )}
                >
                  장바구니
                </Button>
              </div>
            ))}
          </div>
        ))}
      </section>
    </DefaultLayout>
  );
}
