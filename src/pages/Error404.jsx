import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = "404 - Events";
    
  }, []);
  return (
    <>
      <div className="nc-Page404">
            <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
                <header className="text-center max-w-2xl mx-auto space-y-2">
                <div className="nc-NcImage " data-nc-id="NcImage">
                    <img
                    src="../../assets/images/Page_not_found_404.png"
                    className="w-full"
                    alt="Page 404"
                    />
                </div>
                <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
                    OUPS !! LA PAGE QUE VOUS TENTEZ D'ACCEDER EST INTROUVABLE.
                </span>
                <div className="pt-8">
                    <Link
                    className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                    rel="noopener noreferrer"
                    to="/"
                    >
                    RETOUR A L'ACCUEIL
                    </Link>
                </div>
                </header>
            </div>
        </div>

    </>
  )
}
