import { DefaultLayout, PriceAndQuantity } from "../../components";
import { dummyOrders } from "../../dummy";

export default function OrderListPage() {
  return (
    <DefaultLayout>
      <section className="order-section">
        <header className="flex-col-center mt-20">
          <h2 className="order-section__title">주문 목록</h2>
          <hr className="divide-line mt-20" />
        </header>

        {dummyOrders.map((order) => (
          <div className="order-list" key={order.id}>
            <div className="order-list__header">
              <span>주문번호: {order.id}</span>
              <span>상세보기 &gt;</span>
            </div>
            {order.orderDetails.map((orderDetail) => (
              <div className="order-list-item" key={orderDetail.id}>
                <div className="flex gap-15 mt-10">
                  <img
                    className="w-144 h-144"
                    src={orderDetail.imageUrl}
                    alt={orderDetail.name}
                  />
                  <div className="flex-col gap-15">
                    <span className="order-name">{orderDetail.name}</span>
                    <PriceAndQuantity
                      className="order-info"
                      price={orderDetail.price}
                      quantity={orderDetail.quantity}
                    />
                  </div>
                </div>
                <button className="primary-button-small flex-center align-self-start">
                  장바구니
                </button>
              </div>
            ))}
          </div>
        ))}
      </section>
    </DefaultLayout>
  );
}
