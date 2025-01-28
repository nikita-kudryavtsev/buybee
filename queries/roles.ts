const ROLE_QUERY_KEY = 'roles'

export const useRolesQuery = (query?: any) =>
  useQuery({
    queryKey: [ROLE_QUERY_KEY],
    queryFn: () => $fetch('/api/role', query),
  });