import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux';
import BooksComponent from '../../components/books/BooksComponent';
import './Home.css';
import MainBanner from '../../components/banner/Banner';

const Home = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const books = useSelector((state) => {
    return state.books.bookStore;
  });

  const handleSubmit = () => {
    dispatch(fetchBooks(input));
  };
  console.log(books)
  return (
    <>
      <MainBanner />
      <div className='Home_container py-6 px-10 bg-gray-300'>
        <h1 className='text-center font-semibold text-2xl w-56 mx-auto bg-black text-white px-6 py-2'>Your Bookstore</h1>
        <div className="text-center font-medium font-mono tracking-tight py-3">Hello there! We're delighted you're using our search feature. To ensure accurate results, please enter a valid author name or book title. If you need assistance or have any questions, feel free to ask. Happy searching! (If It show error reload and try again)</div>
        <div className='text-center my-8'>
          <input
            type="text"
            className='px-2 py-1 w-44 sm:w-64 border'
            placeholder='What are you looking for...'
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className='mx-4 my-2 border-black  px-6 py-1 text-base border rounded-sm font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-400 duration-300 '
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        <div className='max-w-screen-xl w-full ml-4 grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4'>
          {books &&
            books.map((item) => (
              <div key={item.id} >
                <BooksComponent book={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
