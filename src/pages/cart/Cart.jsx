import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { removeItem, incrementQuantity, DecrementQuantity, ResetCart } from '../../redux'
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import WestIcon from '@mui/icons-material/West';


const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const CartItems = useSelector((state) => state.books.cart)
  console.log(CartItems)

  if (CartItems.length == 0) {
    return (
      <div className='flex items-center flex-col gap-4 my-2'>
        <span className='capitalize'>Please add some products to cart <AddShoppingCartIcon /></span>
        <span className=' flex items-center cursor-pointer text-gray-500 hover:text-black' onClick={() => navigate('/')}><WestIcon /> Go for shopping</span>
      </div>
    )
  }
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className=' w-2/3 lg:2/3'>
        <span className='m-4 p-4 font-medium text-2xl'>Shopping Cart :</span>
        {CartItems?.map((item) => <>
          <div className='w-70 sm:w-fit flex justify-center items-center flex-col sm:flex-row m-4 p-2 gap-4 '>
            <div className='flex items-center gap-3'>
              <div onClick={() => dispatch(removeItem(item.id))} className='pr-2 cursor-pointer '><CloseOutlinedIcon />
              </div>
              <img className='w-32 h-40' src={item.image} alt="Image" />
            </div>
            {/* <div className=' w-52 flex justify-between items-center p-3 text-gray-500 rounded-sm gap-4 border '>
            <p className='text-sm'>Quantity</p>
            <div className=' flex items-center gap-4 text-sm font-semibold'>
              <button onClick={() => dispatch(DecrementQuantity({
                id: item.id,
                title: item.title,
                description: item.description,
                quantity: item.quantity
              }))} className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity({
                id: item.id,
                title: item.title,
                description: item.description,
                quantity: item.quantity
              }))} className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>+</button>
            </div>
          </div> */}
            <div className='text-xl font-medium'> Title : {item.title}</div>
            <div className='bg-blue-800 text-white py-1 px-3 rounded-sm'>Quantity : {item.quantity}</div>
          </div>
        </>)}
        <button onClick={() => dispatch(ResetCart())} className='bg-red-500 px-5 py-2 text-white ml-16'>Reset Cart</button>
        <span className='ml-16 my-2 flex items-center cursor-pointer text-gray-500 hover:text-black' onClick={() => navigate('/')}><WestIcon /> Go for shopping</span>
      </div>

      <div className='sm:1/3 flex flex-col  p-4'>
        <div className='bg-gray-200 w-full p-2'>
          <p className='text-3xl font-medium mb-4'>Cart totals </p>
          <div className='flex gap-4 text-xl'>
            <p className='font-semibold'>subtotal : </p>
            <p className='font-bold'>$45</p>
          </div>
          <div className='flex gap-2 text-base font-semibold'>
            <p>Shipping: </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ipsa.</p>
          </div>
          <div className='h-[1px] w-full bg-black my-1 '></div>
          <div className='flex justify-between font-bold px-2'>
            <p>Total</p>
            <p>$45</p>
          </div>
          <div className='w-full bg-black py-2 my-2 text-center text-xl cursor-pointer text-white'>
            Proceed to Checkout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart