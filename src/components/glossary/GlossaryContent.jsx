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

    return eindeutigeTags;
  };

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
    // Kommentar früher: bg-color_4 jetzt: bg-gradient-to-r from-color_2 via-color_3 to-color_4
    <div className="p-0 md:p-6 text-center z-0 bg-fm_weiss text-color_font">
      <div className="grid text-left gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0 md:my-16">
        <div className="w-full px-4">
          <Select
            mode="tags"
            // value={"selected"}
            style={{
              width: "100%",
              marginBottom: "2rem",
            }}
            placeholder="Suche nach dem passenden Begriff"
            onChange={handleChangeTest}
            options={eindeutigeTags}
          />
        </div>
        {data.glossaryData.map((item, index) => {
          // Check if every tag in searchTags is present in item.Tags
          const shouldDisplay = searchTags.every((tag) =>
            item.Tags.includes(tag)
          );

          // Render GlossaryItem only if shouldDisplay is true
          return shouldDisplay ? (
            <GlossaryItem
              key={index}
              term={item.Begriff}
              definition={"Die Definition von " + item.Begriff + " ist..."}
              data={item}
              tags={item.Tags}
              searchTags={searchTags}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

function GlossaryItem({ term, data, definition, searchTags, tags }) {
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

    // Split the text into words
    const words = text.split(" ");

    // Iterate through the words and format them
    const formattedText = words.map((word) => {
      if (word.length === 0) {
        return word; // Handle empty words (e.g., double spaces)
      }

      const firstLetterUpperCase = word.charAt(0).toUpperCase(); // First letter uppercase
      const restOfWordLowerCase = word.slice(1).toLowerCase(); // Rest of word lowercase

      return firstLetterUpperCase + restOfWordLowerCase;
    });

    // Join the formatted words back together
    return formattedText.join(" ");
  };

  return (
    <div className="p-4 md:p-6 border-b-2 border-black">
      <div
        className={`p-1 flex rounded justify-between items-center ${
          isExpanded ? "expanded color-animation  shadow-animation" : ""
        }`}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <h2 className="text-2xl font-semibold my-2 ml-2">
          {capitalizeWords(term)}
        </h2>
        <button className="bg-transparent">
          <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleLeft} />
        </button>
      </div>
      <section className="divide-y-2 divide-fm_grau" {...getCollapseProps()}>
        <p className="m-4 mt-8">{definition}</p>
      </section>
    </div>
  );
}

export default GlossaryContent;
