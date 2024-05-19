import React, { useState } from "react";

export default function AddTicketComponent({
  visible,
  onClose,
  onConfirm,
  ticketsData,
  setTicketsData,
}) {
  const [newTicket, setNewTicket] = useState({});
  const [errors, setErrors] = useState({});
  if (!visible) return null;
  const index = ticketsData.length;

  const handleInputValueChange = (e) => {
    e.preventDefault();
    setNewTicket({ ...newTicket, [e.target.name]: e.target.value });
  };

  const validateForm = async () => {
    const newErrors = {};
    // Validation pour chaque billet
    if (!newTicket.nom /* .trim() */) {
      newErrors[`nom${index}`] = "Ce champ est requis";
    }

    const prixTicket = parseInt(newTicket.prix_unitaire, 10);
    if (!newTicket.prix_unitaire /* .trim() */) {
      newErrors[`prix_unitaire${index}`] = "Ce champ est requis";
    } else if (!/^\d+$/.test(newTicket.prix_unitaire)) {
      newErrors[`prix_unitaire${index}`] = "Veuillez entrer un prix valide.";
    } else if (prixTicket <= 0) {
      newErrors[`prix_unitaire${index}`] = "Veuillez entrer un prix valide.";
    }

    const quantiteNum = parseInt(newTicket.quantite, 10);
    if (!newTicket.quantite /* .trim() */) {
      newErrors[`quantite${index}`] = "Ce champ est requis";
    } else if (!/^\d+$/.test(newTicket.quantite)) {
      newErrors[`quantite${index}`] = "Veuillez entrer une quantité valide.";
    } else if (quantiteNum < 15) {
      newErrors[`quantite${index}`] = "La quantité doit être d'au moins 15.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleAddNewTicket = async (e) => {
    e.preventDefault();
    if (await validateForm()) {
      setTicketsData((prevData) => {
        const updatedTicketsData = [...prevData];
        updatedTicketsData.push(newTicket);

        return updatedTicketsData;
      });
      setNewTicket({});
      onConfirm();
    }
  };

  return (
    <div
      className="z-10 w-screen overflow-y-auto fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      style={{
        zIndex: 100,
        top: 0,
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        outline: 0,
        left: 0,
        margin: 0,
      }}
    >
      <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0 sm:prose">
        <form id="form">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div
                className="sm:flex sm:items-start"
                style={{ alignItems: "baseline" }}
              >
                <div className="mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                    style={{margin: "0px auto 2rem auto",}}
                  >
                    Ajouter un ticket <br />
                    <small>Veuillez saisir des données correctes.</small>
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 mb-3">
                      <div className="text-left">
                        <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                          Type de ticket
                        </label>
                        <div className="mt-1">
                          <input
                            onChange={handleInputValueChange}
                            name={`nom`}
                            type="text"
                            required
                            placeholder={"(ex: VIP)"}
                            className="block w-full uppercase border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                          />
                        </div>
                        {errors[`nom${index}`] && (
                          <small className="text-red-600 mt-2">
                            {errors[`nom${index}`]}
                          </small>
                        )}
                      </div>
                      <div className="text-left">
                        <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                          Prix unitaire
                        </label>
                        <div className="mt-1 relative">
                          <input
                            onChange={handleInputValueChange}
                            name={`prix_unitaire`}
                            placeholder={"(ex: 10 000)"}
                            type="number"
                            required
                            className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <small className="text-gray-500">XOF</small>
                          </div>
                        </div>{" "}
                        {errors[`prix_unitaire${index}`] && (
                          <small className="text-red-600 mt-2">
                            {errors[`prix_unitaire${index}`]}
                          </small>
                        )}
                      </div>
                      <div className="text-left">
                        <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                          Quantité
                        </label>
                        <div className="mt-1 relative">
                          <input
                            onChange={handleInputValueChange}
                            name={`quantite`}
                            type="number"
                            required
                            placeholder={"(min: 15)"}
                            className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <small className="text-gray-500">tickets</small>
                          </div>
                        </div>{" "}
                        {errors[`quantite${index}`] && (
                          <small className="text-red-600 mt-2">
                            {errors[`quantite${index}`]}
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                style={{ width: "fit-content" }}
                type="button"
                className="mr-4 w-full px-3 py-2 sm:ml-3 sm:w-auto  nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium sm:px-6  ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={onClose}
              >
                Annuler
              </button>
              <button
                style={{ width: "fit-content" }}
                type="button"
                className="mt-4 w-full px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50"
                onClick={handleAddNewTicket}
              >
                Ajouter le ticket
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
