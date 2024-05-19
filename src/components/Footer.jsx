import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    const [modalVisible, setModalVisible] = useState(false);
    const handleOnClose = () => setModalVisible(false);

    return (
        <>
            <div className="nc-Footer relative py-14 pb-3 lg:py-16 border-t border-neutral-200 dark:border-neutral-700">
                <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10 mb-6">
                    <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
                        <div className="col-span-2 md:col-span-1">
                            <Link
                                className="ttnc-logo ncSectionLogos inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
                                to="/">
                                <img
                                    src="../../assets/images/logo.png"
                                    alt="Android logo"
                                />
                            </Link>
                        </div>
                        <div className="col-span-2 flex items-center md:col-span-3">
                            <div
                                className="nc-SocialsList1 flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start"
                                data-nc-id="SocialsList1"
                            >
                                <Link
                                    to="https://www.facebook.com/"
                                    className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                                >
                                    <i className="lab la-facebook-square" />
                                    <span className="hidden lg:block text-sm">Facebook</span>
                                </Link>
                                <Link
                                    to="https://www.twitter.com/"
                                    className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                                >
                                    <i className="lab la-twitter" />
                                    <span className="hidden lg:block text-sm">Twitter</span>
                                </Link>
                                <Link
                                    to="https://www.youtube.com/"
                                    className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                                >
                                    <i className="lab la-youtube" />
                                    <span className="hidden lg:block text-sm">Youtube</span>
                                </Link>
                                <Link
                                    to="https://www.instagram.com/"
                                    className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                                >
                                    <i className="lab la-instagram" />
                                    <span className="hidden lg:block text-sm">Instagram</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm">
                        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                            Pages
                        </h2>
                        <ul className="mt-5 space-y-4">
                            <li>
                                <Link
                                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                    to="/a-propos-de-l'appli-events"
                                >
                                    A Propos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                    to="/nous-contacter"
                                >
                                    Nous contacter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                    to="/Events-usedFolder/FAQs-events"
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                            Ressources
                        </h2>
                        <ul className="mt-5 space-y-4">
                            <li>
                                <Link
                                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                    to="/Events-usedFolder/conditions-generales-utilisations"
                                >
                                    Conditions Générales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                    to="/Events-usedFolder/politique-confidentielle"
                                >
                                    Politique de confidentialité
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div className="text-sm">
                        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                            Obtenir l'application
                        </h2>
                        <div className="mt-5 space-y-4">
                            <Link to="#" className="store pb-3 leng" style={{ width: "100%" }}>
                                <img
                                    className="appstore-original"
                                    src="../../assets/images/btn-ios.webp"
                                    alt="appstore logo"
                                />
                            </Link>
                            <Link to="#" className="store leng" style={{ width: "100%" }}>
                                <img
                                    style={{ height: "revert-layer" }}
                                    className="appstore-original"
                                    src="../../assets/images/btn-android.webp"
                                    alt="Android logo"
                                />
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="text-sm text-center">
                    <hr className='mb-5' />
                    <span className='font-bold text-neutral-6000 dark:text-neutral-300'>
                        Copyright &copy; 2023 Events-App. Tous droits réservé<br />
                        Développé par <span style={{ color: 'var(--primary)', }}>Ibradi</span>
                    </span>
                </div>
            </div>
        </>
    )
}
