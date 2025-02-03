import type { ICategory } from "~/types/category";

const CATEGORIES_QUERY_KEY = 'categories'

export const useCategoriesQuery = () =>
  useQuery({
    queryKey: [CATEGORIES_QUERY_KEY],
    queryFn: () => $fetch<ICategory[]>('/api/content/categories/get-list')
  });