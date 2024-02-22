import React from "react";
import CustomCard from "../elements/CustomCard";
import { useGlobalState } from "../../data/GlobalState";
import "./anlausstellenStyle.css";

const AnlaufstellenContentNetflix = () => {
  const { state } = useGlobalState();

  if (!state.anlaufstellenFromSanity) {
    return <div></div>;
  }

  return (
    <div>
      <div className="relative w-full px-0">
        <div className="">
          <div className="max-w-screen-xl mx-auto my-20">
            {state.anlaufstellenFromSanity.map((row, rowIndex) => (
              <div key={rowIndex} className="mb-0 divide-y-2 divide-fm_rosa">
                {row.Anlaufstelle != null && row.Anlaufstelle.length > 0 && (
                  <>
                    <h2 className="text-xl text-left font-bold my-2 ml-4 ">
                      {row.Kategorie}
                    </h2>

                    <div className="flex overflow-x-auto items-stretch flex-row scroll-container py-4">
                      {row.Anlaufstelle.map((card, index) => (
                        <div key={index}>
                          <CustomCard
                            imageUrl={card.logo}
                            title={card.title}
                            text={card.text}
                            link={card.link}
                            tags={card.Tags}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnlaufstellenContentNetflix;
