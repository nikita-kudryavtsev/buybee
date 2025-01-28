export const useProductQuery = (id: string) =>
  useQuery({
    // todo: enum
    queryKey: ['products', id],
    staleTime: 0,
    // enabled: false,
    queryFn: () => {
      const queryString = String(id)?.length ? `?${new URLSearchParams({id}).toString()}` : '';

      return $fetch(`/api/content/categories/electronics/get-product${queryString}`)
    },
  });