import { useState } from 'react';
import CartItem from '../../types/CartItemInterface';
import Logo from './../../assets/icons/logo/sneakers.svg';
import MenuIcon from './../../assets/icons/menu-icon.svg';
import ShopIcon from './../../assets/icons/shop-icon.svg';
import ProfileIcon from './../../assets/icons/profile.svg';
import MobileMenu from './MobileMenu';


const Header = ({ items, setIsCartActive }: { items: CartItem[] | null, setIsCartActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    /* Faz a contagem de itens no carrinho */
    const cartItemsQuantity = items?.reduce((accumulated, item) => {
        accumulated += item.quantity;

        return accumulated
    }, 0)

    return (
        <div className="py-4 flex items-center justify-between mx:py-7 md:py-0 md:pt-10 md:border-b-[1px]">
            <div className='flex items-center gap-2 sm:gap-4 md:gap-12'>

                {/* Ícone do Menu (Mobile only) */}
                <button onClick={() => setIsMenuActive(() => true)} className="md:hidden">
                    <img src={MenuIcon} className='w-4' />
                </button>

                {/* Logo */}
                <h1 className="sr-only">Sneakers</h1>
                <img src={Logo} className="-mt-1 max-w-[67%] sm:max-w-[100%] md:pb-10 md:-mt-2" alt='' />

                {/* Menu Mobile */}
                {isMenuActive ? <MobileMenu setIsMenuActive={setIsMenuActive} /> : ''}

                {/* Menu */}
                <div className='sr-only flex gap-6 text-slate-500 md:not-sr-only'>
                    <a className='text-[15px] text-slate-500 cursor-pointer md:border-b-4 md:border-transparent hover:border-orange-500 md:pb-10'>Collections</a>
                    <a className='text-[15px] text-slate-500 cursor-pointer md:border-b-4 md:border-transparent hover:border-orange-500 md:pb-10'>Men</a>
                    <a className='text-[15px] text-slate-500 cursor-pointer md:border-b-4 md:border-transparent hover:border-orange-500 md:pb-10'>Women</a>
                    <a className='text-[15px] text-slate-500 cursor-pointer md:border-b-4 md:border-transparent hover:border-orange-500 md:pb-10'>About</a>
                    <a className='text-[15px] text-slate-500 cursor-pointer md:border-b-4 md:border-transparent hover:border-orange-500 md:pb-10'>Contact</a>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 md:gap-10 md:pb-10">
                <div className='relative'>
                    {/* Cart Item */}
                    <button className="align-text-top" onClick={() => setIsCartActive((prev) => !prev)}>
                        <img src={ShopIcon} />
                    </button>
                    {/* Car quantity ball info */}
                    {cartItemsQuantity ?
                        <p className='px-2 absolute -top-2 -right-2 text-[10px] font-bold text-white bg-orange-500 rounded-md'>{cartItemsQuantity}</p>
                        : ''}
                </div>

                {/* Profile img */}
                <button className='w-6 h-6 rounded-full hover:shadow-[0px_0px_0px_1.2px_rgba(255,122,0,1)]'>
                    <img src={ProfileIcon} alt='Your photo' />
                </button>
            </div>
        </div>
    )
}

export default Header