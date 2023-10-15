import React from "react";

const interviewData = [
  {
    date: "28.05.19",
    title: "Organisation 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1696535959238-Y2SO0G0ZM9746OF4BBR2/image-asset.jpeg?format=2500w",
  },
  {
    date: "28.05.19",
    title: "Organisation 2",
    text: "Vivamus tortor. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros.",
    image:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1696535959238-Y2SO0G0ZM9746OF4BBR2/image-asset.jpeg?format=2500w",
  },
  // Weitere Interview-Daten hier hinzufügen
];

function Interviews() {
  return (
    <div className="p-4 space-y-8">
      {interviewData.map((interview, index) => (
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
            <h2 className="text-xl font-bold">{interview.title}</h2>
            <p>{interview.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Interviews;
