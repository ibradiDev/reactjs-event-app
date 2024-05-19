import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function ContactPage() {
    useEffect(() => {
        // Mettre à jour le titre de la page
        document.title = "Contactez-nous - Events";
        
      }, []);
    return (
        <div>
            <div className="mb-10 lg:mb-15">
                <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                    Contact
                </h2>
                <div className="container max-w-7xl mx-auto">
                    <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
                    <div className="max-w-sm space-y-8">
                        <div>
                        <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                            🗺 ADDRESSE
                        </h3>
                        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                            Photo booth tattooed prism, portland taiyaki hoodie neutra
                            typewriter
                        </span>
                        </div>
                        <div>
                        <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                            💌 E-MAIL
                        </h3>
                        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                            support@app-events.com
                        </span>
                        </div>
                        <div>
                        <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                            ☎ TELEPHONE
                        </h3>
                        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                            000-123-456-7890
                        </span>
                        </div>
                        <div>
                        <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                            🌏 RESEAU SOCIAUX
                        </h3>
                        <nav
                            className="nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 mt-2"
                            data-nc-id="SocialsList"
                        >
                            <Link
                            className="block"
                            to="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Facebook"
                            >
                            <i className="lab la-facebook-square" />
                            </Link>
                            <Link
                            className="block"
                            to="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Twitter"
                            >
                            <i className="lab la-twitter" />
                            </Link>
                            <Link
                            className="block"
                            to="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Youtube"
                            >
                            <i className="lab la-youtube" />
                            </Link>
                            <Link
                            className="block"
                            to="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Instagram"
                            >
                            <i className="lab la-instagram" />
                            </Link>
                        </nav>
                        </div>
                    </div>
                    <div>
                        <form className="grid grid-cols-1 gap-6" action="#" method="post">
                            <label className="block">
                                <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                                Votre nom complet
                                </label>
                                <input
                                className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                placeholder="Exemple Mendy ALLA"
                                type="text"
                                />
                            </label>
                            <label className="block">
                                <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                                Adresse E-mail
                                </label>
                                <input
                                className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                placeholder="example@example.com"
                                type="email"
                                />
                            </label>
                            <label className="block">
                                <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                                    Message
                                </label>
                                <textarea
                                className="block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1"
                                rows={6}
                                placeholder='Entrez le contenu de votre message'
                                defaultValue={""}
                                />
                            </label>
                            <div>
                                <button
                                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  "
                                type="submit"
                                >
                                Envoyer <i className="las la-paper-plane ml-2"></i>

                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
