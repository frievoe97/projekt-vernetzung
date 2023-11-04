import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const alternatingStyles = ["text-left", "text-right"];

function Machtmissbrauch() {
  const { state, dispatch } = useGlobalState();
  // const [machtmissbrauchData, setMachtmissbrauchData] = useState([]);

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        console.log(parsedData);
        dispatch({
          type: actionType,
          payload: parsedData,
        });
        // setMachtmissbrauchData(parsedData[dataKey]);
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/machtmissbrauchPageData.yaml",
      dispatch,
      "SET_MACHTMISSBRAUCH_DATA",
      "machtmissbrauchPageData"
    );
  }, [dispatch]);

  let alternatingIndex = 0;

  return (
    <div className="p-4 text-center mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl text-color_font">
      {state.machtmissbrauchPageData.header && (
        <h1 className="text-4xl font-bold mt-8">
          {state.machtmissbrauchPageData.header}
        </h1>
      )}

      {state.machtmissbrauchPageData.subheader && (
        <p className="text-lg mt-4">
          {state.machtmissbrauchPageData.subheader}
        </p>
      )}

      {state.machtmissbrauchPageData.machtmissbrauchData && (
        <div className="mt-8 divide-y-2 divide-black">
          {state.machtmissbrauchPageData.machtmissbrauchData.map(
            (item, index) => {
              alternatingIndex = 1 - alternatingIndex; // Wechsel zwischen 0 und 1
              const alternatingStyle = alternatingStyles[alternatingIndex];

              return (
                <VisibilitySensor key={index} partialVisibility>
                  {({ isVisible }) => (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      className={`text-left md:${alternatingStyle} md:p-6 mb-6`}
                    >
                      <h1 className="text-2xl font-semibold text-color_font mt-4 mb-2 inline-block">
                        {item.Titel}
                      </h1>
                      <p className="mt-2 text-justify">{item.Text}</p>
                    </motion.div>
                  )}
                </VisibilitySensor>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}

export default Machtmissbrauch;
