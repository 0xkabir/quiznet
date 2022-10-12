import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='px-5 h-16 flex sticky top-0 justify-between items-center bg-white shadow-md z-10'>
            <Link to='/'>
                <div className='flex items-center'>
                    <h2 className='text-xl font-medium'><span className='text-orange-700'>Quiz</span>Net</h2>
                </div>
            </Link>

            <div className='relative'>
                <div onClick={()=>setOpen(!open)} className='text-right md:hidden'>
                    {
                        open?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBarsStaggered} />
                    }
                </div>
                <ul className={`w-1/2 h-full bg-white text-center flex flex-col md:flex-row
                justify-center fixed md:static duration-500 ease-in-out ${open?'right-0':'right-[-250px]'}`}>
                   <li className='w-full'>
                   <NavLink to='/topics' className={({isActive})=>isActive?'mx-2 px-3 py-1 my-5 md:my-0 block bg-slate-700 font-medium text-white rounded-lg': 'mx-2 px-3 py-1 my-5 md:my-0 block'}>Topics</NavLink>
                   </li>
                
                    <li>
                    <NavLink to='/statistics' className={({isActive})=>isActive?'mx-2 px-3 py-1 my-5 md:my-0 block bg-slate-700 font-medium text-white rounded-lg': 'mx-2 px-3 py-1 my-5 md:my-0 block'}>Statistics</NavLink>
                    </li>
                
                    <li>
                    <NavLink to='/blog' className={({isActive})=>isActive?'mx-2 px-3 py-1 my-5 md:my-0 block bg-slate-700 font-medium text-white rounded-lg': 'mx-2 px-3 py-1 my-5 md:my-0 block'}>Blog</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;