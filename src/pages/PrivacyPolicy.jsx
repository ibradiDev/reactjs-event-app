import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
    useEffect(() => {
        // Mettre à jour le titre de la page
        document.title = "Politique de confidentialité - Events";
        
      }, []);
    return (
        <div className="nc-PageSingle pt-8 lg:pt-16 mb-5">
            <header className="container rounded-xl">
                <div className="max-w-screen-md mx-auto space-y-5">
                    <h1
                        className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
                        title="Quiet ingenuity: 120,000 lunches and counting"
                    >
                        Politique de Confidentialité de l'Application Mobile "Events"
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
                            <span className="text-neutral-700 dark:text-neutral-300">Dernière mise à jour de cette politique : 17 janvier 2023</span>
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
                
                    Cette Politique de Confidentialité décrit la manière dont <strong>Events</strong> ("nous", "notre" ou "nos") collecte, 
                    utilise et partage les informations que vous nous fournissez lorsque vous utilisez notre application mobile "Events" 
                    . En installant et en utilisant l'Application, vous consentez à la collecte et à l'utilisation de vos informations 
                    conformément à cette Politique de Confidentialité.
                
                </p>
                <h3>Informations Collectées.</h3>
                <p>Nous collectons les types d'informations suivants lorsque vous utilisez l'Application :</p>
                <ul>
                    <li>
                        <strong>Informations Personnelles :</strong> Lors de la création d'un compte, nous pouvons collecter des informations telles que votre nom, adresse e-mail, numéro de téléphone, et d'autres informations nécessaires à la création de votre compte.
                    </li>
                    <li>
                        <strong>Informations sur l'Événement :</strong> Lors de la réservation de billets ou de la participation à un événement, nous pouvons collecter des informations sur l'événement, telles que le lieu, la date, le type de billet, etc.
                    </li>
                    <li>
                        <strong>Données d'Utilisation :</strong> Nous recueillons des informations sur la manière dont vous utilisez l'Application, telles que les pages que vous consultez, les fonctionnalités que vous utilisez, et d'autres données d'utilisation.
                    </li>
                    <li>
                        <strong>Informations de Dispositif :</strong> Nous pouvons collecter des informations sur votre appareil mobile, y compris le modèle de l'appareil, le système d'exploitation, les identifiants uniques de l'appareil, et d'autres données liées au matériel.
                    </li>
                </ul>
                <h3>Utilisation des Informations.</h3>
                <p>Nous utilisons les informations collectées pour les finalités suivantes :</p>
                <ol>
                    <li>Fournir et améliorer les services de l'Application.</li>
                    <li>Gérer et traiter les réservations d'événements et de billets.</li>
                    <li>Communiquer avec vous, notamment pour vous envoyer des informations sur les événements à venir.</li>
                    <li>Personnaliser et améliorer votre expérience utilisateur.</li>
                    <li>Analyser l'utilisation de l'Application pour comprendre les tendances et améliorer nos services.</li>
                </ol>

                <h3>Partage des Informations.</h3>
                <p>Nous ne partageons pas vos informations personnelles avec des tiers autrement dit nous pouvons accepter de divulguer à tout membre de notre équipe les données utilisateurs dont il a raisonnablement besoin pour remplir les objectifs énoncés dans la présente politique ou aux Organisateurs d'Evénements(OE), sauf dans les cas suivants :</p>
                <ol>
                    <li>Avec votre consentement explicite.</li>
                    <li>Pour répondre à une obligation légale.</li>
                    <li>Pour protéger nos droits, votre sécurité ou la sécurité d'autrui.</li>
                    <li>Dans le cadre d'une fusion, acquisition ou vente d'actifs.</li>
                </ol>
                <p>Les tiers ne pourront pas accéder aux données de l'utilisateur au-delà de ce qui est raisonnablement nécessaire pour atteindre l'objectif donné.</p>
                <h3>Sécurité</h3>
                <p>
                    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations contre tout accès non autorisé, divulgation, altération ou destruction.
                </p>
                
                <h3>Vos Choix</h3>
                <p>Vous avez le droit de demander l'accès, la correction ou la suppression de vos informations personnelles. Vous pouvez également choisir de ne pas fournir certaines informations, mais cela peut affecter votre utilisation de certaines fonctionnalités de l'Application.</p>
                
                <h3>Modifications de la Politique de Confidentialité</h3>
                <p>
                    Tout le contenu de l'application, y compris les textes, images, logos, est protégé par des droits d'auteur et ne peut être reproduit sans autorisation.
                </p>

                <h3>Modifications de la Politique de Confidentialité</h3>
                <p>Nous nous réservons le droit de mettre à jour cette Politique de Confidentialité à tout moment. Les modifications prendront effet dès leur publication sur l'Application.</p>

                <h3>Contactez-Nous</h3>
                <p>Si vous avez des questions, préoccupations ou demandes concernant cette Politique de Confidentialité, veuillez nous contacter à <span style={{color: '#0000d9'}}>contact@app-events.com</span> ou accéder à notre page de <Link to="/nous-contacter">contact</Link>.</p>
                </div>
               
            </div>
        </div>
    )
}
