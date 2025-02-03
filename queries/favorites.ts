const FAVORITE_QUERY_KEY = 'favorite'

export const useFavoriteQuery = (query?: any) =>
  useQuery({
    queryKey: [FAVORITE_QUERY_KEY], // Уникальный ключ для корзины
    queryFn: async () => {
      // Здесь можно запросить данные с API
      return JSON.parse(localStorage.getItem(FAVORITE_QUERY_KEY) || '[]')
    },
    staleTime: Infinity, // Чтобы данные корзины не пересоздавались каждый раз
  })

export const useUpdateFavoriteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newItem: any) => {
      // Сохранение в localStorage или отправка на сервер
      localStorage.setItem(FAVORITE_QUERY_KEY, JSON.stringify(newItem));
      return newItem;
    },
    onSuccess: (newItem) => {
      console.log({newItem})
      // Обновляем данные корзины в кэше Vue Query
      queryClient.setQueryData([FAVORITE_QUERY_KEY], newItem);
    },
  });
};