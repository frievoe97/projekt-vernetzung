import React from "react";
import ModernCard from "./elements/ModernCard";

function Examples() {
  const cardsData = [
    {
      imgSrc: "https://picsum.photos/200/300",
      imgAlt: "Meaningful alt text for Card 1",
      title: "Noteworthy technology acquisitions 2021",
      text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: "https://picsum.photos/200/301",
      imgAlt: "Meaningful alt text for Card 2",
      title: "Second Card Title",
      text: "Description for the second card.",
    },
    // Füge hier die Daten für die restlichen Karten hinzu
    // ...
  ];

  return (
    <div>
      <h1>Hallo</h1>
      <div className="flex">
        {cardsData.map((card, index) => (
          <div key={index} className="w-1/2 p-4">
            <CustomCard
              imgSrc={card.imgSrc}
              imgAlt={card.imgAlt}
              title={card.title}
              text={card.text}
              // Füge eine benutzerdefinierte CSS-Klasse hinzu, um die Höhe der Karten anzupassen
              className="h-24" // Hier kannst du die Höhe nach Bedarf anpassen
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Examples;
