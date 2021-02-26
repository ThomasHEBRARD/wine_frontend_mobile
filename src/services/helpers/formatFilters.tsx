export const formatFilters = (filters: any) => ({
    ...filters,
    alreadyFoundIds: filters.alreadyFoundIds.join(','),
});