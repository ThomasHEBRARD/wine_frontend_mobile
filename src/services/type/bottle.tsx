export interface BottleCollectionProps {
    id: number;
    name: string;
    code: string;
    vintage?: number;
}

export interface BottleProps extends BottleCollectionProps {
    stock: number;
}

export interface BottleFilters {
    limit: number;
    offset: number;
    id?: number;
    name?: string;
    vintage?: number;
    appellation?: string;
}
