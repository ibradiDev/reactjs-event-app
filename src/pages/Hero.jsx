import React, { useEffect } from "react";

export default function Index() {

  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = "Accueil site officiel - Events";

  }, []);

  return (
    <main className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 mb-10 lg:space-y-28 lg:mb-15">
        <div className="relative pb-0 pt-24 lg:py-32 xl:py-40 2xl:py-48">
          <div
            className="nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 bg-opacity-80 dark:bg-opacity-100"
            data-nc-id="BackgroundSection"
          >
            <img
              alt="dowload App Png"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl object-right"
              style={{ color: "transparent" }}
              srcSet="../../assets/images/dowloadApp_1.webp"
              src="../../assets/images/dowloadApp_1.webp"
            />
            <div
              style={{ justifyContent: "center" }}
              className="hidden lg:flex absolute right-0 bottom-0 max-w-xl xl:max-w-2xl rounded-3xl overflow-hidden"
            >
              <img
                style={{ color: "transparent", width: "65%" }}
                srcSet="../../assets/images/banniere.png"
                src="../../assets/images/banniere.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative inline-block ">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-neutral-800">
              Events App
            </h2>
            <span className="block mt-7 max-w-md text-neutral-6000">
              Explorez et réservez instantanément les meilleurs tickets pour une
              variété d'événements, des concerts aux conférences, selon vos
              préférences.
            </span>
            <div className="flex space-x-3 mt-10 sm:mt-14">
              <a href="##" target="_blank" rel="noopener noreferrer">
                <img
                  alt=""
                  width={185}
                  height={60}
                  style={{ color: "transparent" }}
                  srcSet="../../assets/images/btn-ios.webp"
                  src="../../assets/images/btn-ios.webp"
                />
              </a>
              <a href="##" target="_blank" rel="noopener noreferrer">
                <img
                  alt=""
                  loading="lazy"
                  width={165}
                  height={60}
                  style={{ color: "transparent", height: "100%" }}
                  srcSet="../../assets/images/btn-android.webp"
                  src="../../assets/images/btn-android.webp"
                />
              </a>
            </div>
            <div className="block lg:hidden mt-10 max-w-2xl rounded-3xl overflow-hidden"
            // style={{ justifyContent: "center",display: "flex",alignItems: "center" }}
            >
              <img
                alt=""
                style={{ color: "transparent", width: "65%" }}
                srcSet="../../assets/images/banniere.png"
                src="../../assets/images/banniere.png"
              />
            </div>
          </div>
        </div>
        <div
          className="nc-SectionOurFeatures relative flex flex-col items-center lg:flex-row lg:py-10"
          data-nc-id="SectionOurFeatures"
        >
          <div className="flex-grow">
            <img
              alt=""
              loading="lazy"
              width={1179}
              height={1032}
              style={{ color: "transparent" }}
              srcSet="../../assets/images/Mobile_pay.png"
              src="../../assets/images/Mobile_pay.png"
            />
          </div>
          <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pl-16">
            <span className="uppercase text-sm text-gray-400 tracking-widest">
              Découvrez
            </span>
            <h2 className="font-semibold text-4xl mt-5">
              Simplifiez-vous la vie{" "}
            </h2>
            <ul className="space-y-10 mt-16">
              <li className="space-y-4">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100">
                  <i class="text-sm las la-ticket-alt mr-1"></i>
                  Large Sélection d'Événements
                </span>
                <span className="block text-xl font-semibold">
                  Découvrez l'Événementiel
                </span>
                <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                  Explorez une variété d'événements, des concerts captivants aux
                  conférences inspirantes, offrant une expérience complète et
                  divertissante.
                </span>
              </li>
              <li className="space-y-4">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-green-800 bg-green-100">
                  <i class="text-sm las la-check mr-1"></i>
                  Réservation Facile
                </span>
                <span className="block text-xl font-semibold">
                  Simplicité de Réservation
                </span>
                <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                  Plus bésoin de vous déplacer pour en bénéficier. <br />
                  Réservez facilement en quelques clics. Un processus simplifié
                  pour une expérience utilisateur fluide et rapide.
                </span>
              </li>
              <li className="space-y-4">
                <span className="nc-Badge items-center inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100">
                  <i class="text-sm las la-lock mr-1"></i>
                  Sécurité
                </span>
                <span className="block text-xl font-semibold">
                  Sécurité intégrée
                </span>
                <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                  Assurez-vous des réservations et des paiements en ligne en
                  toute sécurité. L'appli <b>Events</b> offre une expérience
                  simple et sécurisée.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative py-10">
          <div
            className="nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20 "
            data-nc-id="BackgroundSection"
          />
          <div
            className="nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  "
            data-nc-id="SectionBecomeAnAuthor"
          >
            <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
              <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
                Exposez vos événements à une large audience
              </h2>
              <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
                Libérez le potentiel de votre événement en le présentant sur
                notre plateforme exclusive. Connectez-vous avec un public large
                et avide de découvertes. Des concerts aux conférences, mettez en
                avant votre événement de manière percutante. <br /> <br />
                Commencez dès maintenant une nouvelle expérience avec nous en
                soumettant votre demande de publication. Laissez votre événement
                briller sous les feux de la rampe qu'il mérite !
              </span>
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 mt-6 sm:mt-11 ">
                Publier votre événement
              </button>
            </div>
            <div className="flex-grow">
              <img
                alt=""
                loading="lazy"
                width={890}
                height={694}
                style={{ color: "transparent" }}
                srcSet="../../assets/images/PostAnEvent.webp"
                src="../../assets/images/PostAnEvent.webp"
              />
            </div>
          </div>
        </div>

        <div className="relative py-10">
          <div
            className="nc-SectionOurFeatures relative flex flex-col items-center lg:flex-row-reverse lg:py-14"
            data-nc-id="SectionOurFeatures"
          >
            <div
              className="flex-grow"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                alt=""
                loading="lazy"
                width={825}
                height={820}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent", width: "70%" }}
                srcSet="../../assets/images/Mobile_pay.png"
                src="../../assets/images/Mobile_pay.png"
              />
            </div>
            <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pr-1 lg:pl-16">
              <h2 className="font-semibold text-4xl mt-5 mb-8">
                {" "}
                Gardez le contrôle{" "}
              </h2>
              <span className="text-neutral-700 dark:text-neutral-300">
                Profitez de la commodité, de la flexibilité et de la sécurité,
                et préparez-vous à vivre des moments exceptionnels lors de
                chaque événement de votre choix.
              </span>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 mt-3" />
              <nav className="space-y-4 mb-8 mt-5">
                <li className="flex items-center">
                  <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000 font-w700">
                    <i class="las la-check-circle text-2xl"></i>
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Personnalisez votre expérience en choisissant le type de
                    billet qui correspond à vos préférences.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                    <i class="las la-check-circle text-2xl"></i>
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Procédez à un processus d'achat sans tracas grâce à des
                    passerelles de paiement sécurisées.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                    <i class="las la-check-circle text-2xl"></i>
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Profitez d'une politique d'annulation flexible pour gérer
                    les imprévus.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                    <i class="las la-check-circle text-2xl"></i>
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Obtenez des remboursements automatisés et une assistance en
                    temps réel pour une tranquillité d'esprit totale.
                  </span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="relative py-16">
          <div
            className="nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-orange-50 dark:bg-black/20"
            data-nc-id="BackgroundSection"
          />
          <div className="nc-SectionSliderNewCategories ">
            <div className="relative grid md:grid-cols-3 gap-20">
              <div className="relative flex flex-col items-center max-w-xs mx-auto">
                <div className="text-center mt-auto">
                  <h3 className="text-xl font-semibold">
                    Events à portée de main
                  </h3>
                  <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                    Téléchargez l'application Events en un clic. La création de
                    compte est rapide et simple. Commencez votre aventure dès
                    maintenant !
                  </span>
                </div>
              </div>
              <div className="relative flex flex-col items-center max-w-xs mx-auto">
                <div className="text-center mt-auto">
                  <h3 className="text-xl font-semibold">
                    Explorez, Choisissez, Réservez
                  </h3>
                  <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                    Explorez une variété d'événements passionnants. Faites votre
                    choix et réservez vos billets en quelques étapes simples.
                    L'expérience Events est conçue pour votre facilité.
                  </span>
                </div>
              </div>
              <div className="relative flex flex-col items-center max-w-xs mx-auto">
                <div className="text-center mt-auto">
                  <h3 className="text-xl font-semibold">
                    Vivez l'Événement en Toute Sérénité
                  </h3>
                  <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                    Présentez votre billet électronique à l'entrée. Profitez de
                    l'événement sans tracas. Events simplifie votre expérience,
                    de l'achat au scan du ticket.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mt-5 justify-center items-center">
              <a
                href="##"
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
                Télécharger l'appli Events
              </a>
            </div>
          </div>
        </div>

        <section className="flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="flex flex-col items-start justify-center w-full h-full sm:pr-8 mb-10 lg:mb-0 lg:w-1/2">
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase sm:text-normal sm:font-bold">
                    Voici ce qu'ils disent
                  </p>
                  <h3 className="mt-1 font-bold text-3xl md:text-4xl lg:text-5xl sm:mx-0">
                    Nos clients nous aiment
                  </h3>
                </div>
                <p className="my-5 text-lg text-neutral-500 dark:text-neutral-400">
                  Ne vous contentez pas de nous croire seulement sur parole,{" "}
                  <br /> lisez notre vaste liste de témoignages clients.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-slate-800/60 rounded-3xl">
                  <div className="flex flex-col sm:pr-10 overflow-hidden">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-sm text-slate-300 sm:text-base lg:text-sm xl:text-base">
                        Awesome theme, and very professional customer support!
                        I'm a very happy customer, thanks.
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-slate-200 truncate sm:text-base lg:text-base">
                      ProwAB2012
                      <span className="mt-1 text-sm leading-5 text-neutral-400 dark:text-neutral-300 truncate">
                        {" "}
                        - {/* */} {/* */}Customer
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-slate-500 truncate" />
                  </div>
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    className="hidden sm:flex flex-shrink-0 w-10 sm:w-20 sm:h-20 bg-gray-300 rounded-full object-cover"
                    style={{ color: "transparent" }}
                    srcSet="../../assets/images/clientSay64ff6.png"
                    src="../../assets/images/clientSay64ff6.png"
                  />
                </blockquote>
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-slate-800/60 rounded-3xl">
                  <div className="flex flex-col sm:pr-10 overflow-hidden">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-sm text-slate-300 sm:text-base lg:text-sm xl:text-base">
                        Really nice, clean and good looking Template. Easy to
                        set up if you read the documentation ;)
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-slate-200 truncate sm:text-base lg:text-base">
                      Pixelpoldi
                      <span className="mt-1 text-sm leading-5 text-neutral-400 dark:text-neutral-300 truncate">
                        {" "}
                        - {/* */} {/* */}Customer
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-slate-500 truncate" />
                  </div>
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    className="hidden sm:flex flex-shrink-0 w-10 sm:w-20 sm:h-20 bg-gray-300 rounded-full object-cover"
                    style={{ color: "transparent" }}
                    srcSet="../../assets/images/clientSayMain49ed.png"
                    src="../../assets/images/clientSayMain49ed.png"
                  />
                </blockquote>
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-slate-800/60 rounded-3xl">
                  <div className="flex flex-col sm:pr-10 overflow-hidden">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-sm text-slate-300 sm:text-base lg:text-sm xl:text-base">
                        These guys are awesome. New generation of Booking
                        listings site. Cheers :)
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-slate-200 truncate sm:text-base lg:text-base">
                      Jotiduli
                      <span className="mt-1 text-sm leading-5 text-neutral-400 dark:text-neutral-300 truncate">
                        {" "}
                        - {/* */} {/* */}Customer
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-slate-500 truncate" />
                  </div>
                  <img
                    alt="Autor"
                    loading="lazy"
                    width={80}
                    height={80}
                    className="hidden sm:flex flex-shrink-0 w-10 sm:w-20 sm:h-20 bg-gray-300 rounded-full object-cover"
                    style={{ color: "transparent" }}
                    srcSet="../../assets/images/clientSay43cdb.png"
                    src="../../assets/images/clientSay43cdb.png"
                  />
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
