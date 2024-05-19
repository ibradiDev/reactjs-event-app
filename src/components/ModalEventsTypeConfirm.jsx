import React from "react";

export default function ModalComponent({ visible, onContinue }) {
  if (!visible) return null;

  return (
    <div
      className="inset-0 z-10 w-screen overflow-y-auto fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
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
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div
              className="sm:flex sm:items-start"
              style={{ alignItems: "baseline" }}
            >
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  className="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                  style={{margin: "0px auto 2rem auto",}}
                >
                  OUPS !
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Vous n'avez sélectionné aucun type d'événement. Cela
                    pourrait affecter la visibilité de votre événement mais notez que cette option est facultative.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              style={{ width: "fit-content" }}
              type="button"
              className="mr-4 inline-flex w-full justify-center rounded-md px-3 py-2 sm:ml-3 sm:w-auto  nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => {
                onContinue();
              }}
            >
              Continuer l'enregistrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
