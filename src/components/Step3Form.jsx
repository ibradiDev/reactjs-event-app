import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import AddTicketComponent from "./AddTicketComponent";

function Step3Form(props, inputErrorList) {
  const {
    prevPage,
    nextPage,
    handleTicketsDataChange,
    ticketsData,
    tickets,
    setTicketsData,
    setFormData,
    setTickets,
  } = props;
  const [ShowMyModal, setShowMyModal] = useState(false);
  const [addModal, setShowAddModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  const handleOnAddModalClose = () => setShowAddModal(false);
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRemoveTicket = (index) => {
    let tickets_tb = ticketsData;
    tickets_tb[index] = {};
    // tickets.filter((key) => key !== index);
    let tb = [];
    ticketsData.forEach((ticket, index) => {
      if (ticket.nom && ticket.prix_unitaire && ticket.quantite)
        tb[index] = ticket;
    });

    setTicketsData(tb);
    setFormData((prevData) => ({ ...prevData, tickets: ticketsData }));

    setIsAddButtonDisabled(false);
  };

  const handleAddNewTicket = (e) => {
    e.preventDefault();
    let compteur = 0;

    ticketsData.forEach((ticket, _) => {
      if (ticket && ticket.nom && ticket.prix_unitaire && ticket.quantite)
        compteur++;
    });

    if (compteur >= 4) {
      setIsAddButtonDisabled(true);
    } else {
      // setShowMyModal(true);
      setShowAddModal(true);
    }
  };

  const handleConfirmAddTicket = () => {
    // const newTicket = {};
    // setTicketsData([...tickets, newTicket]);
    // const nextIndex = tickets.length;
    // setTicketsData([...ticketsData, newTicket]);
    setShowMyModal(false);
    setShowAddModal(false);
  };

  const handleCancelAddTicket = () => {
    setShowMyModal(false);
  };

  const handleInputChange = (e, index) => {
    handleTicketsDataChange(e, index);
    // Clear the error associated with the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: undefined,
    }));
  };

  const validateForm = async () => {
    const newErrors = {};
    // Validation pour chaque billet
    ticketsData.forEach((ticket, index) => {
      if (!ticket.nom.trim()) {
        newErrors[`nom${index}`] = "Ce champ est requis";
      }

      const prixTicket = parseInt(ticket.prix_unitaire, 10);
      if (!ticket.prix_unitaire /* .trim() */) {
        newErrors[`prix_unitaire${index}`] = "Ce champ est requis";
      } else if (!/^\d+$/.test(ticket.prix_unitaire)) {
        newErrors[`prix_unitaire${index}`] = "Veuillez entrer un prix valide.";
      } else if (prixTicket <= 0) {
        newErrors[`prix_unitaire${index}`] = "Veuillez entrer un prix valide.";
      }

      const quantiteNum = parseInt(ticket.quantite, 10);
      if (!ticket.quantite /* .trim() */) {
        newErrors[`quantite${index}`] = "Ce champ est requis";
      } else if (!/^\d+$/.test(ticket.quantite)) {
        newErrors[`quantite${index}`] = "Veuillez entrer une quantité valide.";
      } else if (quantiteNum < 15) {
        newErrors[`quantite${index}`] = "La quantité doit être d'au moins 15.";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (await validateForm()) {
      nextPage();
    }
  };

  return (
    <div className="nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
      <div className="space-y-11">
        <div>
          <span className="text-4xl font-semibold">3</span>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400">
            / 3
          </span>
        </div>
        <AddTicketComponent
          visible={addModal}
          onClose={handleOnAddModalClose}
          onConfirm={handleConfirmAddTicket}
          handleTicketsDataChange={handleTicketsDataChange}
          ticketsData={ticketsData}
          setFormData={setFormData}
          setTicketsData={setTicketsData}
        />
        <div className="listingSection__wrap">
          <h2 className="text-2xl font-semibold">
            TICKETS D'ENTREES
          </h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
          {ticketsData.map(
            (ticket, index) =>
              ticket && (
                <div key={index} className="flex items-center justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 mb-3">
                    <div className="">
                      <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                        Type de ticket
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={(e) => handleTicketsDataChange(e, index)}
                          name={`nom`}
                          type="text"
                          required
                          defaultValue={ticketsData[index]?.nom}
                          placeholder={"(ex: VIP)"}
                          className="block w-full uppercase border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                        />
                        {errors[`nom${index}`] && (
                          <small className="text-red-600 mt-2">
                            {errors[`nom${index}`]}
                          </small>
                        )}
                        {/* {inputErrorList.ticketsData && inputErrorList.ticketsData.nom && (
                        <small className="text-red-600 mt-2">{inputErrorList.ticketsData.nom[0]}</small>
                      )} */}
                      </div>
                    </div>
                    <div className="">
                      <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                        Prix unitaire
                      </label>
                      <div className="mt-1 relative">
                        <input
                          onChange={(e) => handleTicketsDataChange(e, index)}
                          name={`prix_unitaire`}
                          placeholder={"(ex: 10 000)"}
                          type="number"
                          required
                          defaultValue={ticketsData[index]?.prix_unitaire}
                          className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <small className="text-gray-500">XOF</small>
                        </div>
                      </div>
                      {errors[`prix_unitaire${index}`] && (
                        <small className="text-red-600 mt-2">
                          {errors[`prix_unitaire${index}`]}
                        </small>
                      )}
                      {/* {inputErrorList.ticketsData && inputErrorList.ticketsData.prix_unitaire && (
                        <small className="text-red-600 mt-2">{inputErrorList.ticketsData.prix_unitaire[0]}</small>
                      )} */}
                    </div>
                    <div className="">
                      <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
                        Quantité
                      </label>
                      <div className="mt-1 relative">
                        <input
                          onChange={(e) => handleTicketsDataChange(e, index)}
                          name={`quantite`}
                          type="number"
                          required
                          defaultValue={ticketsData[index]?.quantite}
                          placeholder={"(min: 15)"}
                          className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <small className="text-gray-500">tickets</small>
                        </div>
                      </div>
                      {errors[`quantite${index}`] && (
                        <small className="text-red-600 mt-2">
                          {errors[`quantite${index}`]}
                        </small>
                      )}
                      {/* {inputErrorList.ticketsData && inputErrorList.ticketsData.quantite && (
                        <small className="text-red-600 mt-2">{inputErrorList.ticketsData.quantite[0]}</small>
                      )} */}
                    </div>
                  </div>
                  {index !== 0 && (
                    <i
                      className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
                      style={{ marginLeft: "8px", marginTop: "5px" }}
                      onClick={() => handleRemoveTicket(index)}
                    />
                  )}
                </div>
              )
          )}

          <div className="flex justify-end">
            <button
              disabled={isAddButtonDisabled}
              onClick={handleAddNewTicket}
              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800    "
            >
              Ajouter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-end space-x-5">
          <button
            type="button"
            onClick={prevPage}
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Précédent
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50   "
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step3Form;
