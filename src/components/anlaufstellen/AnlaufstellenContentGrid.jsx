import React from "react";
import CustomCard from "../elements/CustomCard";
import { useGlobalState } from "../../data/GlobalState";
import "./anlausstellenStyle.css";

function areAllElementsContained(array1, array2) {
  if (array2.length === 0) return false;

  if (array1[0] == null) return true;

  const lowerCaseArray1 = array1.map((element) => element.toLowerCase());
  const lowerCaseArray2 = array2.map((element) => element.toLowerCase());

  for (const searchString of lowerCaseArray1) {
    const isSubstringInArray = lowerCaseArray2.some((element) =>
      element.includes(searchString)
    );

    if (!isSubstringInArray) {
      return false;
    }
  }

  return true;
}

function objectToArray(inputObject) {
  if (inputObject.tags === undefined) return [];

  const nonEmptyValues = [inputObject.inputText, ...inputObject.tags].filter(
    (value) => value != null && value !== ""
  );

  return nonEmptyValues;
}

function AnlaufstellenContentGrid({ searchData }) {
  const { state } = useGlobalState();

  // Wenn die Daten aus 'state.anlaufstellenData.googleDoc' noch nicht geladen sind, wird "Loading..." angezeigt
  if (state.anlaufstellenData.googleDoc === undefined) {
    return <div></div>;
  }

  return (
    <div className="w-full px-0 md:px-12">
      <div className="w-full">
        <h2 className="text-xl text-left font-bold w-fit flex flex-col md:flex-row items-center ml-4 md:ml-0">
          Passend zu deiner Suche haben wir folgende Anlaufstellen gefunden:
        </h2>

        <div className="flex flex-wrap items-stretch justify-center scroll-container pb-8">
          {state.anlaufstellenData.googleDoc.flatMap((row, rowIndex) =>
            row.Anlaufstelle.map((card, index) => {
              if (
                areAllElementsContained(objectToArray(searchData), card.Tags)
              ) {
                return (
                  <CustomCard
                    key={`${rowIndex}-${index}`}
                    imageUrl={card.Logo}
                    title={card.Name}
                    text={card.text}
                    link={card.link}
                    tags={card.Tagss}
                  />
                );
              }
              return null;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default AnlaufstellenContentGrid;
