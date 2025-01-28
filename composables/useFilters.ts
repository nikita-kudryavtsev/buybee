export default function useFilters(filterKeys: string[]) {
  const route = useRoute()
  const router = useRouter()
  const filters: any = ref({})

  const setFiltersFromRoute = () => {
    Object.entries(route.query).forEach(([key, value]) => {
      if (value && filterKeys.includes(key)) {
        filters.value[key] = value
      }
    })
  }

  const applyFilters = () => {
    const query = Object.entries(filters.value)?.reduce((acc: Record<string, string>, [key, value]) => {
      if (value) {
        acc[key] = value as string
      }
      return acc;
    }, {});

    return router.replace({ query })
  }

  const filtersForRequest = computed(() => Object.fromEntries(Object.entries(filters.value).filter(([_, value]) => value)))

  return {
    filters,
    filtersForRequest,
    applyFilters,
    setFiltersFromRoute,
  }
}