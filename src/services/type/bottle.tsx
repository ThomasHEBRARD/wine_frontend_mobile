export interface BottleCollectionProps {
    id: number;
    name: string;
    code: string;
    millesime?: number;
}

export interface BottleProps extends BottleCollectionProps {
    stock: number;
}

export interface BottleFilters {
    limit: number;
    offset: number;
    id?: number;
    name?: string;
    millesime?: number;
    appelation?: string;
}
