interface CartItem {
    id: number,
    productName: string;
    unitPrice: number;
    quantity: number;
    total: number;
    thumbUrl: string;
}

export default CartItem;