import React, { useEffect, useState } from "react";

function EventDetails({
  images,
  formData,
  ticketsData,
  eventData,
  personalData,
}) {
  const affiche = URL.createObjectURL(new Blob([images.affiche]));
  const image_lieu_evenement = URL.createObjectURL(
    new Blob([images.image_lieu_evenement])
  );
  const formatDate = (rawDate) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateObject = new Date(rawDate);
    return dateObject.toLocaleDateString("fr-FR", options);
  };

  const totalTicketPrice = ticketsData.reduce((total, ticket) => {
    const price = parseFloat(ticket.prix_unitaire);
    return total + price;
  }, 0);

  // Formatage de la somme des prix
  const formattedTotalTicketPrice = totalTicketPrice.toLocaleString("fr-FR", {
    style: "currency",
    currency: "XAF",
    minimumFractionDigits: 0,
    useGrouping: true,
  });

  return (
    <div className="ListingDetailPage">
      <div className="container ListingDetailPage__content">
        <div className=" nc-ListingCarDetailPage ">
          <header className="rounded-md sm:rounded-xl">
            <div className="relative grid grid-cols-2 gap-1 sm:gap-2">
              <div className="col-span-2 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
                <img
                  title="affiche"
                  alt="affiche de l\'evenement"
                  loading="lazy"
                  width={1901}
                  height={960}
                  decoding="async"
                  data-nimg={1}
                  className="object-cover rounded-md sm:rounded-xl"
                  style={{ color: "transparent", height: "26rem" }}
                  srcSet={affiche}
                  src={affiche}
                />
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity" />
              </div>
              <div className="col-span-2 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
                <img
                  title="lieu de l'evenement"
                  alt="evenement_image"
                  loading="lazy"
                  width={1901}
                  height={960}
                  decoding="async"
                  data-nimg={1}
                  className="object-cover rounded-md sm:rounded-xl"
                  style={{ color: "transparent", height: "26rem" }}
                  srcSet={image_lieu_evenement}
                  src={image_lieu_evenement}
                />
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </header>

          <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
            <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:pr-10 lg:space-y-10">
              <div className="listingSection__wrap !space-y-6">
                <div className="flex justify-between items-center">
                  <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-pink-800 bg-pink-100  relative">
                    {eventData.categorie}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  {eventData.titre}
                </h2>
                <div className="flex items-center space-x-4">
                  <div
                    className="nc-StartRating flex items-center space-x-1 text-sm  "
                    data-nc-id="StartRating"
                  >
                    <div className="pb-[2px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-[18px] h-[18px] text-orange-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium ">4.5</span>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      (
                      {`${
                        eventData.type_evenement.vedette ? "VEDETTE; " : ""
                      } ${
                        eventData.type_evenement.populaire ? "POPULAIRE" : ""
                      }`}
                      )
                    </span>
                  </div>
                  <span>·</span>
                  <span>
                    <i className="las la-map-marker-alt" />
                    <span className="ml-1"> {eventData.lieu}</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 ring-1 ring-white dark:ring-neutral-900">
                    <img
                      alt="John Doe"
                      loading="lazy"
                      width={256}
                      height={256}
                      decoding="async"
                      data-nimg={1}
                      className="absolute inset-0 w-full h-full object-cover rounded-full"
                      style={{ color: "transparent" }}
                      srcSet="../assets/images/4746070.png"
                      src="../assets/images/4746070.png"
                    />
                    <span className="wil-avatar__name">!</span>
                    <span className=" bg-teal-500 rounded-full text-white text-xs flex items-center justify-center absolute  w-4 h-4 -top-0.5 -right-0.5">
                      <i className="las la-check" />
                    </span>
                  </div>
                  <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
                    <span className="text-neutral-900 dark:text-neutral-200 font-medium">
                      {eventData.acteur_principal}
                    </span>
                  </span>
                </div>
              </div>

              {/* EVENT DESCRIPTION */}
              <div className="listingSection__wrap">
                <h2 className="text-2xl font-semibold">
                  Description de l'événement
                </h2>
                <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
                <div className="text-neutral-6000 dark:text-neutral-300">
                  <p>{eventData.description}</p>
                </div>
              </div>
              {/* PROFIL INFORMATIONS */}
              <div className="listingSection__wrap">
                <h2 className="text-2xl font-semibold">
                  Vos informations personnelles
                </h2>
                <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
                <div className="flex items-center space-x-4">
                  <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-14 w-14 ring-1 ring-white dark:ring-neutral-900">
                    <img
                      alt="John Doe"
                      loading="lazy"
                      width={256}
                      height={256}
                      decoding="async"
                      data-nimg={1}
                      className="absolute inset-0 w-full h-full object-cover rounded-full"
                      style={{ color: "transparent" }}
                      srcSet="../assets/images/666201.png"
                      src="../assets/images/666201.png"
                    />
                    <span className=" bg-teal-500 rounded-full text-white text-xs flex items-center justify-center absolute  w-4 h-4 -top-0.5 right-0.5">
                      <i className="las la-lock" />
                    </span>
                  </div>
                  <div>
                    <span className="block text-xl font-medium">
                      {personalData.nom_complet}
                    </span>
                    <div className="mt-1.5 flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                      <div
                        className="nc-StartRating flex items-center space-x-1 text-sm  "
                        data-nc-id="StartRating"
                      >
                        <div className="pb-[2px]">
                          <span className="text-neutral-500 dark:text-neutral-400">
                            {personalData.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block text-neutral-500 dark:text-neutral-400 space-y-2.5">
                  <div className="flex flex-col">
                    <div class="text-sm font-semibold">
                      <span>Téléphone </span>
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {personalData.numero}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div class="text-sm font-semibold">
                      <span>Adresse résidentielle </span>
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {personalData.adresse_residence}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="block flex-grow mt-14 lg:mt-0">
              <div className="listingSection__wrap lg:shadow-xl">
                <span className="text-2xl font-semibold block">
                  Période & Date
                </span>
                <div className="mt-8 flex">
                  {eventData.date_fin ? (
                    <div className="flex-shrink-0 flex flex-col items-center py-2">
                      <span className="block w-6 h-6 rounded-full border border-neutral-400" />
                      <span className="block flex-grow border-l border-neutral-400 border-dashed my-1" />
                      <span className="block w-6 h-6 rounded-full border border-neutral-400" />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 flex flex-col items-center py-2">
                      <span className="block w-6 h-6 rounded-full border border-neutral-400" />
                    </div>
                  )}
                  {eventData.date_fin ? (
                    <div className="ml-4 space-y-14 text-sm">
                      <div className="flex flex-col space-y-2">
                        <span className=" text-neutral-500 dark:text-neutral-400">
                          {formatDate(eventData.date_debut)} ·{" "}
                          {eventData.heure_debut}
                        </span>
                        <span className=" font-semibold">
                          Date de début de l'événement
                        </span>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-neutral-500 dark:text-neutral-400">
                          {formatDate(eventData.date_fin)}
                        </span>
                        <span className="font-semibold">
                          Date de fin de l'événement
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="ml-4 space-y-14 text-sm">
                      <div className="flex flex-col space-y-2">
                        <span className=" text-neutral-500 dark:text-neutral-400">
                          {formatDate(eventData.date_debut)} ·{" "}
                          {eventData.heure_debut}
                        </span>
                        <span className=" font-semibold">
                          Date de l'événement
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="block mt-10 sticky top-28">
                <div className="listingSectionSidebar__wrap shadow-xl">
                  <div className="flex justify-between">
                    <span className="text-2xl font-semibold block">
                      Billet & Prix
                    </span>
                  </div>
                  <div className="flex flex-col space-y-4 ">
                    {ticketsData.map((ticket, index) => {
                      const price = parseFloat(ticket.prix_unitaire);

                      // Formater le prix unitaire
                      const formattedPrice = price.toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "XAF",
                        minimumFractionDigits: 0,
                        useGrouping: true,
                      });
                      return (
                        <div key={index} className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                          <span
                            style={{
                              background: "#5bcfc52e",
                              padding: "4px 10px",
                              borderRadius: "100px",
                              fontSize: "14px",
                            }}
                          >
                            {formattedPrice}
                            &nbsp;x {ticket.quantite}{" "}
                            <small
                              className="font-semibold"
                              style={{ fontSize: "13px" }}
                            >
                              Tickets
                            </small>
                          </span>
                          <span>·</span>
                          <span>{ticket.nom}</span>
                        </div>
                      );
                    })}
                    <div className="border-b border-neutral-200 dark:border-neutral-700" />
                    <div className="flex justify-between font-semibold">
                      <span>Prix de ticket (TT)</span>
                      <span>{formattedTotalTicketPrice}</span>
                    </div>
                  </div>
                  <button
                    className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50   "
                    type="submit"
                  >
                    Enregistrer le ticket
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
