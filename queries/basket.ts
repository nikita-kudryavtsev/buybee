const BASKET_QUERY_KEY = 'basket'

export const useBasketQuery = () =>
  useQuery({
    queryKey: [BASKET_QUERY_KEY],
    queryFn: async () => {
      // Здесь можно запросить данные с API
      return JSON.parse(localStorage.getItem('basket') || '{}')
    },
    staleTime: Infinity, // Чтобы данные корзины не пересоздавались каждый раз
  })

export const useUpdateBasketMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newItem: any) => {
      // Сохранение в localStorage или отправка на сервер
      localStorage.setItem('basket', JSON.stringify(newItem));
      return newItem;
    },
    onSuccess: (newItem) => {
      // Обновляем данные корзины в кэше Vue Query
      queryClient.setQueryData(['basket'], newItem);
    },
  });
};