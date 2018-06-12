export interface Product {
    id: number,
    name: string,
    price: number
}

export interface GetProductResult {
    product: Product;
}