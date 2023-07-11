export interface SubCategory {
    label: string;
    role: string;
}

export class Category {
    category: string;
    subCategory: SubCategory[];
}