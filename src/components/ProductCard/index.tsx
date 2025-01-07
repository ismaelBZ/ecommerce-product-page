import { useState, useEffect } from 'react';
import CartItem from '../../types/CartItemInterface';
import { PreviousSneaker,NextSneaker } from './Buttons/ImageButtons';
import Plus from './../../assets/icons/plus.svg'
import Minus from './../../assets/icons/minus.svg'
import CartIcon from './../../assets/icons/cart-item.svg';
import Close from './../../assets/icons/close.svg';
import Product from './ProductClass';
import ImageGalery from './ImageGalery';


const ProductCard = ({ setCartList } : { setCartList: React.Dispatch<React.SetStateAction<CartItem[] | null>> }) => {
    const [quantity, setQuantity] = useState(0);
    const [bigImage, setBigImage] = useState(0);
    const [activeThumb, setActiveThumb] = useState([true, false, false, false]);
    const randomNumber = parseInt((Math.random() * 1000000).toFixed(0)); // Product ID
    
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3000/products')
    //             const data = await response.json()
    //             console.log(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     getData();
        
    // }, [])

    
    /* Product info needed in cart component from cartList  */
    const cartItem = {
        id: randomNumber,
        productName: 'Fall Limited Edition Sneakers',
        unitPrice: 125,
        quantity: quantity,
        total: quantity * 125,
        thumbUrl: ''
    };

    const product =  new Product (
        '6776e8ec6924ff1f8bf49197',
        'Sneaker Company',
        'Fall Limited Edition Sneakers',
        '0',
        250,
        50,
        [
            {
                imageUrl: 'https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-3.jpg?updatedAt=1735845208530',
                thumbUrl: 'https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-3-thumbnail.jpg?updatedAt=1735845208193',
            },
            {
                imageUrl: 'https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-2.jpg?updatedAt=1735845208411',
                thumbUrl: 'https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-2-thumbnail.jpg?updatedAt=1735845207663',
            },
            {
                imageUrl: 'https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-1.jpg?updatedAt=1735845208314',
                thumbUrl: 'https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-1-thumbnail.jpg?updatedAt=1735845208068',
            },
            {
                imageUrl: 'https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-4.jpg?updatedAt=1735845208353',
                thumbUrl: 'https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-4-thumbnail.jpg?updatedAt=1735845207685',
            },
        ]
    );

    /* Add product to cart */
    const handleAddToCart = () => {
        if (quantity == 0) return;
        setCartList((prevList) => prevList === null ? [cartItem] : [...prevList, cartItem]);
    }

    const handleImage = (id: number) => {
        {/* On click(id) => setImage({ url: '', isActive: true/false}) */}
        setBigImage(id)
        setActiveThumb((prev) => {
            const lastState = prev;
            const newState = new Array(prev.length).fill(false);
            newState[id] = true;
            return newState;
        })
    }

    const handleModal = () => {
        /* Create a new component */
    }

    return (
        <div className='md:mt-16 md:flex md:gap-12 lg:max-w-[90%] lg:mx-auto lg:items-center'>

            {/* Product Images + Arrows */}
            <div className="-mx-6 relative flex items-center md:-mx-0 md:basis-7/12">
                {/* Arrow prev */}
                <div className="absolute left-0 mx-4 md:hidden">
                    <PreviousSneaker />
                </div>

                {/* Images */}
                <div>
                    {/* Big Image */}
                    <button onClick={handleModal}>
                        <img className='w-lvw max-h-[445px] object-cover object-[80%_50%] lg:rounded-xl lg:max-w-[445px] ' src={product.imageGallery[bigImage].imageUrl} alt="White, low profile sneaker with beige suede filling front, back and about 50% of each side of each sneaker. To complete the charm it has an orange heel label." />
                    </button>
                    {/* Galery */}
                    <ul className='hidden md:flex mt-6 justify-evenly lg:justify-between'>
                        <button style={activeThumb[0] ? {border: '2px solid #FF7E1B', borderRadius: '0.65rem'} : undefined } onClick={() => handleImage(0)}>
                            <img className='w-14 lg:w-24 lg:rounded-lg hover:contrast-75 hover:opacity-75' style={activeThumb[0] ? {filter: 'contrast(75%) opacity(50%)'} : undefined} src={product.imageGallery[0].thumbUrl} alt="" />
                        </button>
                        <button style={activeThumb[1] ? {border: '2px solid #FF7E1B', borderRadius: '0.65rem'} : undefined }onClick={() => handleImage(1)}>
                            <img className='w-14 lg:w-24 lg:rounded-lg hover:contrast-75 hover:opacity-75' style={activeThumb[1] ? {filter: 'contrast(75%) opacity(50%)'} : undefined}  src={product.imageGallery[1].thumbUrl} alt="" />
                        </button>
                        <button style={activeThumb[2] ? {border: '2px solid #FF7E1B', borderRadius: '0.65rem'} : undefined }onClick={() => handleImage(2)}>
                            <img className='w-14 lg:w-24 lg:rounded-lg hover:contrast-75 hover:opacity-75' style={activeThumb[2] ? {filter: 'contrast(75%) opacity(50%)'} : undefined}  src={product.imageGallery[2].thumbUrl} alt="" />
                        </button>
                        <button style={activeThumb[3] ? {border: '2px solid #FF7E1B', borderRadius: '0.65rem'} : undefined }onClick={() => handleImage(3)}>
                            <img className='w-14 lg:w-24 lg:rounded-lg hover:contrast-75 hover:opacity-75' style={activeThumb[3] ? {filter: 'contrast(75%) opacity(50%)'} : undefined}  src={product.imageGallery[3].thumbUrl} alt="" />
                        </button>
                    </ul>
                </div>
                
                {/* Arrow next */}
                <div className="absolute right-0 mx-4 md:hidden" >
                    <NextSneaker />
                </div>
            </div>

            {/* 
            {/* Modal 
            <div>
                <div className='absolute w-lvw h-lvh top-0 left-0 bg-black opacity-90'></div>
                <div className='absolute top-0 left-0 w-full h-lvh flex items-center justify-center'>
                    <div>
                        {/* Close Button 
                        <button className='float-right mx-5 mb-2 px-5 py-2'>
                            <img src={Close} alt='Close modal'/>
                        </button>
                        

                        <div className='clear-right flex flex-row items-center'>
                            {/* Prev image 
                            <div className='translate-x-[50%]'>
                                <PreviousSneaker />
                            </div>

                            {/* Images 
                            <div className='flex flex-col gap-5'>
                                {/* Big Image 
                                <img className='max-w-[485px] rounded-xl' src='https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-1.jpg?updatedAt=1735845208314' alt="White, low profile sneaker with beige suede filling front, back and about 50% of each side of each sneaker. To complete the charm it has an orange heel label." />
                                { /* Image Galery 
                                <ul className='flex flex-row justify-evenly'>
                                    <li><button onClick={()=>''}><img className='w-24 rounded-md' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-3-thumbnail.jpg?updatedAt=1735845208193" alt="" /></button></li>
                                    <li><button onClick={()=>''}><img className='w-24 rounded-md' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-1-thumbnail.jpg?updatedAt=1735845208068" alt="" /></button></li>
                                    <li><button onClick={()=>''}><img className='w-24 rounded-md' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-2-thumbnail.jpg?updatedAt=1735845207663" alt="" /></button></li>
                                    <li><button onClick={()=>''}><img className='w-24 rounded-md' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-4-thumbnail.jpg?updatedAt=1735845207685" alt="" /></button></li>
                                </ul>
                            </div>
                                
                            {/* Next image 
                            <div className='translate-x-[-50%]'>
                                <NextSneaker />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            */}

            {/* Product Info */}
            <div className='flex flex-col py-6 md:basis-5/12'>

                {/* Brand */}
                <p className="text-xs font-bold uppercase text-orange-500 tracking-[1.85px] ">
                    Sneaker Company
                </p>

                {/* Product Name */}
                <h2 className="text-[28px] capitalize font-bold my-4 mx:max-w-[50%] md:max-w-none lg:text-[34px] xl:text-[44px]">
                    Fall Limited Edition Sneakers
                </h2>

                {/* Description */}
                <p className='text-slate-500'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                {/* Price */}
                <div className="mt-7 flex items-center justify-between mx:block mx:absolute mx:right-6 md:static lg:flex-col lg:items-start">
                    <div className="flex gap-5 items-center md:gap-2 lg:gap-5">
                        {/* Final Price */}
                        <p className='text-[28px] font-bold'>
                            {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((250 * 0.5))}
                        </p>
                        {/* Discount */}
                        <p className="px-3 py-1 font-bold bg-[#FFEEE2] text-orange-500 rounded-md">{Intl.NumberFormat('en-US', { style: 'percent' }).format(0.5)}</p>
                    </div>
                    {/* Original Price */}
                    <p className="font-bold text-gray-400 line-through ">$250.00</p>
                </div>


                {/* Quantity */}
                <div className='mt-6 flex flex-col gap-4 xl:flex-row'>
                    <div className="flex items-center justify-between bg-[#F6F8FD] rounded-xl lg:basis-7/12">
                        {/* Decrease */}
                        <button onClick={() => setQuantity((prev) => prev === 0 ? 0 : prev - 1)}><img src={Minus} className='px-5 py-6 lg:px-4' alt="Diminuir quantidade" /></button>
                        {/* Value*/ }
                        <p className="px-5 bold font-bold lg:px-0">{quantity}</p>
                        {/* Increase */}
                        <button onClick={() => setQuantity(() => quantity + 1)}><img src={Plus} className='px-5 py-6 lg:px-4' alt="Aumentar quantidade" /></button>
                    </div>

                    {/* Add to Cart  Button */}
                    <button className='p-5 rounded-xl w-full flex items-center justify-center gap-4 bg-orange-500 
                            shadow-[0px_10px_30px_0px_rgba(249,115,22,0.55)] hover:bg-[#FFAB6A] active:scale-95'
                        onClick={handleAddToCart}
                    >
                        <span><img src={CartIcon} className='' /></span>
                        <span className='text-white font-bold'>Add to cart</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
