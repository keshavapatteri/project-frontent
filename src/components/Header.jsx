
import React from 'react';
import { Link} from 'react-router-dom';
import DarkMode from './ui/DarkMode';

const Header = () => { 
  
    return (
        //FOR LOGO
        <div className="flex items-center justify-between w-full h-32 px-20 shadow-xl pt-4">
            <div className="avatar ">
                <div className="w-24 rounded-full">
                    <img src="https://www.shutterstock.com/image-vector/abstract-lines-car-logo-vector-600nw-2133426575.jpg" />
                </div>
            </div>
            <nav className='flex gap-20 font-semibold'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact-US</Link>
            </nav>
            <div className="flex items-center gap">
                <DarkMode />
                <Link to={"/signup"}>
                    <button className="btn btn-primary ">Join us</button>&nbsp;&nbsp;  </Link>
                    <Link to={"/admin-login"}>  <button className="btn btn-primary ">ADMIN-LOGIN</button> </Link>
                      
            </div>
        </div>
    )
}

export default Header;
