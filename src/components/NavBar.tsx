import { NavLink } from "react-router-dom";
import React from 'react'

export default function NavBar({search, setSearch}: {search: string, setSearch: React.Dispatch<React.SetStateAction<string>>}):React.JSX.Element{
    const ref = React.useRef<HTMLElement>(null);

    function focusOnElement(){
        ref.current?.focus();
    }

    return (
        <nav className="sticky z-60 top-0 flex flex-col w-full md:w-full p-[1%] md:flex-row">
            <div id='logo' className="md:flex-1 w-[50%]">
                <h1 className="flex items-center justify-center"><span id='mini' className="mini text-[1.6rem] text-white">Mini</span><span className="font-sans text-black">Blog</span><span className="text-black">.</span></h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-full">
                <input type="text" placeholder="Search..." value={search} onChange={(e)=> setSearch(e.target.value)} className="mr-[18%] border border-gray-300 rounded-lg focus:outline-black px-4 py-2"/>
                <div id='menu' className="md:hidden bg-black text-white px-4 py-1 rounded-lg"> <span className="text-2xl">☰</span> </div>
            </div>
            <div id='nav-links' className="hidden md:flex md:w-[50%] justify-evenly items-center">
                <NavLink to="/" className={({isActive})=> isActive ? "bg-[#8AB49E] text-lg border-b-[3px] border-white focus:border-white shadow-lg focus:text-white focus:outline-none py-1 px-4 rounded-lg hover:text-white" : "text-lg border-b-[3px] border-transparent hover:border-white focus:border-white focus:text-white focus:outline-none py-1 px-4 rounded-lg hover:text-white"} onClick={focusOnElement}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "bg-[#8AB49E] text-lg border-b-[3px] border-white focus:border-white shadow-lg focus:text-white focus:outline-none py-1 px-4 rounded-lg hover:text-white" : "text-lg border-b-[3px] border-transparent hover:border-white focus:border-white focus:text-white focus:outline-none py-1 px-4 rounded-lg hover:text-white"} onClick={focusOnElement}>About</NavLink>
                <NavLink to="/posts" className={({isActive})=> isActive ? "bg-[#8AB49E] text-lg border-b-[3px] border-white focus:border-white shadow-lg focus:text-white focus:outline-none py-1 px-4 rounded-lg hover:text-white" : "text-lg border-b-[3px] border-transparent hover:border-white focus:border-white focus:text-white focus:outline-none py-1 px-4 rounded-lg hover:text-white"} onClick={focusOnElement}>Posts</NavLink>
            </div>
        </nav>
    )
}