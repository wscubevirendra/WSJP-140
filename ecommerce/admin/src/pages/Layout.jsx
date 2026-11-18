import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from "react-router-dom"


export default function Layout() {
    return (
        <div className='w-full flex h-screen'>
            {/* Left Section */}
           <Sidebar/>
            {/* Right Section */}
            <div className='flex-1 h-full'>
                <Header />
                <div className='p-4 bg-[#F5F5F5]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
