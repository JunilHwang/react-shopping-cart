import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultLayout, Product } from "../../components";
import { useInfiniteScroll, usePagination } from "../../hooks";
import { useCartAdd, useProducts } from "../../store";

const PAGE_SIZE = 12;

export default function HomePage() {
  const { isLoading, products } = useProducts();
  const { addCart, addedCart } = useCartAdd();
  const navigate = useNavigate();

  const { pageItems, goToNextPage } = usePagination({
    items: products,
    size: PAGE_SIZE,
  });
  const $bottomRef = useInfiniteScroll(goToNextPage);

  const handleClickCart = useCallback(
    (id: number) => {
      const product = pageItems?.find((product) => product.id === id);
      if (product) {
        addCart(product);
      }
    },
    [addCart, pageItems]
  );

  useEffect(() => {
    if (addedCart) {
      navigate("/cart");
    }
  }, [addedCart, navigate]);

  return (
    <DefaultLayout>
      <Product.Container>
        {isLoading ? (
          <Product.Skeleton count={PAGE_SIZE} />
        ) : (
          pageItems?.map((product) => (
            <Product.Item
              key={product.id}
              {...product}
              onClickCart={handleClickCart}
            />
          ))
        )}
      </Product.Container>

      <div ref={$bottomRef} />
    </DefaultLayout>
  );
}
