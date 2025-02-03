<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

type PriceItemValue = 'cheap' | 'average' | 'expensive' | 'any' | ''

interface IPriceItem {
  value: PriceItemValue
  display: string
  from: number | null,
  to: number | null,
}

const selectedPriceGroup = ref<PriceItemValue>('')

const priceItems: IPriceItem[] = [
  { value: 'cheap', display: `От 500 до 1500`, from: 500, to: 1500},
  { value: 'average', display: 'От 1500 до 5000', from: 1500, to: 5000},
  { value: 'expensive', display: 'От 5000', from: 5000, to: null },
  { value: 'any', display: 'Не важно', from: null, to: null },
]

const emits = defineEmits(['apply-filters'])

watch(selectedPriceGroup, (value) => handlePriceGroupChange(value))

const handlePriceGroupChange = (value: PriceItemValue) => {
  const currentItem = priceItems.find(item => item.value === value)
  if (!currentItem) return

  filters.value.priceFrom = currentItem.from
  filters.value.priceTo = currentItem.to
}

const { filters, filtersForRequest, setFiltersFromRoute, applyFilters } = useFilters(['priceFrom', 'priceTo', 'query'])

const updatePriceGroup = () => {
  const suitableValue = priceItems.find(item => item.to === Number(filters.value.priceTo) && item.from === Number(filters.value.priceFrom))

  if (suitableValue) {
    selectedPriceGroup.value = suitableValue.value
  } else {
    selectedPriceGroup.value = ''
  }
}

onMounted(() => {
  setFiltersFromRoute()
  emits('apply-filters', filtersForRequest.value)
  updatePriceGroup()
})

const onApplyFilters = () => {
  applyFilters()
  emits('apply-filters', filtersForRequest.value)
}

watch(selectedPriceGroup, onApplyFilters)

const onInputBlur = () => {
  onApplyFilters()
  updatePriceGroup()
}
</script>

<template>
  <div>
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label>Название</Label>
      <Input v-model="filters.query" @blur="onInputBlur"></Input>

      <Label>Цена</Label>
      <div class="flex gap-4">
        <Input v-model="filters.priceFrom" placeholder="От" type="number" @blur="onInputBlur"/>
        <Input v-model="filters.priceTo" placeholder="До" type="number" @blur="onInputBlur" />
      </div>

      <RadioGroup v-model="selectedPriceGroup" class="p-3 gap-4">
        <div v-for="item in priceItems" class="flex items-center space-x-2">
          <RadioGroupItem id="r1" :value="item.value" />
          <Label for="r1"> {{ item.display }} </Label>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>