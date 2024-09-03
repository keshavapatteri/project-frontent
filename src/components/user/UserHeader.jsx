import React from 'react'
import DarkMode from '../ui/DarkMode'
import { Link, useNavigate } from 'react-router-dom'
import { CircleUser, ShoppingBag } from 'lucide-react'
import Cookies from 'js-cookie';
const UserHeader = () => {
  const navigate=useNavigate()
  const   handleLogout=()=>{
     Cookies.remove('userLogin');
     navigate('/home')
  }
  return (
    <div className="flex iteams-center justify-between w-full h-32 px-20 shadow-xl">
            <div>
                <h1 className="text-4xl" font-bold>logo</h1>
            </div>
            <nav className='flex gap-20 font-semibold'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/user/car"}>car</Link>
              
            </nav>
            <div className="flex iteams-center gap">
            <DarkMode/>
            <ShoppingBag />
            <CircleUser />
            
            <button class="btn btn-primary">Join us</button>
            <button className="btn btn-primary " onClick={()=>handleLogout()}>LOGOUT</button>
            </div>
        </div>
  )
}

export default UserHeader
