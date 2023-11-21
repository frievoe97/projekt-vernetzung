import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Tags from "../elements/Tags";
import { Select } from "antd";
import "./GlossaryContent.css";

const GlossaryContent = ({ data }) => {
  if (!data) {
    return null;
  }

  const stichworte = [
    { label: "Machtmissbrauch", value: "Machtmissbrauch" },
    { label: "Frauenhass", value: "Frauenhass" },
    { label: "Sexismus", value: "Sexismus" },
    { label: "sexualisierte Gewalt", value: "sexualisierte Gewalt" },
    { label: "Übergriff", value: "Übergriff" },
    { label: "Mikroaggressionen", value: "Mikroaggressionen" },
    { label: "Catcalling", value: "Catcalling" },
    { label: "Pathologischer Narzissmus", value: "Pathologischer Narzissmus" },
    { label: "Konsenz / consent", value: "Konsenz / consent" },
    {
      label: "Täter-Opfer-Umkehr / Victim blaming",
      value: "Täter-Opfer-Umkehr / Victim blaming",
    },
    { label: "Rape culture", value: "Rape culture" },
    { label: "Mobbing", value: "Mobbing" },
    {
      label: "geschlechtsspezifische Gewalt",
      value: "geschlechtsspezifische Gewalt",
    },
    { label: "Stalking", value: "Stalking" },
    { label: "Intersektionalität", value: "Intersektionalität" },
    { label: "Trauma", value: "Trauma" },
    { label: "Gaslighting", value: "Gaslighting" },
    { label: "Love Bombing", value: "Love Bombing" },
    { label: "Silencing", value: "Silencing" },
    { label: "Grooming", value: "Grooming" },
    { label: "Nötigung", value: "Nötigung" },
    { label: "Femizide", value: "Femizide" },
    { label: "Vergewaltigung", value: "Vergewaltigung" },
    { label: "Stealthing", value: "Stealthing" },
    { label: "Ehrenmorde", value: "Ehrenmorde" },
    { label: "psychische Gewalt", value: "psychische Gewalt" },
    { label: "sexuelle Belästigung", value: "sexuelle Belästigung" },
    { label: "Mobbing", value: "Mobbing" },
    { label: "interne Gewalt", value: "interne Gewalt" },
    { label: "externe Gewalt", value: "externe Gewalt" },
    { label: "Gaslighting", value: "Gaslighting" },
    { label: "Häusliche Gewalt", value: "Häusliche Gewalt" },
    { label: "Partnerschaftliche Gewalt", value: "Partnerschaftliche Gewalt" },
    { label: "Finanzielle Gewalt", value: "Finanzielle Gewalt" },
    {
      label: "Psychische / emotionale Gewalt",
      value: "Psychische / emotionale Gewalt",
    },
    { label: "Soziale Gewalt", value: "Soziale Gewalt" },
    { label: "Körperliche Gewalt", value: "Körperliche Gewalt" },
  ];

  return (
    // Kommentar früher: bg-color_4 jetzt: bg-gradient-to-r from-color_2 via-color_3 to-color_4
    <div className="p-0 md:p-6 text-center z-0 bg-fm_weiss text-color_font">
      <div className="grid text-left gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0 md:my-16">
        <div className="w-full">
          <Select
            mode="tags"
            // value={"selected"}
            style={{
              width: "100%",
              marginBottom: "2rem",
            }}
            placeholder="Suche nach dem passenden Begriff"
            // onChange={handleChangeTest}
            options={stichworte}
          />
        </div>
        {data.map((item, index) => {
          return (
            <GlossaryItem
              key={index}
              term={item.term}
              definition={item.definition}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

function GlossaryItem({ term, data }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

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
        <h2 className="text-2xl font-semibold my-2 ml-2">{term}</h2>
        <button className="bg-transparent">
          <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleLeft} />
        </button>
      </div>
      <section className="divide-y-2 divide-fm_grau" {...getCollapseProps()}>
        {data.definition.map((data, index) => (
          <div key={index} className="my-4 mb-4">
            <h2 className="font-bold text-fm_blau mt-2 mb-2">{data.title}</h2>
            <p className="mb-2 text-justify">{data.text}</p>
            <a className="font-bold text-black hover:text-black cursor-pointer">
              Weiterlesen
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default GlossaryContent;
