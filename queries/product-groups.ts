const PRODUCT_GROUPS_QUERY_KEY = 'product-group';

export const useProductGroups = (category: string) =>
  useQuery({
    queryKey: [PRODUCT_GROUPS_QUERY_KEY, category],
    staleTime: 0,
    queryFn: () => {
      const queryString = category?.length ? `?${new URLSearchParams({category}).toString()}` : '';
      return $fetch(`/api/content/categories/electronics/get-groups${queryString}`)
    },
  });