import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Books = ({ book }) => {
 const dispatch =  useDispatch()
const navigate = useNavigate()
  const book_id = book.volumeInfo.title
  // console.log(book_id)
  const stringid = (book_id)=>{
    return String(book_id).toLowerCase().split(" ").join("")

  }

  const root_id = stringid(book_id)

  const handleNavigate = () =>{
    navigate(`book/${root_id}`,{state : {book} })
  }

  // console.log(book.volumeInfo.imageLinks.smallThumbnail)
  // console.log(book.volumeInfo)
  return (
    <>
      <div className='head ' >
        <div  className='w-56 border bg-white overflow-hidden '>
          <img onClick={handleNavigate} className='w-full hover:scale-110 duration-500' src={book?.volumeInfo.imageLinks.thumbnail} alt="Images" />
          <p className='mx-2 mt-3 text-base  font-medium'>Title : {book.volumeInfo.title.substring(0,20)}..</p>          
            <span className='cursor-pointer mx-2 my-3 text-base  font-medium'>For more details...</span>
            <div onClick={() => dispatch(addToCart({
                            id: book.id,
                            title: book.volumeInfo.title,
                            image: book.volumeInfo.imageLinks.thumbnail,
                            description: book.volumeInfo.description,
                            quantity: 1
                        }))}
                            className='bg-black text-white text-sm font-normal rounded-sm capitalize cursor-pointer  text-center mt-1 py-1 '>add to cart <AddShoppingCartIcon /> </div>
          

        </div>
      </div>
    </>
  )
}

export default Books