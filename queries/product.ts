import type { IProduct } from "~/types/product";

const PRODUCT_QUERY_KEY = 'products'
export const useProductQuery = (id: string) =>
  useQuery({
    queryKey: [PRODUCT_QUERY_KEY, id],
    staleTime: 0,
    queryFn: () => {
      const queryString = String(id)?.length ? `?${new URLSearchParams({id}).toString()}` : '';
      return $fetch<IProduct>(`/api/content/categories/electronics/get-product${queryString}`)
    },
  });