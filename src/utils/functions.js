import {
  ANLAUFSTELLEN_CATEGORY_MAPPING,
  GLOSSARY_TAG_MAPPING,
} from "./constants";

export function splitDataByType(allData) {
  let interviews = [];
  let anlaufstellen = [];
  let glossary = [];
  let glossaryTags = [];

  allData.forEach((entry) => {
    switch (entry._type) {
      case "interview":
        interviews.push(entry);
        break;
      case "anlaufstellen":
        anlaufstellen.push(entry);
        break;
      case "glossary":
        glossary.push(entry);
        break;
      default:
        // Fall-back: Falls der _type nicht einem der erwarteten Werte entspricht
        console.warn(`Unbekannter _type gefunden: ${entry._type}`);
    }
  });

  interviews = removeNullEntries(interviews);
  anlaufstellen = removeNullEntries(anlaufstellen);
  glossary = removeNullEntries(glossary);

  anlaufstellen = prepareAnlaufstellen(anlaufstellen);
  interviews = prepareInterviews(interviews);
  glossary = prepareGlossary(glossary);

  glossaryTags = sammleEindeutigeTags(glossary);

  return { interviews, anlaufstellen, glossary, glossaryTags };
}

function removeNullEntries(dataArray) {
  return dataArray.map((obj) => {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value !== null && key != "_type") {
        newObj[key] = value;
      }
    }
    return newObj;
  });
}

const prepareAnlaufstellen = (inputArray) => {
  const groupedByCategory = {};

  // Gruppieren nach Kategorie
  inputArray.forEach((item) => {
    item.category.forEach((category) => {
      if (!groupedByCategory[category]) {
        groupedByCategory[category] = [];
      }
      groupedByCategory[category].push(item);
    });
  });

  // Formatierung des Rückgabe-Arrays
  const resultArray = Object.keys(groupedByCategory).map((category) => ({
    Anlaufstelle: groupedByCategory[category],
    Kategorie: category,
  }));

  resultArray.forEach((item) => {
    item.index = getTitleByValue(
      item.Kategorie,
      ANLAUFSTELLEN_CATEGORY_MAPPING
    ).index;
    item.Kategorie = getTitleByValue(
      item.Kategorie,
      ANLAUFSTELLEN_CATEGORY_MAPPING
    ).title;
  });

  let resultArray2 = [];

  resultArray.forEach((item) => {
    resultArray2[item.index] = item;
  });

  return resultArray2;
};

function getTitleByValue(targetValue, mappingArray) {
  for (let i = 0; i < mappingArray.length; i++) {
    if (mappingArray[i].value === targetValue) {
      return { title: mappingArray[i].title, index: i };
    }
  }
  return null;
}

const prepareInterviews = (array) => {
  let preparedArray = [];

  array.forEach((obj) => {
    let preparedObj = {
      ...obj,
    };

    if (preparedObj.launchDate) {
      preparedObj.launchDate = new Date(preparedObj.launchDate);
    }

    if (preparedObj.quotationMarkColor) {
      preparedObj.quotationMarkColor = preparedObj.quotationMarkColor.hex;
    }

    if (preparedObj.backgroundColor) {
      preparedObj.backgroundColor = preparedObj.backgroundColor.hex;
    }

    preparedArray.push(preparedObj);
  });

  preparedArray.sort((a, b) => a.launchDate - b.launchDate);

  return preparedArray;
};

function prepareGlossary(glossaryArray) {
  return glossaryArray.sort((a, b) => {
    const termA = a.term.toUpperCase(); // Ignoriere Groß-/Kleinschreibung
    const termB = b.term.toUpperCase(); // Ignoriere Groß-/Kleinschreibung

    if (termA < termB) {
      return -1;
    }
    if (termA > termB) {
      return 1;
    }
    return 0; // Gleichstand
  });
}

const sammleEindeutigeTags = (data) => {
  let eindeutigeTags = [];

  if (data) {
    data.forEach((objekt) => {
      objekt.category.forEach((tag) => {
        const tagExists = eindeutigeTags.some(
          (eindeutigerTag) => eindeutigerTag.label === tag
        );

        if (!tagExists) {
          eindeutigeTags.push({ label: tag, value: tag });
        }
      });
    });
  }

  for (let i = 0; i < eindeutigeTags.length; i++) {
    eindeutigeTags[i] = {
      label: getTitleByValue(eindeutigeTags[i].value, GLOSSARY_TAG_MAPPING)
        .title,
      value: eindeutigeTags[i].value,
    };
  }
  return eindeutigeTags;
};
