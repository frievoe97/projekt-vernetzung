import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonBigRounded from "../elements/ButtonBigRounded";
import NotFoundComponent from "../NotFoundComponent";
import { IoArrowBackOutline } from "react-icons/io5";

function InterviewDetail() {
  const { state, dispatch } = useGlobalState();
  const { organizationName } = useParams();

  let interview = {};

  const fetchAndParseYamlData = (url, dispatch, actionType) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);

        dispatch({
          type: actionType,
          payload: parsedData,
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/interviews_v2.yaml",
      dispatch,
      "SET_INTERVIEW_V_2_DATA"
    );
  }, [dispatch]);

  const convertToSlug = (inputString) => {
    return inputString.replace(/\s+/g, "-").toLowerCase();
  };

  if (state.interviewsV2.interviews == undefined) {
    return;
  }

  for (let i = 0; i < state.interviewsV2.interviews.length; i++) {
    const title = state.interviewsV2.interviews[i].Headline;
    if (convertToSlug(title) === organizationName) {
      interview = state.interviewsV2.interviews[i];
    }
  }

  if (!interview) {
    // Hier kannst du eine Meldung anzeigen, wenn das Interview nicht gefunden wurde.
    // return <p>Interview nicht gefunden.</p>;
    return (
      <NotFoundComponent
        text={"Das Interview existiert nicht."}
        buttonText={"Zurück zu den Interviews"}
        link={"/interviews"}
      />
    );
  }

  console.log("INTERVIEW: ", interview);

  const interviewData = [
    {
      question:
        "Guten Tag, liebe Zuschauerinnen und Zuschauer. Herzlich willkommen zu unserem Experteninterview zum Thema Machtmissbrauch. Heute haben wir die Ehre, Frau Dr. Anna Müller, eine renommierte Psychologin und Expertin für soziale Dynamiken, bei uns zu haben. Willkommen, Frau Dr. Müller.",
      answer: "Guten Tag, vielen Dank für die Einladung.",
    },
    {
      question:
        "Um gleich einzusteigen, könnten Sie uns bitte zunächst einmal erklären, was Machtmissbrauch in sozialen Kontexten bedeutet?",
      answer:
        "Machtmissbrauch in sozialen Kontexten bezieht sich auf die unangemessene Nutzung von Macht oder Autorität durch eine Person oder Gruppe, um andere zu dominieren, zu kontrollieren oder zu schädigen. Es kann in verschiedenen Formen auftreten, sei es am Arbeitsplatz, in Beziehungen, in der Politik oder anderswo.",
    },
    {
      question:
        "Welche Faktoren begünstigen Machtmissbrauch, und warum neigen einige Menschen dazu, ihre Macht auf diese Weise auszuüben?",
      answer:
        "Machtmissbrauch kann durch verschiedene Faktoren begünstigt werden. Ein wichtiger Faktor ist das Fehlen von effektiven Mechanismen zur Überwachung und Regulierung von Machtstrukturen. Menschen neigen dazu, Macht missbräuchlich auszuüben, wenn sie sich unbeobachtet oder ungestraft fühlen. Zudem spielen individuelle Persönlichkeitsmerkmale eine Rolle. Personen mit narzisstischen Tendenzen oder einem geringen Empathievermögen sind möglicherweise anfälliger für Machtmissbrauch.",
    },
    {
      question:
        "Welche Auswirkungen hat Machtmissbrauch auf die Opfer und die Gesellschaft im Allgemeinen?",
      answer:
        "Die Auswirkungen von Machtmissbrauch können verheerend sein. Opfer können physische und psychische Gesundheitsprobleme erleiden, darunter Angst, Depressionen, PTSD und sogar körperliche Verletzungen. Am Arbeitsplatz kann Machtmissbrauch die Produktivität beeinträchtigen und zu einem feindseligen Arbeitsumfeld führen. In der Gesellschaft kann Machtmissbrauch das Vertrauen in Institutionen und Autoritäten untergraben und zu sozialen Konflikten führen.",
    },
    {
      question:
        "Wie können Organisationen und Gesellschaften Machtmissbrauch verhindern oder bekämpfen?",
      answer:
        "Es gibt verschiedene Maßnahmen, die Organisationen und Gesellschaften ergreifen können, um Machtmissbrauch zu verhindern und zu bekämpfen. Dies umfasst die Implementierung klarer Richtlinien und Verfahren zur Meldung von Machtmissbrauchsfällen, die Schulung von Mitarbeitern und Führungskräften im Umgang mit Macht und Konflikten, sowie die Schaffung einer Kultur der Offenheit und des Respekts. Es ist auch wichtig, die Verantwortlichen für Machtmissbrauch zur Rechenschaft zu ziehen und angemessene Sanktionen zu verhängen.",
    },
    {
      question:
        "Abschließend, welchen Rat würden Sie Menschen geben, die Opfer von Machtmissbrauch geworden sind?",
      answer:
        "Für Menschen, die Opfer von Machtmissbrauch geworden sind, ist es entscheidend, Unterstützung zu suchen und sich nicht alleine zu fühlen. Das kann professionelle Hilfe von Therapeuten oder Beratern einschließen. Es ist wichtig, die Situation ernst zu nehmen und sich selbst zu schützen. Gleichzeitig sollten sie sich bewusst sein, dass sie nicht die Schuld an dem Machtmissbrauch tragen und dass es Möglichkeiten gibt, Hilfe und Gerechtigkeit zu finden.",
    },
    {
      question:
        "Vielen Dank, Frau Dr. Müller, für Ihre wertvollen Einblicke und Ratschläge zu diesem wichtigen Thema. Wir hoffen, dass diese Informationen dazu beitragen können, Machtmissbrauch in unseren Gesellschaften besser zu verstehen und zu bekämpfen.",
      answer:
        "Vielen Dank für die Gelegenheit, über dieses wichtige Thema zu sprechen. Ich hoffe, dass wir gemeinsam dazu beitragen können, eine Welt ohne Machtmissbrauch zu schaffen.",
    },
  ];

  // Zugriff auf die Daten
  console.log(interviewData[0].question); // Gibt die erste Frage aus
  console.log(interviewData[0].answer); // Gibt die Antwort zur ersten Frage aus

  return (
    <div>
      <div className="bg-fm_blau w-full pt-16 shadow-2xl">
        <div className="w-full shadow-2xl">
          <div className="max-w-screen-xl mx-auto h-96 relative overflow-hidden">
            <div className="flex items-center ">
              {/* <IoArrowBackOutline className="text-5xl text-fm_weiss mt-7" /> */}
              <h1 className="font-bold mt-8 text-fm_weiss text-left w-4/5 mx-4">
                {interview.Headline}
              </h1>
            </div>
            <img
              src={interview.BildHeadline}
              className="w-96 h-96 rounded-full object-cover absolute right-28 -bottom-16 m-auto shadow-2xl"
              alt="Interview Image"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-fm_weiss pt-8 ">
        <div className="max-w-screen-xl mx-auto p-4 mb-2">
          <div className="font-bold text-2xl">{interview.Interview}</div>
          <div className="text-lg">{interview.Rubrik}</div>
          <div className="">12. Dezember 2023</div>
        </div>
        <div className="max-w-screen-xl p-4 mx-auto text-justify">
          {interviewData.map((qaPair, index) => (
            <div key={index} className="">
              <p className="mb-4">
                <span className="font-bold">Frage:</span> {qaPair.question}
              </p>
              <p className="mb-4">
                <span className="font-bold">Antwort:</span> {qaPair.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden mx-auto">
      {interview.image && (
        <div className="w-full max-h-64 overflow-hidden relative">
          <img
            src={interview.image}
            alt={interview.name}
            className="w-full h-full object-cover object-center contrast-50 min-h-[200px] mix-blend-multiply"
          />
          {/* <div className="absolute left-0  bottom-0 flex items-center justify-center text-color_font w-fit h-fit bg-white rounded  ">
            <h1 className="text-2xl font-bold p-4">{interview.name}</h1>
          </div> */}
        </div>
      )}

      {interview.interview && (
        <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-4 md:my-16">
          <div className="px-4 md:border-2 md:border-black md:rounded-xl md:shadow-xl md:py-8 md:mx-8">
            <button className="text-color_font overflow-hidden transition-border-color hover:border-transparent bg-transparent px-0 md:p-4">
              <Link
                className="text-color_font hover:text-color_font"
                to={`/interviews`}
              >
                <FontAwesomeIcon icon={faAngleLeft} className="mr-4" />
                Zurück
              </Link>
            </button>
            <div className="bg-transparent  rounded-lg md:p-4">
              <h2 className="text-2xl font-bold mb-2">{interview.name}</h2>
              <p className="text-color_font_light text mb-2">
                Datum: {interview.date}
              </p>
              <div className="space-y-8 text-lg">
                {interview.interview.map((item, index) => (
                  <div key={index}>
                    <p className="font-bold mb-4">{item.Frage}</p>
                    <p className="text-justify">{item.Antwort}</p>
                  </div>
                ))}
              </div>
            </div>
            <ButtonBigRounded
              buttonText="Zurück zu allen Interviews"
              link="/interviews"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default InterviewDetail;
