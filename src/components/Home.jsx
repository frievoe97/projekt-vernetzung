import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import Slideshow from "./Slideshow";

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
];

const slideshowData = [
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Bild 1",
    text: "Beschreibung für Bild 1",
    buttonText: "Mehr erfahren 1",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/650d420d36a4ba12ef7b30cd/1695489219983-ELZSPC9KS7M6IEB40FUM/image-asset.jpeg?format=2500w",
    title: "Bild 2",
    text: "Beschreibung für Bild 2",
    buttonText: "Mehr erfahren 2",
  },
  // Weitere Daten für Ihre Slideshow
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-8">
        Machtmissbrauch passiert überall
      </h1>
      <p className="text-lg mt-4">
        Wir möchten Betroffene, ihr Umfeld und die Öffentlichkeit informieren,
        sensibilisieren und Hilfestellung bieten.
      </p>
      <div className="my-16 space-y-32">
        {contentData.map((item, index) => (
          <VisibilitySensor
            key={index}
            onChange={(isVisible) => handleVisibilityChange(isVisible)}
            partialVisibility={true}
          >
            {({ isVisible }) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : index % 2 === 0 ? -100 : 100,
                }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } space-y-4 md:space-x-8 items-start`}
              >
                <div className="w-full md:w-1/2">
                  <motion.img
                    src={item.imageSrc}
                    alt={`Bild ${index + 1}`}
                    className="max-w-full max-h-72 h-auto mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="w-full md:w-1/2 p-4 pt-0">
                  <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                  <p className="mt-0 text-justify">{item.text}</p>
                  <motion.button
                    className="bg-black text-white font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-gray-800 transition duration-300 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </VisibilitySensor>
        ))}
      </div>
      <Slideshow data={slideshowData} />
    </div>
  );
}

export default Home;
