import React from "react";
import PreviewV2 from "./elements/PreviewV2";

const InterviewContainer = (interview) => {
  if (interview == undefined) {
    return;
  }

  console.log(interview.interviews);
  // http://localhost:5173/#/interviews-und-beitraege/bei-partnerschaftlicher-gewalt-geht-es-nicht-um-strafe-oder-die-gewalt-an-sich-es-geht-immer-einzig-und-alleine-um-macht

  return (
    <div className="w-full bg-fm_weiss">
      <div className="md:block hidden max-w-screen-xl mx-auto text-justify pb-16">
        <div
          className="grid grid-cols-auto-fill gap-8 px-8"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
        >
          {interview.interviews
            .filter((interview) => new Date(interview.launchDate) < new Date())
            .slice()
            .reverse()
            .map((interview, index) => (
              <div key={index} className="">
                <PreviewV2
                  title={interview.headline}
                  imageUrl={interview.imageUrl}
                  textTeaser={interview.textTeaser}
                  bgColor={interview.backgroundColor}
                  style={{ minWidth: "350px" }}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex flex-col pb-4">
          {interview.interviews
            .slice()
            .reverse()
            .map((interview, index) => (
              <div key={index} className="m-4 flex items-center justify-center">
                <PreviewV2
                  title={interview.headline}
                  imageUrl={interview.imageUrl}
                  textTeaser={interview.textTeaser}
                  bgColor={interview.backgroundColor}
                  style={{ minWidth: "350px" }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewContainer;
