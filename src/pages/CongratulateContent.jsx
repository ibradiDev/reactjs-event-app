import { React, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function CongratulateContent() {
    const location = useLocation();
    const eventDetails = location.state?.eventDetails;

    useEffect(() => {
        // Mettre à jour le titre de la page
        document.title = "Congratulate for submited - Events";
        
      }, []);

    return (
        <div className="nc-PayPage">
            <main className="container mt-11 mb-24 lg:mb-32 ">
                <div className="max-w-4xl mx-auto">
                    {eventDetails && (
                        <div className="w-full flex flex-col sm:rounded-2xl space-y-10 px-0 sm:p-6 xl:p-8">
                            <div>
                                <h2 className="text-3xl font-semibold">Succès de la demande 🎉</h2>
                                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                                    Félicitation !! Votre événement a bien été enregistrée avec succès. Vous êtes prié de patienter le temps que votre demande soit traité et vous recevrez un e-mail de confirmation de notre part. <br /><br />
                                    MERCI DE VOTRE PARTAGE. 
                                </span>
                            </div>
                            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
                            
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold">Récapitulatif de la demande</h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <div className="pt-5  sm:pb-5 sm:px-5 space-y-3">
                                        <div>
                                            <div className="flex flex-col md:flex-row ">
                                                <div className="flex my-5 md:my-0" style={{width: "100%",}}>
                                                    <div className="flex-shrink-0 flex flex-col items-center py-2">
                                                        {eventDetails.validate_post === 1 ? (
                                                            <span className="block w-6 h-6 rounded-full border border-neutral-400 las la-check text-2xl" />
                                                        ) : (
                                                            <span className="block w-6 h-6 rounded-full border border-neutral-400" />
                                                        )}
                                                        <span className="block flex-grow border-l border-neutral-400 border-dashed my-1" />
                                                        {eventDetails.org_save === 1 ? (
                                                            <span className="block w-6 h-6 rounded-full border border-neutral-400 las la-check text-2xl" />
                                                        ) : (
                                                            <span className="block w-6 h-6 rounded-full border border-neutral-400" />
                                                        )}
                                                        <span className="block flex-grow border-l border-neutral-400 border-dashed my-1" />
                                                        {eventDetails.create_save === 1 ? (
                                                            <span className="block w-6 h-6 rounded-full border border-neutral-400 las la-check text-2xl" />
                                                        ) : (
                                                            <span className="block w-6 h-6 rounded-full border border-neutral-400" />
                                                        )}
                                                        <span className="block flex-grow border-l border-neutral-400 border-dashed my-1" />
                                                        {eventDetails.send_mail === 1 ? (
                                                            <span className="block w-6 h-6 rounded-full border border-neutral-400  las la-check text-2xl" />
                                                        ) : (
                                                            <span className="block w-6 h-6 rounded-full border border-neutral-400" />
                                                        )}
                                                    </div>
                                                    <div className="ml-4 space-y-10 text-sm">
                                                        <div className="flex flex-col space-y-1">
                                                            
                                                            <span className=" text-neutral-500 dark:text-neutral-400" style={{color: "#0d6fc6"}}>
                                                                {eventDetails.validate_post === 1 ? "Succès" : (eventDetails.validate_post === 0 ? "En attente" : "Inconnu")}
                                                            </span>
                                                            <span className=" font-semibold">
                                                                Validation de la demande & publication
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <span className=" text-neutral-500 dark:text-neutral-400" style={{color: "#0d6fc6"}}>
                                                                {eventDetails.org_save === 1 ? "Succès" : (eventDetails.org_save === 0 ? "En attente" : "Inconnu")}
                                                            </span>
                                                            <span className=" font-semibold">
                                                                Enregistrement de l'organisateur
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <span className=" text-neutral-500 dark:text-neutral-400" style={{color: "#0d6fc6"}}>
                                                                {eventDetails.create_save === 1 ? "Succès" : (eventDetails.create_save === 0 ? "En attente" : "Inconnu")}
                                                            </span>
                                                            <span className=" font-semibold">
                                                                Création de l'événement
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <span className=" text-neutral-500 dark:text-neutral-400" style={{color: "#0d6fc6"}}>
                                                                {eventDetails.send_mail === 1 ? "Succès" : (eventDetails.send_mail === 0 ? "En attente" : "Inconnu")}
                                                            </span>
                                                            <span className=" font-semibold">
                                                                Envoie du mail
                                                            </span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="border-l border-neutral-200 dark:border-neutral-700 md:mx-6 lg:mx-10" />
                                                <ul className="text-sm text-neutral-500 dark:text-neutral-400 space-y-1 md:space-y-2" style={{width: "100%",}}>
                                                    <li>Temps maximum: 24 heures</li>
                                                    <li>Votre demande est en cours de validation. Vous recevrez un e-mail de confirmation.</li>
                                                </ul>
                                            </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-5">
                                    <Link
                                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800    "
                                        to="/"
                                    >
                                        Accueil
                                    </Link>
                                </div>

                        </div>
                    )}
                </div>
            </main>
        </div>

    )
}
