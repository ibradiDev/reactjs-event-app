import React from "react";
import EventDetails from "./EventDetails";

function Step4Form({
  images,
  prevPage,
  formData,
  ticketsData,
  eventData,
  personalData,
}) {
  return (
    <div className="ListingDetailPage">
      {/* <div>
          <span className="text-4xl font-semibold">4</span>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400">
            / 4
          </span>
        </div> */}
      <div className="space-y-11">
        <EventDetails
          images={images}
          formData={formData}
          personalData={personalData}
          eventData={eventData}
          ticketsData={ticketsData}
        />

        <div
          className="flex justify-end space-x-5"
          style={{
            marginBottom: "2rem",
            marginTop: "4rem",
            marginRight: "3rem",
          }}
        >
          <button
            type="button"
            onClick={prevPage}
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800    "
          >
            Retour
          </button>
          <button
            type="submit"
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50   "
          >
            Enregistrer la demande
          </button>
        </div>
      </div>
    </div>
  );
}
export default Step4Form;
