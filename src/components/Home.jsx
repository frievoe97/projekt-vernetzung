import React from "react";
// import "animate.css/animate.min.css";
// import ScrollAnimation from "react-animate-on-scroll";

const contentData = [
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Alle Branchen und Lebensbereiche betroffen",
    text: "Nicht jeder Fall von Machtmissbrauch gleicht den zuletzt medial stark thematisierten Extremen. Viel passiert “im Kleinen”. Zudem bleiben drastische Fälle, aus Angst der Betroffenen zu Sprechen, im Dunkeln. Dabei gleichen sich übergeordnete Strukturen, die Machtmissbrauch befördern, aber auch von Täter:innen angewandte Strategien über verschiedene Bereiche hinweg. Eine vorbeugende gesellschaftliche und individuelle Auseinandersetzung mit diesen Mustern ist wichtig, um frühzeitiger für Betroffene eingreifen zu können.",
    buttonText: "Mehr erfahren",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Was tun wir?",
    text: "Zahlreiche Expert:innen helfen durch ihre Forschung, ihre Arbeit oder Erlebnisberichte, Machtmissbrauch in seinen verschiedenen Facetten zu erläutern und dafür zu sensibilisieren. Indem wir ihre vielfältigen Stimmen hier zu Wort kommen lassen, möchten wir die Problematik in ihrer vollen Dimension begreifbar machen und verdeutlichen, wie weit verbreitet sie in unserer Gesellschaft ist. Nicht zuletzt möchten wir den Zugang Betroffener zu relevanten Informationen vereinfachen und ihnen helfen, Worte für das Erlebte zu finden.",
    buttonText: "Mehr erfahren",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Was kannst du tun?",
    text: "Dort, wo Machtmissbrauch stattfindet, machen ihn gewisse Strukturen erst möglich. Uns über diese zu informieren, um sie zu erkennen und zu überdenken, ist für uns alle ein erster und wichtiger Schritt. Weiterhin können wir gemeinsam zu einer öffentlichen Entstigmatisierung des Themas beitragen, damit Betroffene einfacher über Unrecht sprechen können und besser geschützt werden.",
    buttonText: "Mehr über uns",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Alle Branchen und Lebensbereiche betroffen",
    text: "Nicht jeder Fall von Machtmissbrauch gleicht den zuletzt medial stark thematisierten Extremen. Viel passiert “im Kleinen”. Zudem bleiben drastische Fälle, aus Angst der Betroffenen zu Sprechen, im Dunkeln. Dabei gleichen sich übergeordnete Strukturen, die Machtmissbrauch befördern, aber auch von Täter:innen angewandte Strategien über verschiedene Bereiche hinweg. Eine vorbeugende gesellschaftliche und individuelle Auseinandersetzung mit diesen Mustern ist wichtig, um frühzeitiger für Betroffene eingreifen zu können.",
    buttonText: "Mehr erfahren",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Was tun wir?",
    text: "Zahlreiche Expert:innen helfen durch ihre Forschung, ihre Arbeit oder Erlebnisberichte, Machtmissbrauch in seinen verschiedenen Facetten zu erläutern und dafür zu sensibilisieren. Indem wir ihre vielfältigen Stimmen hier zu Wort kommen lassen, möchten wir die Problematik in ihrer vollen Dimension begreifbar machen und verdeutlichen, wie weit verbreitet sie in unserer Gesellschaft ist. Nicht zuletzt möchten wir den Zugang Betroffener zu relevanten Informationen vereinfachen und ihnen helfen, Worte für das Erlebte zu finden.",
    buttonText: "Mehr erfahren",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Was kannst du tun?",
    text: "Dort, wo Machtmissbrauch stattfindet, machen ihn gewisse Strukturen erst möglich. Uns über diese zu informieren, um sie zu erkennen und zu überdenken, ist für uns alle ein erster und wichtiger Schritt. Weiterhin können wir gemeinsam zu einer öffentlichen Entstigmatisierung des Themas beitragen, damit Betroffene einfacher über Unrecht sprechen können und besser geschützt werden.",
    buttonText: "Mehr über uns",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Alle Branchen und Lebensbereiche betroffen",
    text: "Nicht jeder Fall von Machtmissbrauch gleicht den zuletzt medial stark thematisierten Extremen. Viel passiert “im Kleinen”. Zudem bleiben drastische Fälle, aus Angst der Betroffenen zu Sprechen, im Dunkeln. Dabei gleichen sich übergeordnete Strukturen, die Machtmissbrauch befördern, aber auch von Täter:innen angewandte Strategien über verschiedene Bereiche hinweg. Eine vorbeugende gesellschaftliche und individuelle Auseinandersetzung mit diesen Mustern ist wichtig, um frühzeitiger für Betroffene eingreifen zu können.",
    buttonText: "Mehr erfahren",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Was tun wir?",
    text: "Zahlreiche Expert:innen helfen durch ihre Forschung, ihre Arbeit oder Erlebnisberichte, Machtmissbrauch in seinen verschiedenen Facetten zu erläutern und dafür zu sensibilisieren. Indem wir ihre vielfältigen Stimmen hier zu Wort kommen lassen, möchten wir die Problematik in ihrer vollen Dimension begreifbar machen und verdeutlichen, wie weit verbreitet sie in unserer Gesellschaft ist. Nicht zuletzt möchten wir den Zugang Betroffener zu relevanten Informationen vereinfachen und ihnen helfen, Worte für das Erlebte zu finden.",
    buttonText: "Mehr erfahren",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Was kannst du tun?",
    text: "Dort, wo Machtmissbrauch stattfindet, machen ihn gewisse Strukturen erst möglich. Uns über diese zu informieren, um sie zu erkennen und zu überdenken, ist für uns alle ein erster und wichtiger Schritt. Weiterhin können wir gemeinsam zu einer öffentlichen Entstigmatisierung des Themas beitragen, damit Betroffene einfacher über Unrecht sprechen können und besser geschützt werden.",
    buttonText: "Mehr über uns",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Alle Branchen und Lebensbereiche betroffen",
    text: "Nicht jeder Fall von Machtmissbrauch gleicht den zuletzt medial stark thematisierten Extremen. Viel passiert “im Kleinen”. Zudem bleiben drastische Fälle, aus Angst der Betroffenen zu Sprechen, im Dunkeln. Dabei gleichen sich übergeordnete Strukturen, die Machtmissbrauch befördern, aber auch von Täter:innen angewandte Strategien über verschiedene Bereiche hinweg. Eine vorbeugende gesellschaftliche und individuelle Auseinandersetzung mit diesen Mustern ist wichtig, um frühzeitiger für Betroffene eingreifen zu können.",
    buttonText: "Mehr erfahren",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Was tun wir?",
    text: "Zahlreiche Expert:innen helfen durch ihre Forschung, ihre Arbeit oder Erlebnisberichte, Machtmissbrauch in seinen verschiedenen Facetten zu erläutern und dafür zu sensibilisieren. Indem wir ihre vielfältigen Stimmen hier zu Wort kommen lassen, möchten wir die Problematik in ihrer vollen Dimension begreifbar machen und verdeutlichen, wie weit verbreitet sie in unserer Gesellschaft ist. Nicht zuletzt möchten wir den Zugang Betroffener zu relevanten Informationen vereinfachen und ihnen helfen, Worte für das Erlebte zu finden.",
    buttonText: "Mehr erfahren",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Was kannst du tun?",
    text: "Dort, wo Machtmissbrauch stattfindet, machen ihn gewisse Strukturen erst möglich. Uns über diese zu informieren, um sie zu erkennen und zu überdenken, ist für uns alle ein erster und wichtiger Schritt. Weiterhin können wir gemeinsam zu einer öffentlichen Entstigmatisierung des Themas beitragen, damit Betroffene einfacher über Unrecht sprechen können und besser geschützt werden.",
    buttonText: "Mehr über uns",
  },
  // Fügen Sie weitere Elemente nach Bedarf hinzu
];

function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold mt-8">
        Machtmissbrauch passiert überall
      </h1>
      <p className="text-lg mt-4">
        Wir möchten Betroffene, ihr Umfeld und die Öffentlichkeit informieren,
        sensibilisieren und Hilfestellung bieten.
      </p>
      <div className="my-16 space-y-32">
        {contentData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } space-y-4 md:space-x-8 items-start`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={item.imageSrc}
                alt={`Bild ${index + 1}`}
                className="max-w-full max-h-72 h-auto mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 pt-0">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="mt-0 text-justify">{item.text}</p>
              <button className="bg-black text-white font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-gray-800 transition duration-300 ease-in-out">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
