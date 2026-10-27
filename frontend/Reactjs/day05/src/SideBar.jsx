import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";


export default function SideBar() {
    const [toggle, setToggle] = useState(true)

    return (
        <header className='w-full text-2xl flex justify-between px-4 py-8 shadow '>
            <div className='font-bold text-teal-600'>Logo</div>
            <div onClick={() => setToggle(!toggle)}><FaBarsStaggered /></div>
            <div className={`w-75 h-full fixed duration-150 top-0 ${toggle ? "-left-full" : "left-0"}  bg-teal-200 shadow`}>

            </div>
        </header>
    )
}
