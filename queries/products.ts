export const useProductsQuery = (filters: Ref<Record<string, string>>) =>
  useQuery({
    // todo: enum
    queryKey: ['products', filters.value],
    staleTime: 0,
    enabled: false,
    queryFn: () => {
      const queryString = String(filters.value)?.length ? `?${new URLSearchParams(filters.value).toString()}` : '';

      return $fetch(`/api/content/categories/electronics/get-products${queryString}`)
    },
  });
