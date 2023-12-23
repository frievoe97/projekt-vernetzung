import React from "react";

import InterviewContainer from "./InterviewContainer";
import CurrentInterview from "./CurrentInterview";

import NotFoundComponent from "../NotFoundComponent";

function Interviews() {
  // return (
  //   <NotFoundComponent
  //     text={"Das Interview existiert nicht."}
  //     buttonText={"Zurück zur Startseite"}
  //     link={"/"}
  //   />
  // );

  return (
    <div className="text-center text-color_font bg-fm_weiss pt-16">
      <CurrentInterview />
      <div className="flex flex-row max-w-screen-xl mx-auto justify-between px-12 py-8">
        <div className="flex flex-col">
          <div>Logos</div>
          <img src="src/assets/logo/logo-2.jpeg" className="w-64" alt="" />
        </div>
        <h1 className="bg-fm_weiss w-3/6 text-2xl text-right font-bold">
          Hier findest du unsere Expert:innen-Interviews und Beiträge
        </h1>
      </div>
      <InterviewContainer />
    </div>
  );
}

export default Interviews;
