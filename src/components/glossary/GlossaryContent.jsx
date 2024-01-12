import React, { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Tags from "../elements/Tags";
import { Select } from "antd";
import "./GlossaryContent.css";

const GlossaryContent = ({ data }) => {
  const [eindeutigeTags, setEindeutigeTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);

  const sammleEindeutigeTags = () => {
    const eindeutigeTags = [];

    if (data && data.glossaryData) {
      data.glossaryData.forEach((objekt) => {
        objekt.Tags.forEach((tag) => {
          // Überprüfe, ob das Tag bereits in eindeutigeTags vorhanden ist
          const tagExists = eindeutigeTags.some(
            (eindeutigerTag) => eindeutigerTag.label === tag
          );

          // Füge das Tag dem Array der eindeutigen Tags hinzu, wenn es noch nicht vorhanden ist
          if (!tagExists) {
            eindeutigeTags.push({ label: tag, value: tag });
          }
        });
      });
    }

    // return sortObjectsByLabel(eindeutigeTags);
    return eindeutigeTags;
  };

  const sortObjectsByBegriff = (arrayOfObjects) => {
    // Verwende die sort() Methode, um das Array zu sortieren
    arrayOfObjects.sort((a, b) => {
      // Vergleiche die Werte des 'Begriff'-Schlüssels für die Sortierreihenfolge
      const begriffA = a.Begriff.toLowerCase(); // Vergleich ist nicht case-sensitive
      const begriffB = b.Begriff.toLowerCase();

      if (begriffA < begriffB) {
        return -1;
      }
      if (begriffA > begriffB) {
        return 1;
      }
      return 0; // Die Werte sind gleich
    });

    return arrayOfObjects; // Das sortierte Array zurückgeben
  };
  if (Object.keys(data).length > 0) {
    data.glossaryData = sortObjectsByBegriff(data.glossaryData);
  }

  // const sortObjectsByLabel = (arrayOfObjects) => {
  //   // Verwende die sort() Methode, um das Array zu sortieren
  //   arrayOfObjects.sort((a, b) => {
  //     // Vergleiche die Werte des 'label'-Schlüssels für die Sortierreihenfolge
  //     const labelA = a.label.toLowerCase(); // Vergleich ist nicht case-sensitive
  //     const labelB = b.label.toLowerCase();

  //     if (labelA < labelB) {
  //       return 1;
  //     }
  //     if (labelA > labelB) {
  //       return -1;
  //     }
  //     return 0; // Die Werte sind gleich
  //   });

  //   return arrayOfObjects; // Das sortierte Array zurückgeben
  // };

  // console.log()

  useEffect(() => {
    setEindeutigeTags(sammleEindeutigeTags());
  }, [data]);

  if (Object.keys(data).length === 0) {
    return <div></div>;
  }

  const handleChangeTest = (value) => {
    setSearchTags(value);
  };

  // Ein Array für die Buchstabenüberschriften erstellen
  const letters = new Set();

  return (
    // Kommentar früher: bg-color_4 jetzt: bg-gradient-to-r from-color_2 via-color_3 to-color_4
    <div className="p-0 md:p-6 text-center z-0 bg-fm_weiss text-color_font">
      <div className="grid text-left gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0 md:my-0 pb-20">
        <div className="w-full px-4 md:px-0">
          <h1 className="relative py-2 px-4 w-full text-center rounded-lg mt-6 mb-8 heading">
            Hier kannst du deine Suche filtern
          </h1>
          <p className="mb-8 text-md">
            <b>Disclaimer:</b> Projekt Vernetzung erhebt keinen Anspruch auf
            Vollständigkeit und stellt die eigene Auswahl an Begrifflichkeiten
            fortlaufend auf den Prüfstand. Falls wir aus deiner Sicht etwas
            vergessen haben, sind wir für konstruktive Anregungen und Ideen
            jederzeit dankbar.
          </p>
          <Select
            mode="tags"
            // value={"selected"}
            style={{
              width: "100%",
              marginBottom: "2rem",
            }}
            placeholder="Tippe deinen Suchbegriff in die Suchmaske"
            onChange={handleChangeTest}
            options={eindeutigeTags}
          />
        </div>
        {data.glossaryData.map((item, index) => {
          const shouldDisplay = searchTags.every((tag) => {
            if (tag.length >= 3) {
              return (
                item.Tags.includes(tag) ||
                item.Begriff.toLowerCase().includes(tag.toLowerCase()) ||
                item.Definition.toLowerCase().includes(tag.toLowerCase())
              );
            } else {
              return true;
            }
          });

          // Buchstaben des aktuellen Begriffs ermitteln
          const firstLetter = item.Begriff.charAt(0).toUpperCase();

          // Die Buchstabenüberschrift nur einmal anzeigen
          if (!letters.has(firstLetter) && shouldDisplay) {
            letters.add(firstLetter);
            return (
              <div key={firstLetter}>
                <h2 className="mb-4 relative py-2 px-4 mt-4 text-black heading-black border-b-2 border-fm_rosa">
                  {firstLetter}
                </h2>
                {shouldDisplay && (
                  <GlossaryItem
                    key={index}
                    term={item.Begriff}
                    // definition={
                    //   "Die Definition von " + item.Begriff + " ist..."
                    // }
                    definition={item.Definition}
                    data={item}
                    tags={item.Tags}
                    source={item.Quellen}
                    searchTags={searchTags}
                    link={item["Website-Verlinkung"]}
                  />
                )}
              </div>
            );
          } else {
            // Für die Begriffe ohne Überschrift
            return shouldDisplay ? (
              <GlossaryItem
                key={index}
                term={item.Begriff}
                // definition={"Die Definition von " + item.Begriff + " ist..."}
                definition={item.Definition}
                data={item}
                tags={item.Tags}
                source={item.Quellen}
                searchTags={searchTags}
                link={item["Website-Verlinkung"]}
              />
            ) : null;
          }
        })}
      </div>
    </div>
  );
};

function GlossaryItem({
  term,
  data,
  definition,
  searchTags,
  tags,
  source,
  link,
}) {
  const [isExpanded, setExpanded] = useState(searchTags.length > 0);

  // console.log(isExpanded);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    // Update isExpanded when searchTags changes
    setExpanded(searchTags.length > 0);
  }, [searchTags]);

  const capitalizeWords = (text) => {
    if (typeof text !== "string") {
      return text;
    }

    // Teile den Text in Wörter auf
    const words = text.split(" ");

    // Iteriere durch die Wörter und formatiere sie
    const formattedText = words.map((word) => {
      if (word.length === 0) {
        return word; // Leere Wörter (z.B. doppelte Leerzeichen) behandeln
      }

      const wordParts = word.split("-");
      const capitalizedWordParts = wordParts.map((part) => {
        if (part.length === 0) {
          return part; // Leere Teile (z.B. doppelte Bindestriche) behandeln
        }

        const firstLetterUpperCase = part.charAt(0).toUpperCase(); // Erstes Zeichen groß
        const restOfWordLowerCase = part.slice(1).toLowerCase(); // Rest des Teils klein

        return firstLetterUpperCase + restOfWordLowerCase;
      });

      return capitalizedWordParts.join("-");
    });

    // Die formatierten Wörter wieder zusammenfügen
    return formattedText.join(" ");
  };

  const highlightSearchTags = (text, searchTags) => {
    // Prüfen, ob searchTags vorhanden sind und mindestens 3 Zeichen lang sind
    if (
      Array.isArray(searchTags) &&
      searchTags.length > 0 &&
      searchTags.every((tag) => tag.length >= 3)
    ) {
      // Erstelle ein reguläres Ausdrucksmuster, um alle Suchbegriffe zu finden
      const regex = new RegExp(`(${searchTags.join("|")})`, "gi");
      return text.replace(regex, "<strong>$1</strong>");
    }
    return text;
  };

  return (
    <div className="">
      <div
        className={`p-1 flex rounded justify-between items-center ${
          isExpanded ? "expanded color-animation  shadow-animation" : ""
        }`}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <h2 className="text-lg my-2 ml-2">{capitalizeWords(term)}</h2>
        <button className="bg-transparent">
          <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleLeft} />
        </button>
      </div>
      <section className="" {...getCollapseProps()}>
        <p
          className="m-4 mt-8 text-justify"
          dangerouslySetInnerHTML={{
            __html: highlightSearchTags(definition, searchTags),
          }}
        ></p>
        <div className="flex flex-col md:flex-row  md:items-end justify-between mb-2 md:mb-4">
          <a
            className="ml-4 text-black hover:text-black hover:underline font-bold"
            href={link}
            target="_blank"
          >
            Weiterlesen
          </a>
          <div className="ml-4 md:ml-0 mr-4 mt-2 md:mt-0 text-xs font-light">
            Quelle: {source}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GlossaryContent;
