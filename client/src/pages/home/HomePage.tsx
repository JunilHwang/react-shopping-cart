import { useQuery } from "react-query";
import { DefaultLayout, Product } from "../../components";
import { IProduct } from "../../types";
import { productService } from "../../services";
import { useInfiniteScroll } from "../../hooks";
import { usePagination } from "../../hooks/usePagination";

const PAGE_SIZE = 12;

export default function HomePage() {
  const { isLoading, data: products } = useQuery<IProduct[]>("products", () =>
    productService.fetchProducts()
  );

  const { pageItems, goToNextPage } = usePagination({
    items: products || [],
    size: PAGE_SIZE,
  });
  const $bottomRef = useInfiniteScroll(goToNextPage);

  return (
    <DefaultLayout>
      <Product.Container>
        {isLoading ? (
          <Product.Skeleton count={PAGE_SIZE} />
        ) : (
          pageItems.map((product) => (
            <Product.Item key={product.id} {...product} />
          ))
        )}
      </Product.Container>

      <div ref={$bottomRef} />
    </DefaultLayout>
  );
}
