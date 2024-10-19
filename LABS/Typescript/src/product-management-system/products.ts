export interface Product{
    id:number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewscount: number;
    brand: string;
    availability: any;
    //? makes the property optional
    color?: string;
    storage?: string;
    releaseDate: string;
}