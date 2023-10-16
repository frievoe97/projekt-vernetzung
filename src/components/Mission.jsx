import React from "react";

const missionTexts = [
  {
    title: "Machtmissbrauch erklären und vorbeugen",
    text: [
      "Die unzähligen Erfahrungen in der Mehrheit weiblich gelesener Personen mit Machtmissbrauch zeigen, dass Machtmissbrauc in allen Lebensbereichen, in allen Branchen, und in unterschiedlichen Ausprägungen passiert, die mal mehr und mal weniger greifbar sind Beim Thema Machtmissbrauch handelt es sich also um eine “stille Epidemie” mit hoher Prävalenz. Dieses Ausmaß wollen wir hier erklären. Zudem wollen wir Betroffene befähigen, frühzeitig und nach Möglichkeit bevor ihre Fälle rechtsrelevant werden, zu handeln. Denn das aktuelle Verständnis unserer Justizsysteme von Recht und Gerechtigkeit lässt ihnen derzeit nicht viele Handlungsspielräume.",
    ],
  },
  {
    title: "Betroffene zu mehr Selbsthilfe befähigen",
    text: [
      "Wissen um Strukturen und Strategien hinter Machtmissbrauch hilft Betroffenen, die eigene Erfahrung besser einordnen und objektiver betrachten zu können, um sie letztlich für andere nachvollziehbar in Worte fassen zu können. Wagen sie diesen Schritt, ist es gerade für Menschen in Akutsituationen wichtig, dass ihnen offen und unvoreingenommen zugehört und geglaubt wird. Wir wollen dir helfen, deine Situation zu verstehen und dir Handlungsspielräume aufzeigen.",
    ],
  },
  {
    title: "Aufklärung durch die Stimme von Expert:innen",
    text: [
      "Über den Austausch mit unterschiedlichen Hilfe- und Beratungsangeboten sowie Interviews mit Expert:innen, wollen wir euch eine Plattform bieten, auf welcher ihr euch zum Thema Machtmissbrauch informieren könnt. Wir sprechen mit Menschen, die dir dank ihrer Arbeit, ihres Wissens oder ihrer Erfahrungen helfen können, deinen Fall zu verstehen, Worte zu finden und zu handeln.",
    ],
  },
];

function Mission() {
  return (
    <div className="p-4 text-center mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl">
      <h1 className="text-4xl font-bold mt-8">Unsere Mission</h1>
      <div className="mt-8 space-y-8">
        {missionTexts.map((mission, index) => (
          <div
            key={index}
            className="md:flex md:items-start justify-center md:justify-between "
          >
            <div className="md:w-1/2 text-left md:text-right md:pr-8">
              <h2 className="text-2xl font-semibold">{mission.title}</h2>
            </div>
            <div className="md:w-1/2 text-left md:text-left mt-4 md:mt-0">
              {mission.text.map((paragraph, paraIndex) => (
                <p key={paraIndex}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
