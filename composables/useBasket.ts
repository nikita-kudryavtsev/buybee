import { useBasketQuery, useUpdateBasketMutation } from "~/queries/basket";

export default function useBasketCheckbox() {
  const { mutate: updateBasket } = useUpdateBasketMutation()
  const { data: basket } = useBasketQuery()

  // @ts-ignore-next-line
  const isSelectedAllCheckboxes = computed(() => Object.values(basket.value).every((item) => item.checked))

  const toggleAllCheckboxes = (newVal: boolean) => {
    // @ts-ignore-next-line
    updateBasket(Object.fromEntries(Object.entries(basket.value).map(([key, value]) => [ key, {...value, checked: newVal}] )))
  }

  const removeSelected = () => {
    updateBasket(Object.fromEntries(Object.entries(basket.value).filter(([_, value]) => !value.checked)))
  }

  const getSumAndCount = computed(() => {
    return basket.value && Object.values(basket.value)?.reduce(
      (acc, item) => {
        if (item.checked) {
          acc.count += item.count;
          acc.price += item.count * item.price;
        }
        return acc;
      },
      { count: 0, price: 0 }
    );
  })

  return {
    isSelectedAllCheckboxes,
    getSumAndCount,
    toggleAllCheckboxes,
    removeSelected,
  }
}