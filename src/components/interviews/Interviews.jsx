import React from "react";

import InterviewContainer from "./InterviewContainer";
import CurrentInterview from "./CurrentInterview";

import NotFoundComponent from "../NotFoundComponent";

import { IoMailOutline, IoLogoInstagram } from "react-icons/io5";

import { Link } from "react-router-dom";

function Interviews() {
  // return (
  //   <NotFoundComponent
  //     text={"Das Interview existiert nicht."}
  //     buttonText={"Zurück zur Startseite"}
  //     link={"/"}
  //   />
  // );

  return (
    <div>
      <div className="text-center text-color_font bg-fm_weiss pt-16">
        <CurrentInterview />
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto justify-between px-12 py-8">
          <div className="flex flex-col">
            <div className="flex space-x-4 mb-4 items-center">
              <img src="/logo-2.jpeg" className="w-64" alt="" />
              <a href="mailto:projekt-vernetzung@email.com">
                <IoMailOutline size={40} color="#72A7FF" />
              </a>
              <a
                href="https://www.instagram.com/projekt.vernetzung"
                target="_blank"
              >
                <IoLogoInstagram size={32} color="#72A7FF" />
              </a>
            </div>
          </div>
          <h1 className="bg-fm_weiss w-3/6 text-2xl text-right font-bold">
            Hier findest du unsere Expert:innen-Interviews und Beiträge
          </h1>
        </div>
        <InterviewContainer />
      </div>
    </div>
  );
}

export default Interviews;
