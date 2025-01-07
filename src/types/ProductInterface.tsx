import {ProductImageFormatType} from './ProductImageFormatType';

export default interface ProductInterface {
    id: string,
    brand: string,
    productName: string,
    description: string,
    price: number,
    discount: number,
    finalPrice: number, // price * (discount / 100)
    imageGallery: Array<ProductImageFormatType>
}