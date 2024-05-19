import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNavBar from './MobileNavBar';

export default function NavBar() {
    
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    return (
        <div className="nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg shadow-sm dark:border-b dark:border-neutral-700">
            <div className="nc-MainNav1 relative z-10 ">
                <div className="px-4 lg:container h-20 relative flex justify-between">
                    <div className="hidden md:flex justify-start flex-1 space-x-4 sm:space-x-10">
                        <Link
                            className="ttnc-logo ncSectionLogos inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24 self-center"
                            to="/">
                            <img
                                src="../../assets/images/logo.png"
                                alt="Android logo"
                            />
                        </Link>
                        <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
                            <li
                                className="menu-item flex items-center menu-dropdown relative menuIsNew_lv1"
                                data-headlessui-state=""
                            >
                                <div>
                                    <Link
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                                        to="/"
                                    >
                                        Accueil
                                    </Link>
                                </div>
                            </li>
                            <li
                                className="menu-item flex items-center menu-megamenu menu-megamenu--large"
                                data-headlessui-state=""
                            >
                                <div>
                                    <Link
                                        rel=""
                                        className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                                        to="/a-propos-de-l'appli-events"
                                    >
                                        A Propos
                                    </Link>
                                </div>
                            </li>
                            <li
                                className="menu-item flex items-center menu-dropdown relative "
                                data-headlessui-state=""
                            >
                                <div>
                                    <Link
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                                        to="/nous-contacter"
                                    >
                                        Nous contacter
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex lg:hidden flex-[3] max-w-lg !mx-auto md:px-3 ">
                        <div className="self-center flex-1">
                            <div className="HeroSearchForm2Mobile">
                                <button onClick={() => setMobileMenuVisible(true)} className="relative flex items-center w-full border border-neutral-200 dark:border-neutral-6000 px-4 py-2 pr-11 rounded-full shadow-lg">
                                <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-8 h-8 sm:h-11 sm:w-11  flex-shrink-0">
                                    <img
                                    alt="John Doe"
                                    loading="lazy"
                                    width={256}
                                    height={256}
                                    decoding="async"
                                    data-nimg={1}
                                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                                    style={{ color: "transparent" }}
                                    srcSet="../../assets/images/logo.png"
                                    src="../../assets/images/logo.png"
                                    />
                                    <span className="wil-avatar__name">E</span>
                                </div>
                                    <div className="ml-3 flex-1 text-left overflow-hidden">
                                        <span className="block font-medium text-sm">EVENTS</span>
                                        <span className="block mt-0.5 text-xs font-light text-neutral-500 dark:text-neutral-400 ">
                                            <span className="line-clamp-1">
                                                Partout • Achetez • Rejoignez
                                            </span>
                                        </span>
                                    </div>
                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-6000 dark:text-neutral-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
                        <div className="hidden xl:flex space-x-0.5">

                            <div className="px-1" />
                            <Link 
                            to="/demande" 
                            className="self-center hidden xl:inline-flex text-opacity-90 group px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full items-center text-sm text-gray-700 dark:text-neutral-300 font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                Publier votre événement
                            </Link>
                        </div>
                        <div className="flex xl:hidden items-center">
                            <button className="self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ">
                                
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-7 h-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    />
                                </svg>
                            </button>
                            <div className="px-0.5" />
                            <button className="focus:outline-none flex items-center justify-center p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-8 w-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {mobileMenuVisible && <MobileNavBar visible={mobileMenuVisible} onClose={() => setMobileMenuVisible(false)} />}
        </div>
    );
};