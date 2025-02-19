const ImageGalery = () => {

    
    return (
        <div>
            {/* Big Image */}
            <button >
                <img className='w-lvw max-h-[445px] object-cover object-[80%_50%] lg:rounded-xl lg:max-w-[445px] ' src='https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-1.jpg?updatedAt=1735845208314' alt="White, low profile sneaker with beige suede filling front, back and about 50% of each side of each sneaker. To complete the charm it has an orange heel label." />
            </button>
            {/* Galery */}
            <ul className='hidden md:flex mt-6 justify-evenly lg:justify-between'>
                <button>
                    <img className='w-14 lg:w-24 lg:rounded-lg hover:contrast-75 hover:opacity-75' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-3-thumbnail.jpg?updatedAt=1735845208193" alt="" />
                </button>
                <button>
                    <img className='w-14 lg:w-24 lg:rounded-lg hover:contrast-75 hover:opacity-50' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-1-thumbnail.jpg?updatedAt=1735845208068" alt="" />
                </button>
                <button>
                    <img className='w-14 lg:w-24 lg:rounded-lg hover:contrast-75 hover:opacity-75' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-2-thumbnail.jpg?updatedAt=1735845207663" alt="" />
                </button>
                <button>
                    <img className='w-14 lg:w-24 lg:rounded-lg hover:contrast-75 hover:opacity-75' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-4-thumbnail.jpg?updatedAt=1735845207685" alt="" />
                </button>
            </ul>
        </div>
    )
}

export default ImageGalery