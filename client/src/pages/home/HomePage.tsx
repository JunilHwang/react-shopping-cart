import { useCallback } from "react";
import { DefaultLayout, Product } from "../../components";
import { useInfiniteScroll, usePagination } from "../../hooks";
import { useProducts } from "../../store";

const PAGE_SIZE = 12;

export default function HomePage() {
  const { isLoading, products } = useProducts();

  const { pageItems, goToNextPage } = usePagination({
    items: products,
    size: PAGE_SIZE,
  });
  const $bottomRef = useInfiniteScroll(goToNextPage);

  const addCart = useCallback((id: number) => {}, []);

  return (
    <DefaultLayout>
      <Product.Container>
        {isLoading ? (
          <Product.Skeleton count={PAGE_SIZE} />
        ) : (
          pageItems?.map((product) => (
            <Product.Item key={product.id} {...product} onClickCart={addCart} />
          ))
        )}
      </Product.Container>

      <div ref={$bottomRef} />
    </DefaultLayout>
  );
}
