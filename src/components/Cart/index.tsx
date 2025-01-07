import {useState, useEffect} from 'react';
import CartItem from '../../types/CartItemInterface';
import TrashIcon from './../../assets/icons/trash-icon.svg';

const Cart = ({cartList, setCartList, setIsCartActive} : {cartList: Array<CartItem> | null, setCartList: React.Dispatch<React.SetStateAction<CartItem[] | null>>, setIsCartActive: React.Dispatch<React.SetStateAction<boolean>>} ) => {
    const [backgroundHeight, setBackgroundHeight] = useState('0px');

    useEffect(() => {
        handleHeight();
        window.addEventListener('resize', handleHeight);
        window.addEventListener('click', closeOnWindowClick);

        return () => {
            window.removeEventListener('resize', handleHeight);
            window.removeEventListener('click', closeOnWindowClick);
        }
    }, [])

    /* Atualizar a área clicável para fechar o app de acordo com a altura total renderizada  */
    const handleHeight = () => {
        setBackgroundHeight(() => window.getComputedStyle(document.body, null).getPropertyValue('height'))
    }

    /* Fechar o carrinho quando clicar na tela */
    const closeOnWindowClick = (e: MouseEvent) => {
        if (e.target == document.getElementById('cartBackground')) {
            setIsCartActive(() => false);
            return
        } else {
            return;
        }
    }

    /* Remover o item do carrinho */
    const handleRemoveItem = (id: number) => {
        setCartList((prevList) => {
            const newList = prevList!.filter((item) => item.id !== id );
            return newList;
        })
    }

    return (
        <div id='cartBackground' className='absolute top-0 right-0 z-10 w-full' style={{height: backgroundHeight}}>
            <div className='relative top-16 w-[95%] mx-auto py-5 px-6 bg-white rounded-lg drop-shadow-md md:max-w-96 md:mx-0 md:float-right md:right-5 md:top-20'>
                <p className='font-bold'>Cart</p>
                <hr className='my-5 -mx-6' />
                {/* Lógica do carrinho de compras */}
                { cartList == null || cartList.length == 0 ?
                    <p className='py-20 text-center text-slate-500 font-bold'>Your cart is empty.</p>  
                :   <>
                        <ul>
                            {cartList.map((cartItem) => {
                                return (
                                    <div key={cartItem.id} className='mb-10 flex flex-row items-start justify-between sm:items-center'>
                                        <div className='grow flex flex-row items-start gap-4 sm:items-center'>
                                            <img className='w-12 h-12 rounded-[4px]' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-1-thumbnail.jpg?updatedAt=1735845208068" alt="" />
                                            <div className='flex flex-col'>
                                                <p>{cartItem.productName}</p>
                                                <div className="flex flex-row justify-between">
                                                    <p><span>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartItem.unitPrice)}</span> x <span>{cartItem.quantity}</span></p>
                                                    <p className='font-bold'>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartItem.total)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => handleRemoveItem(cartItem.id)} className='grow-0'><img src={TrashIcon} alt="Remover estes itens do carrinho" /></button>
                                    </div>
                                )
                            })}
                        </ul>
                        <button className='mt-6 mb-2 w-full py-4 font-bold text-white bg-orange-500 rounded-md hover:bg-[#FFAB6A] active:scale-95'>Checkout</button>
                    </>
                }
                
            </div>
        </div>
    )
}

export default Cart;