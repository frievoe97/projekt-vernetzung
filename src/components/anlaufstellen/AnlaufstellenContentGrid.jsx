import React from "react";
import CardComponent from "../elements/CardComponent";
import CustomCard from "../elements/CustomCard";
import { useGlobalState } from "../../data/GlobalState";
import Tags from "../elements/Tags";
import "./anlausstellenStyle.css";

/**
 * Überprüft, ob alle Elemente in array1 als Substrings in array2 vorkommen.
 * @param {array} array1 - Das erste Array.
 * @param {array} array2 - Das zweite Array.
 * @returns {boolean} - True, wenn alle Elemente in array1 Substrings in array2 sind, sonst false.
 */
function areAllElementsContained(array1, array2) {
  // Wenn das zweite Array leer ist, ist die Bedingung immer falsch
  if (array2.length === 0) return false;

  // Wenn das erste Element des ersten Arrays null oder undefined ist, ist die Bedingung immer wahr
  if (array1[0] == null) return true;

  // Wandelt alle Elemente in lowercase um, um die Suche case-insensitiv zu machen
  const lowerCaseArray1 = array1.map((element) => element.toLowerCase());
  const lowerCaseArray2 = array2.map((element) => element.toLowerCase());

  // Überprüft, ob jedes Element in lowerCaseArray1 in lowerCaseArray2 enthalten ist
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

/**
 * Wandelt ein Objekt in ein Array um und entfernt leere Werte.
 * @param {object} inputObject - Das Eingabeobjekt.
 * @returns {array} - Ein Array ohne leere Werte.
 */
function objectToArray(inputObject) {
  // Wenn das 'tags'-Attribut im inputObject nicht definiert ist, wird ein leeres Array zurückgegeben
  if (inputObject.tags === undefined) return [];

  // Erzeugt ein Array mit nicht leeren Werten aus dem inputObject
  const nonEmptyValues = [inputObject.inputText, ...inputObject.tags].filter(
    (value) => value != null && value !== ""
  );

  return nonEmptyValues;
}

function capitalizeFirstLetterOfEachWord(str) {
  // Zerlege den Eingabestring in Wörter
  const words = str.split(" ");

  // Iteriere durch die Wörter und transformiere sie
  const capitalizedWords = words.map((word) => {
    // Wenn das Wort leer ist, belasse es unverändert
    if (word.length === 0) {
      return word;
    }

    // Andernfalls mache den ersten Buchstaben groß und den Rest klein
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();

    return firstLetter + restOfWord;
  });

  // Füge die transformierten Wörter wieder zu einem Satz zusammen
  const result = capitalizedWords.join(" ");

  return result;
}

function AnlaufstellenContentGrid({ searchData, onTagsChange }) {
  const { state, dispatch } = useGlobalState();

  // Wird aufgerufen, wenn sich searchData ändert
  //   useEffect(() => {
  //     console.log("searchData has changed:", searchData);
  //   }, [searchData]);

  // Wenn die Daten aus 'state.anlaufstellenData.googleDoc' noch nicht geladen sind, wird "Loading..." angezeigt
  if (state.anlaufstellenData.googleDoc === undefined) {
    return <div></div>;
  }

  return (
    <div className="w-full px-0 md:px-12">
      <div className="w-full">
        <h2 className="text-xl text-left font-bold w-fit flex flex-col md:flex-row items-center ml-4 md:ml-0">
          Passend zu deiner Suche haben wir folgende Anlaufstellen gefunden:
          {/* {objectToArray(searchData).map((tag, index) => (
            <Tags
              key={index}
              tag={capitalizeFirstLetterOfEachWord(tag)}
              onRemoveTag={() => onTagsChange(tag)}
              removable={true}
            />
          ))} */}
        </h2>

        <div className="flex flex-wrap items-stretch justify-center scroll-container pb-8">
          {state.anlaufstellenData.googleDoc.flatMap((row, rowIndex) =>
            row.Anlaufstelle.map((card, index) => {
              // Überprüft, ob alle Elemente in objectToArray(searchData) in card.Tags enthalten sind
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
