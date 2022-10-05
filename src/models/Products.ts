export type Product = {
    id: number,
    name: string,
    price: number,
    qty_stock: number
}

export interface ProductDB {
    id: number,
    name: string,
    price: number,
    qty_stock: number
}