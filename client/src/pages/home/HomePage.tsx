import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultLayout, Product } from "../../components";
import { useInfiniteScroll, usePagination } from "../../hooks";
import { useCartsActions, useProducts } from "../../store";

const PAGE_SIZE = 12;

export default function HomePage() {
  const { isLoading, products } = useProducts();
  const { addCart, cartAdded } = useCartsActions();
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
    if (cartAdded) {
      navigate("/cart");
    }
  }, [cartAdded, navigate]);

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
