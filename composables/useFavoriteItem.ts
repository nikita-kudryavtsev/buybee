import { useFavoriteQuery, useUpdateFavoriteMutation } from "~/queries/favorites";

export default function useFavoriteItem(data: Ref<any> | ComputedRef<any>) {
  const { data: favorites } = useFavoriteQuery()
  const { mutate: updateFavorites } = useUpdateFavoriteMutation()

  const isFavoriteItem = computed(() => data.value?.id && favorites.value?.some(item => item.id === data.value.id))

  const toggleFavorites = () => {
    if (!data.value?.id) return

    if (isFavoriteItem.value) {
      updateFavorites(favorites.value.filter(item => item.id !== data.value.id))
      return;
    }
    updateFavorites([...favorites.value, data.value])
  }
  //   if (favorites.value.include((item) => item.id === data.value.id))
  //     updateFavorites()
  // }

  return {
    isFavoriteItem,
    toggleFavorites
  }
}