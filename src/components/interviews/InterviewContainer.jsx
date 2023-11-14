import React from "react";

import ButtonBigRounded from "../elements/ButtonBigRounded";

function InterviewContainer() {
  // Daten für die Interviews
  const interviewData = [
    {
      id: 1,
      imageSrc: "https://picsum.photos/200/300?random=1",
      category: "Machtmissbrauch",
      title: "Interview mit Experten",
      date: "25. November 2023",
      description:
        "Ein Gespräch über die verschiedenen Aspekte von Machtmissbrauch und dessen Auswirkungen.",
    },
    {
      id: 2,
      imageSrc: "https://picsum.photos/200/300?random=2",
      category: "Machtmissbrauch",
      title: "Interview mit Opfern",
      date: "12. Dezember 2023",
      description:
        "Erfahrungen und Geschichten von Menschen, die Opfer von Machtmissbrauch wurden.",
    },
    {
      id: 3,
      imageSrc: "https://picsum.photos/200/300?random=3",
      category: "Machtmissbrauch",
      title: "Bekämpfung von Machtmissbrauch",
      date: "5. Januar 2024",
      description:
        "Strategien und Ansätze zur Prävention und Bekämpfung von Machtmissbrauch in der Gesellschaft.",
    },
    // Weitere Interviews hier hinzufügen, falls benötigt
  ];

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto text-justify p-4 pb-16">
        <div className="flex flex-wrap -mx-2">
          {interviewData.map((interview) => (
            <div key={interview.id} className="w-1/1 md:w-1/2 lg:w-1/3 p-2">
              <div className="p-2 h-full">
                <div className="p-4 h-full bg-fm_weiss shadow-2xl rounded-2xl  hover:scale-105 transition-transform duration-300">
                  <img
                    src={interview.imageSrc}
                    alt={interview.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <h2 className="text-sm mb-1 font-bold mt-4">
                    {interview.category}
                  </h2>
                  <h3 className="text-xl font-semibold text-left mb-1">
                    {interview.title}
                  </h3>
                  <p className="text-sm">{interview.date}</p>
                  <p className="mt-2">{interview.description}</p>
                  <ButtonBigRounded
                    buttonText={"Weiterlesen"}
                    link={"/interviews-und-beitraege"}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterviewContainer;
