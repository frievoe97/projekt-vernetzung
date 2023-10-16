import React from "react";
import { useGlobalState } from "../data/GlobalState";

function Interviews() {
  const { state } = useGlobalState();

  return (
    <div className="p-4 space-y-8 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl bg-yellow">
      {state.anlaufstellenData.map((interview, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } space-y-4 md:space-x-4 md:space-y-0 items-center`}
        >
          <div className="md:w-1/2 p-4">
            <img
              src={interview.image}
              alt={`Interview ${index + 1}`}
              className="w-100 h-auto mx-auto"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-gray-500">{interview.date}</p>
            <h2 className="text-xl font-bold">{interview.name}</h2>
            <p>{interview.interviewShort}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Interviews;
