import CartItem from "../../../types/CartItemInterface";
import TrashIcon from './../../../assets/icons/trash-icon.svg';

const Item = ({item} : {item: CartItem}) => {
    return (
      <div className='mb-10 flex flex-row items-start justify-between sm:items-center'>
          <div className='grow flex flex-row items-start gap-4 sm:items-center'>
              <img className='w-12 h-12 rounded-[4px]' src="https://ik.imagekit.io/ismaelbz/frontendMentor_ecommerceProductPage/image-product-1-thumbnail.jpg?updatedAt=1735845208068" alt="" />
              <div className='flex flex-col'>
                  <p>{item.productName}</p>
                  <div className="flex flex-row justify-between">
                      <p><span>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.unitPrice)}</span> x <span>{item.quantity}</span></p>
                      <p className='font-bold'>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.total)}</p>
                  </div>
              </div>
          </div>
          <button className='grow-0'><img src={TrashIcon} alt="Remover estes itens do carrinho" /></button>
      </div>
    )
}
  export default Item