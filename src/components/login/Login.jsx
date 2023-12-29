import React from 'react'
import Chrome from '../../assets/img/chromeLogo.png'
import { getAuth, GoogleAuthProvider ,signOut ,signInWithPopup } from "firebase/auth";
import { addUser ,removeUser } from '../../redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e)=>{
        e.preventDefault()
        signInWithPopup(auth,provider).then((result) => {
            console.log(result.user)
        const  user = result.user
            dispatch(addUser({
                id : user.uid,
                name : user.displayName,
                email :user.email,
                image : user.photoURL
            }))
            setTimeout(()=>{
                navigate('/')
            },1000)
          }).catch((error) => {
            console.log(error)
          });
    }
    const handleSignOut =(e)=>{
        e.preventDefault()
        signOut(auth).then(() => {
            dispatch(removeUser())
            // console.log("signout")
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <div className='w-full flex items-center  justify-center  my-8 gap-3'>
            <div onClick={handleGoogleLogin} className='w-fit font-normal border flex justify-center items-center gap-4 rounded-md px-4 py-1 hover:border-purple-300 duration-300 cursor-pointer hover:bg-blue-500 hover:text-white'>
                <div className='w-10'><img src={Chrome} alt="GoogleImg" /></div>
                <div className=''> Sign in With Google</div>
            </div>  
            <div onClick={handleSignOut} className='px-4 py-3 rounded-md font-normal bg-blue-500 hover:bg-transparent hover:text-black border duration-300 cursor-pointer text-white'>Sign Out</div>
        </div>
    )
}

export default Login