import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { useGlobalState } from "../../data/GlobalState";
import ButtonBigRounded from "../elements/ButtonBigRounded";

import Slideshow from "./Slideshow";
import ContactBanner from "./ContactBanner";

import yaml from "js-yaml";

function Home() {
  const { state, dispatch } = useGlobalState();
  const [isVisible, setIsVisible] = useState(false);
  const motionRefs = useRef([]);

  const handleVisibilityChange = (index, isVisible) => {
    setIsVisible(isVisible);
    motionRefs.current[index].style.opacity = isVisible ? 1 : 0;
  };

  const fetchAndParseYamlData = (url, dispatch, actionType) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);

        dispatch({
          type: actionType,
          payload: parsedData,
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/landingPageData.yaml",
      dispatch,
      "SET_LANDING_PAGE_DATA"
    );
  }, [dispatch]);

  return (
    <div className="text-center text-color_font bg-transparent">
      {state.landingPageData.header && (
        <h1 className="text-4xl font-bold pt-8">
          {state.landingPageData.header}
        </h1>
      )}

      {state.landingPageData.subheader && (
        <p className="text-lg mt-4">{state.landingPageData.subheader}</p>
      )}

      {state.landingPageData.homeData && (
        <div className="space-y-8 md:space-y-32 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-16">
          {state.landingPageData.homeData.map((item, index) => (
            <VisibilitySensor
              key={index}
              onChange={(isVisible) => handleVisibilityChange(index, isVisible)}
              partialVisibility={true}
            >
              {({ isVisible }) => (
                <motion.div
                  ref={(element) => (motionRefs.current[index] = element)}
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
                      className="max-w-full max-h-72 h-auto mx-auto shadow-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isVisible ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-4 pt-0">
                    <h2 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h2>
                    <p className="mt-0 text-justify">{item.text}</p>
                    <ButtonBigRounded buttonText="Mehr erfahren" link="/" />
                  </div>
                </motion.div>
              )}
            </VisibilitySensor>
          ))}
        </div>
      )}

      {state.landingPageData.contactBannerData && (
        <ContactBanner data={state.landingPageData.contactBannerData} />
      )}

      {state.landingPageData.slideshowData && (
        <Slideshow data={state.landingPageData.slideshowData} />
      )}
    </div>
  );
}

export default Home;
