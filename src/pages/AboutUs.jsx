import React, { useEffect } from 'react'

export default function AboutUs() {

    useEffect(() => {
        // Mettre à jour le titre de la page
        document.title = "Page à propos - Events";
        
      }, []);

    return (
        <>
            <div className="nc-BgGlassmorphism absolute inset-x-0 md:top-10 xl:top-40 min-h-0 pl-20 py-24 flex overflow-hidden z-0" data-nc-id="BgGlassmorphism">
            
                <span className="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96" />
                <span className="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000" />
            </div>
            <div className="container py-16 lg:py-15 space-y-16 lg:space-y-28">
                <div className="nc-SectionHero relative ">
                    <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
                        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
                            <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
                                👋 Events.
                            </h2>
                            <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
                                Bienvenue sur <b>Events</b>, votre application de bielleterie en ligne ultime pour découvrir, réserver et vivre 
                                les meilleurs événements autour du monde. <br /><br />
                                Chez <b>Events</b>, nous croyons en la puissance des expériences en direct, et c'est pourquoi nous avons 
                                créé une application qui simplifie le processus de réservation pour tous les passionnés d'événements.
                            </span>
                        </div>
                        <div className="flex-grow">
                            <img
                                alt=""
                                loading="lazy"
                                width={1450}
                                height={638}
                                decoding="async"
                                data-nimg={1}
                                className="w-full"
                                style={{ color: "transparent" }}
                                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-hero-right.eef45dc9.png&w=1920&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-hero-right.eef45dc9.png&w=3840&q=75 2x"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-hero-right.eef45dc9.png&w=3840&q=75"
                            />
                        </div>
                    </div>
                </div>

                <div className="listingSection__wrap">
                    <h2 className="text-2xl font-semibold">Notre mission dans votre quotidien</h2>
                    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
                    <div className="text-neutral-6000 dark:text-neutral-300">
                        <p>
                            Chez Events, nous avons révolutionné la façon dont vous vivez les événements. 
                            Fini les déplacements fastidieux et les files d'attente interminables. 
                            Avec notre application conviviale, découvrez et achetez facilement les meilleurs 
                            événements sans quitter le confort de votre foyer. Explorez une variété d'activités, 
                            des concerts aux conférences, et profitez d'une expérience sans tracas. Bienvenue dans 
                            une nouvelle ère de découverte sans limites, où le monde des événements s'ouvre à vous, 
                            où que vous soyez.
                            <br />
                            <br />
                            Notre mission est de connecter les organisateurs d'événements exceptionnels avec un public avide de découvertes. 
                            Que vous soyez un amateur de musique, de sport, de conférences, ou de tout autre type d'événement, 
                            Events vous offre une plateforme conviviale pour explorer, acheter et participer.
                            <br />
                            <br />
                            Chez Events, nous mettons l'accent sur la simplicité, la diversité et l'accessibilité. 
                            Explorez une large sélection d'événements, achetez facilement vos places, et vivez des expériences 
                            mémorables avec nous.
                            <br />
                            <br />
                            L'application a été fondée avec la vision de créer une large communauté passionnée par les événements en direct. 
                            Notre équipe dévouée travaille sans relâche pour améliorer continuellement l'expérience de nos utilisateurs, 
                            en intégrant les dernières technologies et en établissant des partenariats solides avec des 
                            organisateurs d'événements renommés.
                            <br />
                            <br />
                            Nous croyons en la valeur des moments partagés, des souvenirs créés et des passions explorées. 
                            Avec cette plateforme, chaque événement devient une opportunité de vivre pleinement, de créer des liens et de découvrir 
                            le monde qui vous entoure.
                            <br />
                            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 mb-5 mt-5" />
                            <span className='font-bold text-neutral-6000 dark:text-neutral-300'>
                                Merci de faire partie de la communauté Events. Explorez, achetez, et vivez l'expérience Events dès aujourd'hui.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="nc-SectionStatistic relative ">
                    <div className="nc-Section-Heading relative mb-10 text-neutral-900 dark:text-neutral-50">
                        <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-semibold">🚀 Notre Impact</h2>
                        <span className="block mt-2 md:mt-3 font-normal text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
                            Notre mission est de révolutionner l'expérience événementielle. Voici comment nous faisons la différence :
                        </span>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800">
                            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
                                + de 1 000
                            </h3>
                            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                                Événements Répertoriés (Dépuis lancement)
                            </span>
                        </div>
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800">
                            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
                            + de 10 000
                            </h3>
                            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                                Utilisateurs Actifs
                            </span>
                        </div>
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800">
                            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
                                + 220
                            </h3>
                            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                                Promoteurs d'événement Satisfaits
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
