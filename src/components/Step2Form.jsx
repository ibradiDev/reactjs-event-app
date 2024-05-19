import axios from "axios";
import React, { useEffect, useState } from "react";
import { format, addDays } from "date-fns";
import { fr } from "date-fns/locale";
import ModalEventsTypeConfirm from "./ModalEventsTypeConfirm";
import { isBefore } from "date-fns";

function Step2Form(props, inputErrorList) {
  const { eventData, prevPage, nextPage, handleEventDataChange } = props;
  const [errors, setErrors] = useState({});
  const [ShowMyModal, setShowMyModal] = useState(false);

  const [confirmed, setConfirmed] = useState(false); // Nouvel état

  // A propos de la catégorie
  const [categories, setCategories] = useState([]);

  const CategoriesRequest = async () => {
    await axios
      .get("https://backoffice.app-events.com/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des catégories", error)
      );
  };

  useEffect(() => {
    CategoriesRequest();
  }, []);

  // fin

  const handleCategoryChange = (event) => {
    const { name, value } = event.target;
    handleEventDataChange(event);
    localStorage.setItem(name, value);
  };

  useEffect(() => {
    const storedCategory = localStorage.getItem("categorie");
    if (storedCategory) {
      handleEventDataChange({
        target: { name: "categorie", value: storedCategory },
      });
    }
  });

  const validateForm = async () => {
    const newErrors = {};

    // Validation du champ titre
    if (!eventData.titre.trim()) {
      newErrors.titre = "Le titre est requis";
    }

    // Validation du champ acteur_principal
    if (!eventData.acteur_principal.trim()) {
      newErrors.acteur_principal = "Veuillez renseigner un acteur";
    }

    // Validation du champ catégorie
    if (!eventData.categorie.trim()) {
      newErrors.categorie = "La catégorie est requise";
    }

    // Si la catégorie sélectionnée est '__Choisir une catégorie__', vérifiez si l'utilisateur a spécifié une autre catégorie
    if (
      eventData.categorie.trim() === "__Choisir une catégorie__" &&
      !eventData.autre_categorie.trim()
    ) {
      newErrors.categorie =
        "Veuillez choisir une catégorie ou spécifier une autre catégorie";
    }

    const today = new Date();
    const minDate = addDays(today, 2);

    // Validation du champ date-debut
    if (!eventData.date_debut) {
      newErrors.date_debut = "Veuillez renseigner ce champ";
    } else {
      const selectedDate = new Date(eventData.date_debut);

      if (isBefore(selectedDate, minDate)) {
        newErrors.date_debut =
          "La date de début doit être au moins 3 jours après la date actuelle";
      }
    }
    if (eventData.date_fin) {
      if (isBefore(new Date(eventData.date_fin), minDate)) {
        newErrors.date_fin =
          "La date de fin doit être au moins 3 jours après la date actuelle";
      }
    }

    // Validation du champ date-debut
    if (!eventData.heure_debut) {
      newErrors.heure_debut = "Veuillez définir l'heure";
    }

    // Validation du champ date-debut
    if (!eventData.lieu.trim()) {
      newErrors.lieu = "Veuillez définir le lieu";
    }

    // Validation du champ date-debut
    if (!eventData.description.trim()) {
      newErrors.description = "Ce champ description est requis";
    }

    // Validation du champ affiche (image de l'événement)
    if (!eventData.affiche) {
      newErrors.affiche = "Veuillez sélectionner une image de votre événement";
    } else {
      // Vérification du type et de la taille de l'image
      // const allowedTypes = ['image/jpeg', 'image/png'];
      const maxSize = 2 * 1024 * 1024; // 2 Mo
      const selectedFile = eventData.affiche;

      if (selectedFile.size > maxSize) {
        newErrors.affiche =
          "Le fichier doit être une image ne doit pas dépasser 2 Mo";
      }
    }

    // Validation du champ image_lieu_evenement
    if (eventData.image_lieu_evenement) {
      // const allowedType = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB

      const selectedFileDefault = eventData.image_lieu_evenement;

      if (selectedFileDefault.size > maxSizeInBytes) {
        newErrors.affiche = "La taille de l'image ne doit pas dépasser 2 Mo";
      }
    }

    setErrors(newErrors);

    // Si des erreurs sont présentes, le formulaire n'est pas valide
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    // Valider le formulaire avant de passer à l'étape suivante
    if (await validateForm()) {
      // Vérifier si aucun des deux types d'événement n'est sélectionné
      if (
        !eventData.type_evenement.vedette &&
        !eventData.type_evenement.populaire
      ) {
        if (!confirmed) {
          setShowMyModal(true);
        } else {
          // Si l'utilisateur a déjà confirmé, passer directement à l'étape suivante
          nextPage();
        }
      } else {
        nextPage();
      }
    }
  };

  const handleContinue = () => {
    // Mettre à jour l'état pour indiquer que l'utilisateur a confirmé
    setConfirmed(true);
    // Fermer le modal
    setShowMyModal(false);
    // Passer à l'étape suivante
    nextPage();
  };

  return (
    <div className="nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
      <div className="space-y-11">
        <div>
          <span className="text-4xl font-semibold">2</span>
          <span className="text-lg text-neutral-500 dark:text-neutral-400">
            / 3
          </span>
        </div>
        <div className="listingSection__wrap">
          <h2 className="text-2xl font-semibold">
            INFORMATIONS EVENEMENTIELLES
          </h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
          <div className="space-y-8">
            <div className="">
              <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                Titre <span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  onChange={handleEventDataChange}
                  type="text"
                  name="titre"
                  value={eventData.titre}
                  className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                  placeholder="(ex): Happy run"
                />
                {errors.titre && (
                  <small className="text-red-600 mt-2">{errors.titre}</small>
                )}
                {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.titre && (
                        <small className="text-red-600 mt-2">{inputErrorList.eventData.titre[0]}</small>
                      )} */}
              </div>
            </div>

            <div className="">
              <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                Acteur principal <span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  onChange={handleEventDataChange}
                  name="acteur_principal"
                  type="text"
                  className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                  value={eventData.acteur_principal}
                  placeholder="(ex): Eric Bailly"
                />
                {errors.acteur_principal && (
                  <small className="text-red-600 mt-2">
                    {errors.acteur_principal}
                  </small>
                )}
                {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.acteur_principal && (
                  <small className="text-red-600 mt-2">{inputErrorList.eventData.acteur_principal[0]}</small>
                )} */}
              </div>
            </div>

            <div className="mt-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
                <div className="">
                  <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                    Catégorie <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-1">
                    <select
                      onChange={handleEventDataChange}
                      name="categorie"
                      value={eventData.categorie}
                      className="nc-Select h-11  block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                    >
                      <option defaultChecked>
                        __Choisir une catégorie__
                      </option>
                      {categories.map((category) => (
                        <option value={category.name}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="">
                  <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                    Autre
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={handleEventDataChange}
                      type="text"
                      name="categorie"
                      placeholder="Spécifier la catégorie"
                      className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                    />
                  </div>
                </div>
              </div>
              {errors.categorie && (
                <small className="text-red-600 mt-2">{errors.categorie}</small>
              )}
              {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.categorie && (
                  <small className="text-red-600 mt-2">{inputErrorList.eventData.categorie[0]}</small>
                )} */}
            </div>

            <div className="">
              <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                Période de déroulement
              </label>
              <div className="mt-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
                  <div className="">
                    <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                      Début <span className="text-red-600">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleEventDataChange}
                        min={format(addDays(new Date(), 3), "yyyy-MM-dd", {
                          locale: fr,
                        })}
                        type="date"
                        value={eventData.date_debut}
                        name="date_debut"
                        className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                      />
                      {errors.date_debut && (
                        <small className="text-red-600 mt-2">
                          {errors.date_debut}
                        </small>
                      )}
                      {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.date_debut && (
                        <small className="text-red-600 mt-2">{inputErrorList.eventData.date_debut[0]}</small>
                      )} */}
                    </div>
                  </div>
                  <div className="">
                    <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                      Fin
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleEventDataChange}
                        min={format(addDays(new Date(), 3), "yyyy-MM-dd", {
                          locale: fr,
                        })}
                        type="date"
                        value={eventData.date_fin}
                        name="date_fin"
                        className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                      />
                      {errors.date_fin && (
                        <small className="text-red-600 mt-2">
                          {errors.date_fin}
                        </small>
                      )}
                      {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.date_fin && (
                        <small className="text-red-600 mt-2">{inputErrorList.eventData.date_fin[0]}</small>
                      )} */}
                    </div>
                  </div>
                  <div className="">
                    <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                      Heure de début <span className="text-red-600">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleEventDataChange}
                        type="time"
                        value={eventData.heure_debut}
                        name="heure_debut"
                        className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                      />
                      {errors.heure_debut && (
                        <small className="text-red-600 mt-2">
                          {errors.heure_debut}
                        </small>
                      )}
                      {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.heure_debut && (
                        <small className="text-red-600 mt-2">{inputErrorList.eventData.heure_debut[0]}</small>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
                <div className="">
                  <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                    Lieu de l'evenement <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={handleEventDataChange}
                      type="text"
                      name="lieu"
                      value={eventData.lieu}
                      placeholder="(ex): Palais de la culture"
                      className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                    />
                    {errors.lieu && (
                      <small className="text-red-600 mt-2">{errors.lieu}</small>
                    )}
                    {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.lieu && (
                        <small className="text-red-600 mt-2">{inputErrorList.eventData.lieu[0]}</small>
                      )} */}
                  </div>
                </div>
                <div className="">
                  <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                    Lien GPS du lieu
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={handleEventDataChange}
                      type="text"
                      value={eventData.lien_gps}
                      name="lien_gps"
                      placeholder="Coller un lien Google Map du lieu"
                      className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                    />
                    {errors.lien_gps && (
                      <small className="text-red-600 mt-2">{errors.lien_gps}</small>
                    )}
                    {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.lien_gps && (
                      <small className="text-red-600 mt-2">{inputErrorList.eventData.lien_gps[0]}</small>
                    )} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                Types d'evenement
              </label>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
                <div className="flex text-sm sm:text-base ">
                  <input
                    onChange={handleEventDataChange}
                    checked={eventData.type_evenement.vedette}
                    id="vedette"
                    type="checkbox"
                    className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
                    name="vedette"
                  />
                  <label
                    htmlFor="vedette"
                    className="ml-3.5 flex flex-col flex-1 justify-center"
                  >
                    <span className=" text-neutral-900 dark:text-neutral-100">
                      {"VEDETTE"}
                    </span>
                  </label>
                </div>

                <div className="flex text-sm sm:text-base ">
                  <input
                    onChange={handleEventDataChange}
                    checked={eventData.type_evenement.populaire}
                    id="populaire"
                    type="checkbox"
                    className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
                    name="populaire"
                  />
                  <label
                    htmlFor="populaire"
                    className="ml-3.5 flex flex-col flex-1 justify-center"
                  >
                    <span className=" text-neutral-900 dark:text-neutral-100">
                      {"POPULAIRE"}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                Description de l'evenement{" "}
                <span className="text-red-600">*</span>
              </label>
              <textarea
                name="description"
                onChange={handleEventDataChange}
                className="mt-1 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 "
                value={eventData.description}
                placeholder="Faite une description de l'evenement ici..."
                rows={6}
              />
              {errors.description && (
                <small className="text-red-600 mt-2">
                  {errors.description}
                </small>
              )}
              {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.description && (
                      <small className="text-red-600 mt-2">{inputErrorList.eventData.description[0]}</small>
                    )} */}
            </div>

            {/* <div className="listingSection__wrap"> */}
            <div>
              <h2 className="text-2xl font-semibold text-center mb-3">
                Téléchargement d'Images
              </h2>
              <div
                className="listingSection__wrap bg-primary-50"
                style={{ padding: "14px" }}
              >
                <div>
                  <h4 className="text-lg font-semibold">Restrictions !</h4>
                  <div className="prose sm:prose">
                    <ul
                      className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2"
                      style={{ fontSize: "14px" }}
                    >
                      <li>
                        L'affiche de l'événement doit être au format 'JPEG' ou
                        'PNG'.
                      </li>
                      <li>
                        L'affiche de l'événement ne doit contenir aucune information de contact (numéro de téléphone, e-mail etc...).
                      </li>
                      <li>
                        Pour une bonne visibilité de votre événement veuillez
                        respecter une taille maximum de 2MB.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
            <div className="space-y-8">
              <div>
                <span className="text-lg font-semibold">
                  Affiche de l'Événement <span className="text-red-600">*</span>
                </span>
                <div className="mt-5 ">
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-neutral-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                        <label
                          htmlFor="affiche"
                          className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span>Selectionner</span>
                          <input
                            className="sr-only"
                            onChange={handleEventDataChange}
                            id="affiche"
                            type="file"
                            accept="image/,.jpeg,.jpg,.png,.jpg"
                            name="affiche"
                          />
                        </label>
                        <p className="pl-1">
                          ou glisser et déposer votre image
                        </p>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        PNG, JPG. Taille maximum 2MB
                      </p>
                    </div>
                  </div>
                </div>
                {errors.affiche && (
                  <small className="text-red-600 mt-2">{errors.affiche}</small>
                )}
                {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.affiche && (
                      <small className="text-red-600 mt-2">{inputErrorList.eventData.affiche[0]}</small>
                    )} */}
              </div>
              <div>
                <span className="text-lg font-semibold">Image du Lieu</span>
                <div className="mt-5 ">
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-neutral-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                        <label
                          htmlFor="image_lieu_evenement"
                          className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span>Selectionner</span>
                          <input
                            className="sr-only"
                            onChange={handleEventDataChange}
                            id="image_lieu_evenement"
                            type="file"
                            accept="image/,.jpeg,.png,.jpg,.gif"
                            name="image_lieu_evenement"
                          />
                        </label>
                        <p className="pl-1">
                          ou glisser et déposer votre image
                        </p>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        PNG, JPG. Taille maximum 2MB
                      </p>
                    </div>
                  </div>
                </div>
                {errors.image_lieu_evenement && (
                  <small className="text-red-600 mt-2">
                    {errors.image_lieu_evenement}
                  </small>
                )}
                {/* {inputErrorList && inputErrorList.eventData && inputErrorList.eventData.image_lieu_evenement && (
                      <small className="text-red-600 mt-2">{inputErrorList.eventData.image_lieu_evenement[0]}</small>
                    )} */}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="flex justify-end space-x-5">
          <button
            type="button"
            onClick={prevPage}
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800    "
          >
            Précédent
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className={`nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50`}
          >
            Suivant
          </button>
        </div>
      </div>
      <ModalEventsTypeConfirm
        visible={ShowMyModal}
        onContinue={handleContinue}
      />
    </div>
  );
}

export default Step2Form;
