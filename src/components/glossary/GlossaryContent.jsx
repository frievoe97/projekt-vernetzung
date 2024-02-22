import React, { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Select } from "antd";
import "./GlossaryContent.css";

import { GLOSSARY_TAG_MAPPING } from "../../utils/constants";

const GlossaryContent = ({ data }) => {
  const [eindeutigeTags, setEindeutigeTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);

  const letters = new Set();

  function getTitleByValue(targetValue) {
    for (const item of GLOSSARY_TAG_MAPPING) {
      if (item.value === targetValue) {
        return { label: item.title, value: item.value };
      }
    }
    return null;
  }

  const sammleEindeutigeTags = () => {
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
      eindeutigeTags[i] = getTitleByValue(eindeutigeTags[i].value);
    }
    return eindeutigeTags;
  };

  const sortObjectsByBegriff = (arrayOfObjects) => {
    arrayOfObjects.sort((a, b) => {
      const begriffA = a.term.toLowerCase();
      const begriffB = b.term.toLowerCase();

      if (begriffA < begriffB) {
        return -1;
      }
      if (begriffA > begriffB) {
        return 1;
      }
      return 0;
    });

    return arrayOfObjects;
  };
  if (Object.keys(data).length > 0) {
    data = sortObjectsByBegriff(data);
  }

  useEffect(() => {
    setEindeutigeTags(sammleEindeutigeTags());
  }, [data]);

  if (Object.keys(data).length === 0) {
    return <div></div>;
  }

  const handleChangeTest = (value) => {
    setSearchTags(value);
  };

  return (
    <div className="p-0 md:p-6 text-center z-0 bg-fm_weiss text-color_font">
      <div className="grid text-left gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0 md:my-0 pb-20">
        <div className="w-full px-6 md:px-0">
          <h1 className="relative py-2 px-4 w-full text-center rounded-lg mt-6 mb-8 heading">
            Hier kannst du deine Suche filtern
          </h1>
          <p className="mb-8 text-md ">
            <b>Disclaimer:</b> Projekt Vernetzung erhebt keinen Anspruch auf
            Vollständigkeit und stellt die eigene Auswahl an Begrifflichkeiten
            fortlaufend auf den Prüfstand. Falls wir aus deiner Sicht etwas
            vergessen haben, sind wir für konstruktive Anregungen und Ideen
            jederzeit dankbar.
          </p>
          <Select
            mode="tags"
            style={{
              width: "100%",
              marginBottom: "2rem",
            }}
            placeholder="Tippe deinen Suchbegriff in die Suchmaske"
            onChange={handleChangeTest}
            options={eindeutigeTags}
          />
        </div>
        {data.map((item, index) => {
          const shouldDisplay = searchTags.every((tag) => {
            if (tag.length >= 3) {
              return (
                item.category.includes(tag) ||
                item.term.toLowerCase().includes(tag.toLowerCase()) ||
                item.websiteText.toLowerCase().includes(tag.toLowerCase())
              );
            } else {
              return true;
            }
          });

          const firstLetter = item.term.charAt(0).toUpperCase();

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
                    term={item.term}
                    definition={item.websiteText}
                    data={item}
                    tags={item.category}
                    source={item.sources}
                    searchTags={searchTags}
                    link={item.websiteLink}
                  />
                )}
              </div>
            );
          } else {
            return shouldDisplay ? (
              <GlossaryItem
                key={index}
                term={item.term}
                definition={item.websiteText}
                data={item}
                tags={item.category}
                source={item.sources}
                searchTags={searchTags}
                link={item.websiteLink}
              />
            ) : null;
          }
        })}
      </div>
    </div>
  );
};

function GlossaryItem({ term, definition, searchTags, source, link }) {
  const [isExpanded, setExpanded] = useState(searchTags.length > 0);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    setExpanded(searchTags.length > 0);
  }, [searchTags]);

  const capitalizeWords = (text) => {
    if (typeof text !== "string") {
      return text;
    }

    const words = text.split(" ");

    const formattedText = words.map((word) => {
      if (word.length === 0) {
        return word;
      }

      const wordParts = word.split("-");
      const capitalizedWordParts = wordParts.map((part) => {
        if (part.length === 0) {
          return part;
        }

        const firstLetterUpperCase = part.charAt(0).toUpperCase();
        const restOfWordLowerCase = part.slice(1).toLowerCase();

        return firstLetterUpperCase + restOfWordLowerCase;
      });

      return capitalizedWordParts.join("-");
    });

    return formattedText.join(" ");
  };

  const highlightSearchTags = (text, searchTags) => {
    if (
      Array.isArray(searchTags) &&
      searchTags.length > 0 &&
      searchTags.every((tag) => tag.length >= 3)
    ) {
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
