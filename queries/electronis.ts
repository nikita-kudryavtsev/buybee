export const useElectronicsQuery = (query?: any) =>
  useQuery({
    // todo: enum
    queryKey: ['electronics'],
    queryFn: () => $fetch('/api/content/categories/electronics/get-list', query),
  });