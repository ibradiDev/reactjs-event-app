import React, { useEffect } from 'react'

export default function CGU() {
    useEffect(() => {
        // Mettre à jour le titre de la page
        document.title = "Conditions Générales d'Utilisation - Events";
        
      }, []);
    return (
        <div className="nc-PageSingle pt-8 lg:pt-16 mb-5">
            <header className="container rounded-xl">
                <div className="max-w-screen-md mx-auto space-y-5">
                    <a
                        className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-purple-800 bg-purple-100 hover:bg-purple-800"
                        
                    >
                        Events rédactions
                    </a>
                    <h1
                        className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
                        title="Quiet ingenuity: 120,000 lunches and counting"
                    >
                        Conditions Générales d'Utilisation de l'Application Mobile "Events"
                    </h1>
                
                
                    <div className="flex flex-col items-baseline sm:flex-row sm:justify-between" style={{marginTop: "2rem"}}>
                        <div className="nc-PostMeta2 mb-5 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
                            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-8 h-8 sm:h-11 sm:w-11  flex-shrink-0">
                                <img
                                alt="John Doe"
                                loading="lazy"
                                width={256}
                                height={256}
                                decoding="async"
                                data-nimg={1}
                                className="absolute inset-0 w-full h-full object-cover rounded-full"
                                style={{ color: "transparent" }}
                                srcSet="../../assets/images/logo.png"
                                src="../../assets/images/logo.png"
                                />
                                <span className="wil-avatar__name">E</span>
                            </div>
                            <div className="ml-3">
                                <div className="flex items-center">
                                <a className="block font-semibold">
                                    Equipe Events
                                </a>
                                </div>
                                <div className="text-xs mt-[6px]">
                                <span className="text-neutral-700 dark:text-neutral-300">
                                    Décembre 2023
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <nav
                                className="nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 "
                                data-nc-id="SocialsList"
                            >
                                <a
                                className="block"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Facebook"
                                >
                                <i className="lab la-facebook-square" />
                                </a>
                                <a
                                className="block"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Twitter"
                                >
                                <i className="lab la-twitter" />
                                </a>
                                <a
                                className="block"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Youtube"
                                >
                                <i className="lab la-youtube" />
                                </a>
                                <a
                                className="block"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Instagram"
                                >
                                <i className="lab la-instagram" />
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="w-full border-b border-neutral-100 dark:border-neutral-800 mb-5" />
                </div>
            </header>
            <div className="nc-SingleContent container space-y-10 mt-5">
                <div
                id="single-entry-content"
                className="prose dark:prose-invert prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
                >
                <p>
                
                Bienvenue sur l'application mobile <strong>"Events"</strong>, une plateforme de billetterie en ligne. 
                Veuillez lire attentivement ces Conditions Générales d'Utilisation avant d'utiliser notre application. 
                En accédant ou en utilisant l'application, vous acceptez d'être lié par ces conditions.
                
                </p>
                <h3>Inscription de Compte.</h3>
                <ul>
                    <li>
                        <strong>Création de Compte :</strong> L'inscription d'un compte "Events" est nécessaire pour accéder à certaines fonctionnalités de l'application.
                    </li>
                    <li>
                        <strong>Exactitude des Informations :</strong> Vous acceptez de fournir des informations exactes, complètes et à jour lors de votre inscription et de maintenir la précision de ces informations tout au long de votre utilisation de l'application.
                    </li>
                </ul>
                <h3>Utilisation de l'Application.</h3>
                <ul>
                    <li>
                        <strong>Âge Légal :</strong> Vous devez avoir l'âge légal pour conclure un contrat afin d'utiliser notre application.</li>
                    <li>
                        <strong>Confidentialité et Compte :</strong> Vous êtes responsable de maintenir la confidentialité de vos informations d'identification et de l'utilisation de votre compte. Toute activité sur votre compte est de votre responsabilité.
                    </li>
                    <li>
                        <strong>Usage Légal :</strong> Vous vous engagez à n'utiliser l'application qu'à des fins légales et conformément à ces conditions.
                    </li>
                </ul>

                <h3>Billetterie et Événements.</h3>
                <ul>
                    <li>
                        <strong>Achat de Billets :</strong> "Events" permet aux utilisateurs d'acheter des billets pour des événements spécifiques.
                    </li>
                    <li>
                        <strong>Modification des Détails d'Événements :</strong> L'équipe de gestion événementielle se réserve le droit de modifier les détails des événements, y compris les dates, heures et lieux.
                    </li>
                    
                </ul>
                <h3>Paiement et Sécurité</h3>
                <p>
                    Les paiements effectués à travers l'application sont sécurisés, bien que "Events" ne soit pas responsable des erreurs ou interruptions liées aux services de paiement tiers. <br />
                    Tous les paiements doivent être effectués en totalité avant de recevoir vos billets.
                </p>
                
                <h3>Annulation et Remboursement.</h3>
                <ul>
                    <li>
                        <strong>Politique d'Annulation :</strong> Les annulations d'événements seront traitées conformément à nos politiques d'annulation spécifiques à chaque événement.
                    </li>
                    <li>
                        <strong>Politique de Remboursement :</strong> Les remboursements sont soumis à nos <a href="/#" target="_blank" rel="noopener noreferrer">politiques de remboursement
                    </a> spécifiques à chaque événement.
                    </li>
                    
                </ul>
                <h3> Contenu de l'Application</h3>
                <p>
                    Tout le contenu de l'application, y compris les textes, images, logos, est protégé par des droits d'auteur et ne peut être reproduit sans autorisation.
                </p>

                <h3>Responsabilités de l'Utilisateur.</h3>
                <ul>
                    <li>
                        <strong>Respect des Lois :</strong> Vous vous engagez à utiliser l'application conformément à toutes les lois applicables.
                    </li>
                    <li>
                        <strong>Confidentialité du Mot de Passe :</strong> Vous êtes responsable de la confidentialité de votre mot de passe et de toute activité sur votre compte.
                    </li>
                    
                </ul>

                <h3>Modifications des Conditions.</h3>
                <p>
                    Nous nous réservons le droit de modifier ces Conditions Générales d'Utilisation à tout moment. Les modifications prendront effet dès leur publication sur l'application. Vous êtes encouragé à consulter régulièrement ces conditions.
                </p>

                <h3>Suspension et Résiliation.</h3>
                <p>
                    Nous nous réservons le droit de suspendre ou de résilier votre accès à l'application en cas de violation de ces conditions ou de toute activité jugée préjudiciable à "Events".
                </p>

                <blockquote>
                    <p>
                    Ces conditions sont régies par les lois en vigueur dans votre région.

                    Merci d'utiliser l'application mobile "Events" ! Si vous avez des questions, veuillez nous contacter à <span style={{color: '#0000d9'}}>contact@app-events.com</span>.
                    </p>
                </blockquote>
                </div>
               
            </div>
        </div>

    )
}
