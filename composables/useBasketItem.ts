import { useBasketQuery, useUpdateBasketMutation } from "~/queries/basket";

export default function useBasketItem(data: Ref<any> | ComputedRef<any>) {
  const currentProdInBasket = computed(() => (basket.value && data.value?.id) && (basket.value as any)[data.value.id])
  const { mutate: updateBasket } = useUpdateBasketMutation()
  const { data: basket } = useBasketQuery()

  // const isDisabledRemoveButton = computed(() => currentProdInBasket.value.count === 1)

  const addToBasket = async () => {
    if (!data.value?.id) return
    if (currentProdInBasket.value) {
      updateBasket({ ...(basket.value || {}), [data.value.id]: { ...currentProdInBasket.value, count: currentProdInBasket.value.count + 1} })
    } else {
      updateBasket({ ...(basket.value || {}), [data.value.id]: { ...data.value, count: 1, checked: true }})
    }
  }

  const removeFromBasket = async () => {
    if (!data.value?.id) return
    // remove prod from basket by id
    if (currentProdInBasket.value.count === 1) {
      updateBasket({...Object.fromEntries(Object.entries(basket.value)
          .filter(([key]) => String(key) !== String(data.value.id)))
      })
      return
    }
    // decrement in basket
    updateBasket({ ...(basket.value || {}), [data.value.id]: { ...currentProdInBasket.value, count: currentProdInBasket.value.count - 1} })
  }

  const toggleCheckbox = (value: boolean) => {
    updateBasket({ ...basket.value, [data.value.id]: { ...currentProdInBasket.value, checked: value} })
  }

  return {
    currentProdInBasket,
    // isDisabledRemoveButton,
    toggleCheckbox,
    addToBasket,
    removeFromBasket,
  }
}