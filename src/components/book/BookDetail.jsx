import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './BookDetail.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux';

const BookDetail = () => {
    const [qty, setQty] = useState(0)
    const dispatch = useDispatch()
    const { state } = useLocation()
    const book = state.book
    // console.log(state)
    return (
        <>
            <div className='Book '>
                <div className=' h-screen flex items-center  justify-center   '>
                    <div className=' h-[95%] w-1/2 ml-16 text-white flex justify-center'>
                        <img className='h-[100%]' src={book.volumeInfo.imageLinks.thumbnail} alt="Img" />
                    </div>
                    <div className='bg-white h-[95%] w-1/2 mr-16 pt-5 flex flex-col gap-8'>
                        <div>
                            <p className='text-5xl font-bold tracking-wider mb-0'>{book.volumeInfo.title}</p>
                            <p className='font-medium text-gray-500'>by <span className='underline '>{book.volumeInfo.authors}</span></p>
                        </div>
                        <div className='flex items-center space-x-3 '>
                            <div className='flex space-x-2 '>
                                <p><StarRateIcon /></p>
                                <p><StarRateIcon /></p>
                                <p><StarRateIcon /></p>
                                <p><StarRateIcon /></p>
                                <p><StarRateIcon /></p>
                            </div>
                            <p className='text-gray-500 text-sm '>(1 costumer Review )</p>
                        </div>
                        <p className=''><span className='font-semibold'>Description :</span> {book.volumeInfo.description.substring(0, 150)} ...</p>

                        <div className=' w-52 flex justify-between items-center p-3 text-gray-500 rounded-sm gap-4 border '>
                            <p className='text-sm'>Quantity</p>
                            <div className=' flex items-center gap-4 text-sm font-semibold'>
                                <button onClick={qty < 0 ? setQty(0) : () => setQty(qty - 1)} className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>-</button>
                                <span>{qty}</span>
                                <button onClick={() => setQty(qty + 1)} className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>+</button>
                            </div>
                        </div>
                        <div onClick={() => dispatch(addToCart({
                            id: book.id,
                            title: book.volumeInfo.title,
                            image: book.volumeInfo.imageLinks.thumbnail,
                            description: book.volumeInfo.description,
                            quantity: qty
                        }))}
                            className='bg-black text-white text-lg font-medium rounded-sm capitalize cursor-pointer  w-40 text-center px-2 py-2 '>add to cart <AddShoppingCartIcon /> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookDetail