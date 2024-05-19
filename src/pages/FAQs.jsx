import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FAQItem from './FAQItem'; // Importe le composant FAQItem
import FAQItemOrganizer from './FAQItemOrganizer';

export default function FAQs() {

    useEffect(() => {
        // Mettre à jour le titre de la page
        document.title = "FAQ - Events";
        
      }, []);

    const [activeTab, setActiveTab] = useState('user'); // 'user' par défaut, car c'est l'onglet actif par défaut
    const [visibleFAQs, setVisibleFAQs] = useState({
        user: 5, // Nombre initial de questions visibles pour la section utilisateur
        organizer: 5, // Nombre initial de questions visibles pour la section organisateur
    });

    const faqsUser = [
        {
            question: "Comment puis-je créer un compte sur l'application 'Events'?",
            answer:
                "Pour créer un compte, cliquez sur le bouton 'Inscription' et suivez les instructions à l'écran. Vous devrez fournir quelques informations de base, telles que votre nom, votre adresse e-mail, etc...",
        },
        {
            question: "Comment puis-je réserver des billets pour un événement?",
            answer:
                "Une fois connecté à votre compte, parcourez les événements disponibles. Cliquez sur l'événement qui vous intéresse, sélectionnez le type de billet et suivez les étapes pour finaliser la réservation.",
        },
        {
            question: "Comment puis-je annuler ma réservation?",
            answer:
                "Allez dans la section Mes 'Réservations', trouvez l'événement en question, et suivez le processus d'annulation indiqué.",
        },
        {
            question: "Quels types de paiement sont acceptés?",
            answer:
                "Nous acceptons les paiements par carte de crédit/débit. Assurez-vous d'utiliser une méthode de paiement sécurisée.",
        },
        {
            question: "Comment puis-je ajouter un événement à ma liste de favoris?",
            answer:
                "Sur la page de l'événement, recherchez l'option 'Ajouter aux Favoris' et cliquez dessus. Vous pourrez ensuite retrouver l'événement dans votre liste de favoris.",
        },
        {
            question: "Où puis-je trouver mes billets après achat?",
            answer:
                "Vos billets seront disponibles dans la section 'Mes Billets' de l'application. Vous pourrez les afficher, les télécharger ou les partager depuis cette section.",
        },
        {
            question: "Que faire si j'ai oublié mon mot de passe?",
            answer:
                "Sur l'écran de connexion, cliquez sur 'Mot de Passe Oublié' et suivez les instructions pour réinitialiser votre mot de passe.",
        },
        {
            question: "Comment puis-je signaler un problème technique?",
            answer:
                "Utilisez la section 'Support Technique' dans les paramètres de l'application pour signaler tout problème technique. Décrivez le problème aussi précisément que possible.",
        },
        {
            question: "Quels sont les avantages de créer un compte 'Events'?",
            answer:
                "En créant un compte, vous pourrez suivre vos réservations, recevoir des recommandations personnalisées, participer à des promotions exclusives, et plus encore.",
        },
        {
            question: "Comment puis-je promouvoir mon propre événement sur l'application?",
            answer:
                "Dans la section 'Créer un Événement', suivez les étapes pour ajouter les détails de votre événement. Vous pourrez ensuite le promouvoir auprès de notre communauté. <br /><br /> N'hésitez pas à nous contacter via [adresse e-mail de support] si vous avez d'autres questions ou préoccupations qui ne sont pas abordées dans cette FAQ.",
        },
    ];

    const faqsOrganizer = [
        {
            question: "Comment puis-je publier mon événement sur le site officiel d'Events?",
            answer:
                "Pour publier votre événement, connectez-vous à votre compte, accédez à la section 'Créer un Événement' et suivez les étapes fournies. Remplissez les détails de votre événement, y compris la date, l'heure, la description, et ajoutez des images attrayantes.",
        },
        {
            question: "Quels types d'événements puis-je publier sur Events?",
            answer:
                "Events accepte une variété d'événements, tels que des concerts, des conférences, des spectacles, des festivals, et bien plus encore. Assurez-vous de respecter nos directives d'utilisation et les normes de contenu.",
        },
        {
            question: "Combien de temps faut-il pour que mon événement soit approuvé et publié sur l'application de billeterie?",
            answer:
                "Une fois que vous avez soumis votre événement, notre équipe d'administration effectuera une analyse pour garantir la conformité aux politiques d'utilisation. Le processus peut prendre jusqu'à 48 heures. Vous serez notifié par e-mail une fois que votre événement sera approuvé et publié.",
        },
        {
            question: "Quelles informations dois-je fournir lors de la création de mon événement?",
            answer:
                "Assurez-vous de fournir des informations complètes, y compris le nom de l'événement, la catégorie, la date, l'heure, le lieu, une description détaillée, et des images de qualité. Plus vos informations sont détaillées, plus votre événement est susceptible d'attirer des participants.",
        },
        {
            question: "Y a-t-il des frais pour publier mon événement sur Events?",
            answer:
                "La publication d'événements sur le site officiel d'Events est gratuite. Cependant, des frais peuvent s'appliquer lors de la vente de billets. Consultez nos tarifs et politiques pour plus d'informations.",
        },
        {
            question: "Puis-je modifier les détails de mon événement après l'avoir publié?",
            answer:
                "Oui, vous pouvez mettre à jour les détails de votre événement à tout moment avant la date de l'événement. Connectez-vous à votre compte, accédez à la section 'Mes Événements' et apportez les modifications nécessaires.",
        },
        {
            question: "Que faire si mon événement n'est pas approuvé?",
            answer:
                "Si votre événement n'est pas approuvé, vérifiez qu'il respecte nos directives d'utilisation. Si des modifications sont nécessaires, vous recevrez des instructions spécifiques dans l'e-mail de notification. En cas de problème, contactez notre équipe de support.",
        },
        {
            question: "Puis-je offrir des promotions spéciales ou des codes de réduction pour mon événement?",
            answer:
                "Oui, lors de la création de votre événement, vous avez la possibilité d'ajouter des codes de réduction ou des promotions spéciales pour attirer davantage de participants. Suivez les instructions fournies lors de la création de l'événement.",
        },
        {
            question: "Comment puis-je contacter le support en cas de problème?",
            answer:
                "Si vous rencontrez des problèmes techniques ou si vous avez des questions spécifiques, utilisez la section 'Support Technique' dans les paramètres de l'application. Décrivez le problème aussi précisément que possible, et notre équipe vous assistera.",
        },
        {
            question: "Quels sont les avantages de promouvoir mon événement sur Events?",
            answer:
                "En promouvant votre événement sur Events, vous atteindrez une audience plus large d'amateurs d'événements. Vous pourrez également profiter de fonctionnalités de promotion spéciales pour maximiser la visibilité de votre événement.",
        },
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderFAQs = () => {
        const faqsToRender = activeTab === 'user' ? faqsUser : faqsOrganizer;
        return faqsToRender.slice(0, visibleFAQs[activeTab]).map((faq, index) => (
            activeTab === 'user' ? (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ) : (
                <FAQItemOrganizer key={index} question={faq.question} answer={faq.answer} />
            )
        ));
    };

    const handleShowMore = () => {
        setVisibleFAQs((prevVisibleFAQs) => ({
            ...prevVisibleFAQs,
            [activeTab]: prevVisibleFAQs[activeTab] + 5,
        }));
    };

    return (
        <div className="nc-PageSingle pt-8 lg:pt-16 mb-5">
            <header className="container rounded-xl">
                <div className="max-w-screen-md mx-auto space-y-5 mb-10">
                    <h1
                        className="text-center text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
                    >
                        Foire Aux Questions (FAQ) - Application Mobile "Events"
                    </h1>

                    <p>
                        Si vous participez ou utilisez notre application de billeterie gratuite et avez des questions, 
                        le plus simple reste de contacter à l'adresse <b>contact@app-events.com</b> 
                        ou accéder à notre page de <Link to="/nous-contacter" style={{color: '#0000d9'}}>contact</Link>.  <br />
                        Sinon, la réponse à votre question se trouve certainement dans les sections ci-dessous.
                    </p>
                    
                </div>
                <div
                    className="flex p-1 space-x-1 bg-primary-900/10 rounded-xl mt-5 max-w-screen-md mx-auto mb-5"
                    role="tablist"
                    aria-orientation="horizontal"
                    style={{maxWidth: "578px"}}
                    >
                    <button
                        className={`w-full py-2.5 text-sm leading-5 font-medium ${activeTab === 'user' ? 'text-primary-700 dark:text-primary-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white dark:bg-neutral-800 shadow' : 'text-primary-700 dark:text-primary-400 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60  hover:bg-white/[0.15] dark:hover:bg-neutral-800'}`}
                        id="headlessui-tabs-tab-:r8i:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabIndex={1}
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:r8k:"
                        style={{fontSize: "18px"}}
                        onClick={() => handleTabChange('user')}
                    >
                        Aide aux utilisateurs
                    </button>
                    <button
                        className={`w-full py-2.5 text-sm leading-5 font-medium ${activeTab === 'organizer' ? 'text-primary-700 dark:text-primary-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white dark:bg-neutral-800 shadow' : 'text-primary-700 dark:text-primary-400 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60  hover:bg-white/[0.15] dark:hover:bg-neutral-800'}`}
                        id="headlessui-tabs-tab-:r8j:"
                        role="tab"
                        type="button"
                        aria-selected="true"
                        tabIndex={0}
                        data-headlessui-state="selected"
                        aria-controls="headlessui-tabs-panel-:r8l:"
                        style={{fontSize: "18px"}}
                        onClick={() => handleTabChange('organizer')}
                    >
                        Aide aux organisateurs
                    </button>
                </div>
            </header>

            <div className="lg:p-10 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6 container rounded-3xl">
                
                {renderFAQs()}

                <div className="flex mt-4 justify-center items-center">
                    <button
                        disabled={visibleFAQs[activeTab] >= (activeTab === 'user' ? faqsUser.length : faqsOrganizer.length)}
                        onClick={handleShowMore}
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50"
                    >
                        {visibleFAQs[activeTab] >= (activeTab === 'user' ? faqsUser.length : faqsOrganizer.length) ? (
                        `Toutes les questions sont affichées`
                        ) : (
                        <>
                            <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            >
                            <circle
                                className="opacity-25"
                                cx={12}
                                cy={12}
                                r={10}
                                stroke="currentColor"
                                strokeWidth={3}
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                            </svg>
                            Voir plus
                        </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
