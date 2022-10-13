import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='h-16 md:w-[100vw] flex sticky top-0 justify-between items-center bg-white shadow-md z-10'>
            <Link to='/'>
                <div className='flex items-center px-5'>
                    <h2 className='text-xl font-medium'><span className='text-orange-700'>Quiz</span>Net</h2>
                </div>
            </Link>

            <div className='relative px-5'>
                <div onClick={()=>setOpen(!open)} className='text-right md:hidden'>
                    {
                        open?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBarsStaggered} />
                    }
                </div>
                <div className={`md:px-5 md:text-lg lg:text-base flex flex-col justify-center md:flex-row w-[50vw] md:w-full bg-white h-[100vh] md:h-auto absolute md:static top-10 duration-500 ease-in ${open?'right-0':'right-[-250px]'}`}>
                    <NavLink to='/topics' className={({isActive})=>isActive?'mx-2 px-3 py-1 my-5 md:my-0 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 my-5 md:my-0 block'}>Topics</NavLink>
                    <NavLink to='/statistics' className={({isActive})=>isActive?'mx-2 px-3 py-1 my-5 md:my-0 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 my-5 md:my-0 block'}>Statistics</NavLink>
                    <NavLink to='/blog' className={({isActive})=>isActive?'mx-2 px-3 py-1 my-5 md:my-0 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 my-5 md:my-0 block'}>Blog</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;