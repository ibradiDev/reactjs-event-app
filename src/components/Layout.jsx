import React from 'react'
import NavBar from './NavBar'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
    return (
        <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
            <ScrollToTop />
            <NavBar />
            <Outlet />
            <MobileNavBar />
            <Footer />
        </div>
    )
}
