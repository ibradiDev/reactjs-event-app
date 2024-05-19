import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

function Step1Form(props, inputErrorList) {

  const { nextPage, handlePersonalDataChange, personalData } = props;
  const [errors, setErrors] = useState({});

  const validateForm = async () => {
    const newErrors = {};

    // Validation du champ nom_complet
    const trimmedNomComplet = personalData.nom_complet.trim();
    if (!trimmedNomComplet) {
      newErrors.nom_complet = "Le nom et prénom sont requis";
    } else if (!validator.isLength(trimmedNomComplet, { min: 3 })) {
      newErrors.nom_complet =
        "Le nom et prénom doivent contenir au moins 3 caractères";
    } else if (!/^[a-zA-Z\sÀ-ÿ'-]+$/.test(trimmedNomComplet)) {
      newErrors.nom_complet =
        "Le nom et prénom ne doivent contenir que des lettres";
    }

    // Validation du champ email
    const trimmedEmail = personalData.email.trim();
    if (!validator.isEmail(trimmedEmail)) {
      newErrors.email = "L'adresse e-mail n'est pas valide";
    } else if (!trimmedEmail) {
      newErrors.email = "L'e-mail est requis";
    }

    // Validation du champ numero
    const trimmedNumero = personalData.numero.trim();
    if (!trimmedNumero) {
      newErrors.numero = "Le numéro de téléphone est requis";
    } else {
      const mobileRegex = /^(05|07|01)\d{8}$/; // Numéros de téléphone mobile commençant par '05', '07', ou '06'
      const fixeRegex = /^(21|25|27)\d{8}$/; // Numéros de téléphone fixe commençant par '21', '25', ou '27'

      if (!mobileRegex.test(trimmedNumero) && !fixeRegex.test(trimmedNumero)) {
        newErrors.numero = "Le numéro de téléphone n'est pas valide";
      }
    }

    // Validation du champ adresse_residence
    const trimmedAdresseResidence = personalData.adresse_residence.trim();
    if (!trimmedAdresseResidence) {
      newErrors.adresse_residence = "Veuillez saisir un lieu de résidence";
    } else if (!validator.isLength(trimmedAdresseResidence, { min: 5 })) {
      newErrors.adresse_residence =
        "L'adresse de résidence doit contenir au moins 5 caractères";
    }

    setErrors(newErrors);

    // Si des erreurs sont présentes, le formulaire n'est pas valide
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    // Valider le formulaire avant de passer à l'étape suivante
    if (await validateForm()) {
      nextPage();
    }
  };

  return (
    <div className="nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
      <div className="space-y-11">
        <div>
          <span className="text-4xl font-semibold">1</span>
          <span className="text-lg text-neutral-500 dark:text-neutral-400">
            / 3
          </span>
        </div>
        <div className="listingSection__wrap bg-primary-50">
          <div>
            <h4 className="text-lg font-semibold">A votre attention !</h4>
            <div className="prose sm:prose">
              <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
                <li>
                  Veuillez à remplir vos informations personnelles correctement
                  pour une bonne prise en charge de votre demande.
                </li>
                <li>
                  Assurez-vous de fournir une adresse à laquelle vous avez un
                  accès régulier, car elle sera utilisée pour les communications
                  importantes et les notifications liées à votre événement. Nous
                  respectons la confidentialité de vos informations et ne les
                  partagerons pas sans votre consentement.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="listingSection__wrap ">
          <h2 className="text-2xl font-semibold">
            INFORMATIONS PERSONNELLES
          </h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
          <div className="space-y-8">
            <div className="">
              <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                Nom et Prénom <span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  onChange={handlePersonalDataChange}
                  required
                  name="nom_complet"
                  type="text"
                  value={personalData.nom_complet}
                  className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                  placeholder="(ex): John Doe"
                />
                {errors.nom_complet && (
                  <small className="text-red-600 mt-2">
                    {errors.nom_complet}
                  </small>
                )}
                {/* {inputErrorList && inputErrorList.personalData && inputErrorList.personalData.nom_complet && (
                        <small className="text-red-600 mt-2">{inputErrorList.personalData.nom_complet[0]}</small>
                      )} */}
              </div>
            </div>
            <div className="">
              <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                Email <span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  onChange={handlePersonalDataChange}
                  required
                  name="email"
                  value={personalData.email}
                  type="email"
                  className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                  placeholder="(ex): john.doe@exemple.com"
                />
                {errors.email && (
                  <small className="text-red-600 mt-2">{errors.email}</small>
                )}
                {/* {inputErrorList && inputErrorList.personalData && inputErrorList.personalData.email && (
                        <small className="text-red-600 mt-2">{inputErrorList.personalData.email[0]}</small>
                      )} */}
              </div>
            </div>
            <div className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full">
              <div className="w-28">
                <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                  Code Pays
                </label>
                <div className="mt-1">
                  <input
                    className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                    type="text"
                    value={"00225 (CI)"}
                    readOnly
                  />
                </div>
              </div>
              <div className="w-5/6">
                <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                  Téléphone <span className="text-red-600">*</span>
                </label>
                <div className="mt-1">
                  <input
                    required
                    onChange={handlePersonalDataChange}
                    type="tel"
                    maxLength={10}
                    name="numero"
                    value={personalData.numero}
                    className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                    placeholder="(ex): 0102232323"
                  />
                  {errors.numero && (
                    <small className="text-red-600 mt-2">{errors.numero}</small>
                  )}
                  {/* {inputErrorList && inputErrorList.personalData && inputErrorList.personalData.numero && (
                        <small className="text-red-600 mt-2">{inputErrorList.personalData.numero[0]}</small>
                      )} */}
                </div>
              </div>
            </div>
            <div className="">
              <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                Adresse résidence <span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  required
                  onChange={handlePersonalDataChange}
                  value={personalData.adresse_residence}
                  name="adresse_residence"
                  type="text"
                  className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                  placeholder="(ex): Cocody-Blokosso"
                />
                {errors.adresse_residence && (
                  <small className="text-red-600 mt-2">
                    {errors.adresse_residence}
                  </small>
                )}
                {/* {inputErrorList && inputErrorList.personalData && inputErrorList.personalData.adresse_residence && (
                        <small className="text-red-600 mt-2">{inputErrorList.personalData.adresse_residence[0]}</small>
                      )} */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-5">
          <Link
            to={"/"}
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800    "
          >
            Annuler
          </Link>
          <button
            type="button"
            onClick={handleSubmit}
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1Form;
