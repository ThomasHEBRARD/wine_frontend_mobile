import { BottleProps } from "./bottle";

export interface DataBottleProps {
    count: number;
    next: null | string;
    previous: null | string;
    results: BottleProps[];
}
