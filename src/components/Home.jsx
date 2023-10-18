import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { useGlobalState } from "../data/GlobalState";

import Slideshow from "./Slideshow";
import ContactBanner from "./ContactBanner";

function Home() {
  const { state } = useGlobalState();
  console.log(state);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <div className="text-center bg-yellow">
      <h1 className="text-4xl font-bold pt-8">
        Machtmissbrauch passiert überall
      </h1>
      <p className="text-lg mt-4">
        Wir möchten Betroffene, ihr Umfeld und die Öffentlichkeit informieren,
        sensibilisieren und Hilfestellung bieten.
      </p>
      {/* <TextTicker /> */}
      <div className="space-y-32 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-16">
        {state.homeData.map((item, index) => (
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
                    className="mt-6 px-6 py-3 text-black border-2 border-black rounded-full overflow-hidden transition-border-color hover:border-gray-400 hover:bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 hover:animate-circle bg-transparent"
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
      <ContactBanner />
      <Slideshow data={state.slideshowData} />
    </div>
  );
}

export default Home;
