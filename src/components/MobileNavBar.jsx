import React from 'react'
import { Link } from 'react-router-dom';

export default function MobileNavBar({ visible, onClose }) {
    // console.log(visible);
    if(!visible) return null;

    return (
        <div id="headlessui-portal-root">
            <div data-headlessui-portal="">
                <button
                type="button"
                data-headlessui-focus-guard="true"
                aria-hidden="true"
                style={{
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: 0
                }}
                />
                <div>
                <div
                    className="relative z-50 overflow-hidden"
                    id="headlessui-dialog-:r45:"
                    role="dialog"
                    aria-modal="true"
                    data-headlessui-state="open"
                >
                    <div
                    className="fixed inset-0 bg-neutral-900 bg-opacity-50 opacity-100"
                    id="headlessui-dialog-overlay-:r46:"
                    aria-hidden="true"
                    data-headlessui-state="open"
                    />
                    <div className="fixed inset-0">
                    <div className="flex justify-end min-h-full ">
                        <div
                        className="w-full max-w-md overflow-hidden transition-all opacity-100 translate-x-0"
                        id="headlessui-dialog-panel-:r47:"
                        data-headlessui-state="open"
                        >
                        <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
                            <div className="py-6 px-5">
                            <Link
                                className="ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
                                to="/"
                                onClick={onClose}
                            >
                                <img
                                    src="../../assets/images/logo.png"
                                    alt="Android logo"
                                />
                            </Link>
                            <div className="flex flex-col mt-5 text-neutral-700 dark:text-neutral-300 text-sm">
                                <span>
                                Bienvenue sur <b>Events</b>, votre destination pour l'achat de tickets événementiels d'exception !
                                </span>
                                <div className="flex justify-between items-center mt-4">
                                <nav
                                    className="nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 "
                                    data-nc-id="SocialsList"
                                >
                                    <Link
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300"
                                    to="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                    >
                                    <i className="lab la-facebook-square" />
                                    </Link>
                                    <Link
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300"
                                    to="https://www.twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Twitter"
                                    >
                                    <i className="lab la-twitter" />
                                    </Link>
                                    <Link
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300"
                                    to="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Youtube"
                                    >
                                    <i className="lab la-youtube" />
                                    </Link>
                                    <Link
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300"
                                    to="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Instagram"
                                    >
                                    <i className="lab la-instagram" />
                                    </Link>
                                </nav>
                                </div>
                            </div>
                            <span className="absolute right-2 top-2 p-1">
                                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none">
                                <span className="sr-only">Close</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </button>
                            </span>
                            </div>
                            <ul className="flex flex-col py-6 px-2 space-y-1">
                            <li
                                className="text-neutral-900 dark:text-white"
                                data-headlessui-state=""
                            >
                                <Link
                                aria-current="page"
                                className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-secondary"
                                to="/"
                                onClick={onClose}
                                >
                                <span className="py-2.5 pr-3 ">Accueil</span>
                                </Link>
                            </li>
                            <li
                                className="text-neutral-900 dark:text-white"
                                data-headlessui-state=""
                            >
                                <Link
                                className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg "
                                to="/a-propos-de-l'appli-events"
                                onClick={onClose}
                                >
                                <span className="py-2.5 pr-3 block w-full">
                                    A Propos
                                </span>
                                </Link>
                            </li>
                            <li
                                className="text-neutral-900 dark:text-white"
                                data-headlessui-state=""
                            >
                                <Link
                                onClick={onClose}
                                className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg "
                                to="/nous-contacter"
                                >
                                <span className="py-2.5 pr-3 ">Nous contacter</span>
                                
                                </Link>
                            </li>
                            
                            </ul>
                            <div className="flex items-center justify-between py-6 px-5">
                            <Link
                                onClick={onClose}
                                className="inline-block"
                                to="/demande"
                                // target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                                    Publier votre événement
                                </button>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <button
                type="button"
                data-headlessui-focus-guard="true"
                aria-hidden="true"
                style={{
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: 0
                }}
                />
            </div>
        </div>
    )
}
