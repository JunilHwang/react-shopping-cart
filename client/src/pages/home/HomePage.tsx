import { useCallback } from "react";
import { DefaultLayout, Product } from "../../components";
import { useInfiniteScroll, usePagination } from "../../hooks";
import { useCartsActions, useProducts } from "../../store";

const PAGE_SIZE = 12;

export default function HomePage() {
  const { isLoading, products } = useProducts();
  const { addCart } = useCartsActions();

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
