import React, {useState} from 'react';
import {MenuIcon, XIcon} from "@heroicons/react/solid";

const nav = ['Home', 'About', 'Support', 'Platforms', 'Pricing']
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className={`w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg`}>

            <div className={`px-2 flex justify-between items-center w-full h-full`}>
                <div className={`flex items-center`}>
                    <h1 className={`text-3xl font-bold mr-4 sm:text-4xl`}>Thunder.</h1>
                    <ul className={`hidden md:flex `}>
                        {nav.map((el, i) => <li className={`p-4 cursor-pointer hover:text-gray-700`} key={i}>{el}</li>)}
                    </ul>
                </div>

                <div className={`hidden md:flex pr-4`}>
                    <button className={`border-none bg-transparent text-black mr-4`}>Sign In</button>
                    <button className={`px-8 py-3`}>Sign UP</button>
                </div>

                <div className={`md:hidden flex`}>
                    {!showMenu && <MenuIcon onClick={() => setShowMenu(true)}
                                            className={`w-[30px] cursor-pointer hover:fill-gray-600 transition`}/>}
                    {showMenu && <XIcon onClick={() => setShowMenu(false)}
                                        className={`w-[30px] cursor-pointer fill-red-900 transition`}/>}
                </div>
            </div>

            <ul className={`absolute bg-zinc-200 w-full h-screen px-8 transition-all ${!showMenu ? 'left-full' : 'left-0'}`}>
                {nav.map((el, i) => <li
                    className={`p-4 border-b-2 border-zinc-300 w-full cursor-pointer hover:border-indigo-300 transition-all hover:text-black`}
                    key={i}>{el}</li>)}

                <div className={`p-4 flex flex-col`}>
                    <button
                        className={`px-8 py-3 mt-4 text-white transition-all border-indigo-600 border-[1px] bg-indigo-600 rounded-[8px] hover:bg-transparent hover:text-indigo-600`}>Sign
                        In
                    </button>
                    <button
                        className={`px-8 py-3 mt-4 text-white transition-all border-indigo-600 border-[1px] bg-indigo-600 rounded-[8px] hover:bg-transparent hover:text-indigo-600`}>Sign
                        UP
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default NavBar;
