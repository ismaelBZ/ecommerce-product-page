import ProductInterface from './../../types/ProductInterface';
import {ProductImageFormatType} from '../../types/ProductImageFormatType';

export default class Product implements ProductInterface {
    id: string;
    brand: string;
    productName: string;
    description: string;
    price: number;
    discount: number;
    finalPrice: number;
    imageGallery: { imageUrl: string; thumbUrl: string; }[];
    
    constructor(id: string, brand: string, productName: string, description: string, price: number, discount: number, imageGallery: Array<ProductImageFormatType>) {
        this.id = id;
        this.brand = brand;
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.finalPrice = this.price * (this.discount / 100);
        this.imageGallery = imageGallery
    }
}