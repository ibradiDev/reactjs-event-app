import React, { useEffect, useState } from "react";
import Step1Form from "../components/Step1Form";
import Step2Form from "../components/Step2Form";
import Step3Form from "../components/Step3Form";
import Step4Form from "../components/Step4Form";
import axios from "axios";
import SpinnerLoadContent from "../components/SpinnerLoadContent";
import { useNavigate } from "react-router-dom";

function WizardForm() {

  useEffect(() => {
    document.title = "Formulaire de demande de publication - Events";
  }, []);

  const [currentPage, setPage] = useState(1);
  const nextPage = () => {
    setPage((prev) => ++prev);
    scrollToTop();
  };
  const prevPage = () => {
    setPage((prev) => --prev);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [formData, setFormData] = useState({});
  const [tickets, setTickets] = useState([0]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState();

  const [personalData, setPersonalData] = useState({
    nom_complet: "",
    email: "",
    numero: "",
    adresse_residence: "",
  });

  const [ticketsData, setTicketsData] = useState([
    {
      nom: String.prototype,
      prix_unitaire: Number.prototype,
      quantite: Number.prototype,
    },
  ]);

  const [eventData, setEventData] = useState({
    titre: "",
    acteur_principal: "",
    categorie: "",
    date_debut: null,
    date_fin: null,
    heure_debut: null,
    lieu: "",
    lien_gps: "",
    type_evenement: {
      populaire: false,
      vedette: false,
    },
    affiche: undefined,
    image_lieu_evenement: undefined,
    description: "",
  });

  const [images, setImages] = useState({
    affiche: null,
    image_lieu_evenement: null,
  });

  const handlePersonalDataChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
    setFormData((prevData) => ({ ...prevData, personal: personalData }));
  };

  const handleTicketsDataChange = (e, index) => {
    e.preventDefault();
    setTicketsData((prevData) => {
      const updatedTicketsData = [...prevData];
      updatedTicketsData[index] = {
        ...updatedTicketsData[index],
        [e.target.name]: e.target.value,
      };
      return updatedTicketsData;
    });

    // setFormData((prevData) => ({ ...prevData, tickets: ticketsData }));
  };

  const handleEventDataChange = (e) => {
    // e.preventDefault();
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setEventData((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          type_evenement: {
            ...prevData.type_evenement,
            [name]: inputValue,
          },
        };
      }
      return {
        ...prevData,
        [name]: inputValue,
      };
    });

    if (type === "file") setImages({ ...images, [name]: e.target?.files[0] });

    // setFormData((prevData) => ({ ...prevData, event: eventData }));
  };

  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    setFormData({
      ticketsData,
      personalData,
      eventData,
      affiche: images.affiche,
      image_lieu_evenement: images.image_lieu_evenement,
    });
  }, [
    eventData,
    ticketsData,
    personalData,
    images.affiche,
    images.image_lieu_evenement,
  ]);

  const handleSubmit = async () => {
    setLoading(true);
    setFormStatus("Envoi du formulaire en cours...");

    setFormData({
      ticketsData,
      personalData,
      eventData,
      affiche: images.affiche,
      image_lieu_evenement: images.image_lieu_evenement,
    });

    // console.log("formData: ", formData);

    const apiURL = "https://backoffice.app-events.com/api/request/events/store";
    try {
      await axios.post(apiURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          // Mise à jour du statut selon la réponse du serveur
          // alert(response.data.messages);
          // console.log("response:", response);
          setFormStatus(response.data.messages);

          const token = response.data.regToken;
          const eventDetails = response.data.eventDetails;

          // Passer les détails de l'événement à la page de redirection
          navigate(`/Congratulate/sender/${token}/71190cff-131a-69fce9a4f1b6`, {
            state: { eventDetails },
          });

          setLoading(false);
          // Effacer l'état après un délai ou d'une autre manière selon vos besoins
          setTimeout(() => setFormStatus(""), 500);
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              // Mise à jour du statut en cas d'erreur de validation
              // setFormStatus('Erreur de validation du formulaire');
              setValidationError(
                "Erreur ! Veuillez vérifier vos informations puis réessayer s'il vous plait !"
              );
              // console.log(error.response.data.errors);
              setLoading(false);
              // Effacer l'état après un délai ou d'une autre manière selon vos besoins
              setTimeout(() => setFormStatus(""), 500);
            }
            if (error.response.status === 500) {
              // Mise à jour du statut en cas d'erreur serveur
              setValidationError(error.response.data.errors);
              // alert(error.response.data);
              setLoading(false);
              // Effacer l'état après un délai ou d'une autre manière selon vos besoins
              setTimeout(() => setFormStatus(""), 500);
            }
          }
          setLoading(false);
        });
    } catch (err) {
      setValidationError(
        "Erreur de traitement ! Veuillez réessayer s'il vous plait !"
      );
      setLoading(false);
    }
  };

  // Faire un render du formulaire selon la page
  const renderStep = () => {
    switch (currentPage) {
      case 1:
        return (
          <Step1Form
            personalData={personalData}
            handlePersonalDataChange={handlePersonalDataChange}
            nextPage={nextPage}
          />
        );
      case 2:
        return (
          <Step2Form
            eventData={eventData}
            handleEventDataChange={handleEventDataChange}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
      case 3:
        return (
          <Step3Form
            ticketsData={ticketsData}
            setTicketsData={setTicketsData}
            formData={formData}
            setFormData={setFormData}
            setTickets={setTickets}
            tickets={tickets}
            handleTicketsDataChange={handleTicketsDataChange}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
      case 4:
        return (
          <Step4Form
            images={images}
            personalData={personalData}
            eventData={eventData}
            ticketsData={ticketsData}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
      default:
        return null;
    }
  };
  if (loading) {
    return <SpinnerLoadContent status={formStatus} />;
  }

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {validationError && (
          <div
            className="flex"
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="text-neutral-6000 dark:text-neutral-300 alertText mx-2">
              {validationError}
            </span>
          </div>
        )}

        {renderStep()}
      </form>
    </>
  );
}

export default WizardForm;
