const CATEGORIES_QUERY_KEY = 'categories'

export const useCategoriesQuery = (query?: any) =>
  useQuery({
    queryKey: [CATEGORIES_QUERY_KEY],
    queryFn: () => $fetch('/api/content/categories/get-list', query)
  });