import React from "react";
import CardComponent from "../elements/CardComponent";
import { useGlobalState } from "../../data/GlobalState";
import "./anlausstellenStyle.css";

const AnlaufstellenContent = () => {
  const { state, dispatch } = useGlobalState();
  const cardRowsData = [
    {
      header: "Einzelpersonen",
      cards: [
        {
          imageUrl: "https://picsum.photos/200/300?random=1",
          title: "Karte 1",
          text: "Beschreibung der Karte 1.",
          link: "https://example.com/link1",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=2",
          title: "Karte 2",
          text: "Beschreibung der Karte 2.",
          link: "https://example.com/link2",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=3",
          title: "Karte 3",
          text: "Beschreibung der Karte 3.",
          link: "https://example.com/link3",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=4",
          title: "Karte 4",
          text: "Beschreibung der Karte 4.",
          link: "https://example.com/link4",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=5",
          title: "Karte 5",
          text: "Beschreibung der Karte 5.",
          link: "https://example.com/link5",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=6",
          title: "Karte 6",
          text: "Beschreibung der Karte 6.",
          link: "https://example.com/link6",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=7",
          title: "Karte 7",
          text: "Beschreibung der Karte 7.",
          link: "https://example.com/link7",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=8",
          title: "Karte 8",
          text: "Beschreibung der Karte 8.",
          link: "https://example.com/link8",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=9",
          title: "Karte 9",
          text: "Beschreibung der Karte 9.",
          link: "https://example.com/link9",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=10",
          title: "Karte 10",
          text: "Beschreibung der Karte 10.",
          link: "https://example.com/link10",
        },
        // Weitere Karten in Reihe 1 hier hinzufügen
      ],
    },
    {
      header: "Justist:innen",
      cards: [
        {
          imageUrl: "https://picsum.photos/200/300?random=11",
          title: "Karte 11",
          text: "Beschreibung der Karte 11.",
          link: "https://example.com/link11",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=12",
          title: "Karte 12",
          text: "Beschreibung der Karte 12.",
          link: "https://example.com/link12",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=13",
          title: "Karte 13",
          text: "Beschreibung der Karte 13.",
          link: "https://example.com/link13",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=14",
          title: "Karte 14",
          text: "Beschreibung der Karte 14.",
          link: "https://example.com/link14",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=15",
          title: "Karte 15",
          text: "Beschreibung der Karte 15.",
          link: "https://example.com/link15",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=16",
          title: "Karte 16",
          text: "Beschreibung der Karte 16.",
          link: "https://example.com/link16",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=17",
          title: "Karte 17",
          text: "Beschreibung der Karte 17.",
          link: "https://example.com/link17",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=18",
          title: "Karte 18",
          text: "Beschreibung der Karte 18.",
          link: "https://example.com/link18",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=19",
          title: "Karte 19",
          text: "Beschreibung der Karte 19.",
          link: "https://example.com/link19",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=20",
          title: "Karte 20",
          text: "Beschreibung der Karte 20.",
          link: "https://example.com/link20",
        },
        // Weitere Karten in Reihe 2 hier hinzufügen
      ],
    },
    {
      header: "Psycholog:innen",
      cards: [
        {
          imageUrl: "https://picsum.photos/200/300?random=21",
          title: "Karte 21",
          text: "Beschreibung der Karte 21.",
          link: "https://example.com/link21",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=22",
          title: "Karte 22",
          text: "Beschreibung der Karte 22.",
          link: "https://example.com/link22",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=23",
          title: "Karte 23",
          text: "Beschreibung der Karte 23.",
          link: "https://example.com/link23",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=24",
          title: "Karte 24",
          text: "Beschreibung der Karte 24.",
          link: "https://example.com/link24",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=25",
          title: "Karte 25",
          text: "Beschreibung der Karte 25.",
          link: "https://example.com/link25",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=26",
          title: "Karte 26",
          text: "Beschreibung der Karte 26.",
          link: "https://example.com/link26",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=27",
          title: "Karte 27",
          text: "Beschreibung der Karte 27.",
          link: "https://example.com/link27",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=28",
          title: "Karte 28",
          text: "Beschreibung der Karte 28.",
          link: "https://example.com/link28",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=29",
          title: "Karte 29",
          text: "Beschreibung der Karte 29.",
          link: "https://example.com/link29",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=30",
          title: "Karte 30",
          text: "Beschreibung der Karte 30.",
          link: "https://example.com/link30",
        },
        // Fügen Sie hier 10 weitere Karten für diese Zeile hinzu
      ],
    },
    {
      header: "Journalist:innen & Autor:innen",
      cards: [
        {
          imageUrl: "https://picsum.photos/200/300?random=31",
          title: "Karte 31",
          text: "Beschreibung der Karte 31.",
          link: "https://example.com/link31",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=32",
          title: "Karte 32",
          text: "Beschreibung der Karte 32.",
          link: "https://example.com/link32",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=33",
          title: "Karte 33",
          text: "Beschreibung der Karte 33.",
          link: "https://example.com/link33",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=34",
          title: "Karte 34",
          text: "Beschreibung der Karte 34.",
          link: "https://example.com/link34",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=35",
          title: "Karte 35",
          text: "Beschreibung der Karte 35.",
          link: "https://example.com/link35",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=36",
          title: "Karte 36",
          text: "Beschreibung der Karte 36.",
          link: "https://example.com/link36",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=37",
          title: "Karte 37",
          text: "Beschreibung der Karte 37.",
          link: "https://example.com/link37",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=38",
          title: "Karte 38",
          text: "Beschreibung der Karte 38.",
          link: "https://example.com/link38",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=39",
          title: "Karte 39",
          text: "Beschreibung der Karte 39.",
          link: "https://example.com/link39",
        },
        {
          imageUrl: "https://picsum.photos/200/300?random=40",
          title: "Karte 40",
          text: "Beschreibung der Karte 40.",
          link: "https://example.com/link40",
        },
        // Fügen Sie hier 10 weitere Karten für diese Zeile hinzu
      ],
    },
    // Weitere Reihen hier hinzufügen
  ];

  if (!state.anlaufstellenData.googleDoc) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-fm_altrosa p-12">
      <div className="">
        <div className="w-full">
          {state.anlaufstellenData.googleDoc.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-0">
              <h2 className="text-xl text-left font-bold my-2">
                {row.Kategorie}
              </h2>
              {/* custom-shadow */}
              <div className="">
                <div className="flex overflow-x-auto items-stretch flex-row">
                  {row.Name.map((card, index) => (
                    <CardComponent
                      key={index}
                      imageUrl={
                        "https://picsum.photos/200/300?random=" +
                        (rowIndex + 1) * (index + 1)
                      }
                      title={card.Name}
                      text={card.text}
                      link={card.link}
                      tags={card.Tagss}
                      removable={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnlaufstellenContent;
