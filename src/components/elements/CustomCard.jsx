import React, { useState, useEffect } from "react";
import { MailOutlined, PhoneOutlined, LinkOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "./CustomCard.css";

const { Meta } = Card;

function CustomCard({ imageUrl, title, text, link, tags }) {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 840);
  const cardWidth = isWideScreen ? 300 : 200;
  const cardMargin = isWideScreen ? "1rem" : "0.5rem";

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 840);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hier füge ich einen Link hinzu, der zu `link` führt
  const cardActions = [
    <a href={link} target="_blank" rel="noopener noreferrer">
      <LinkOutlined className="text-lg" key="insta" />
    </a>,
    // <a target="_blank" rel="noopener noreferrer">
    //   <MailOutlined className="text-lg" key="insta" />
    // </a>,
    // <a target="_blank" rel="noopener noreferrer">
    //   <PhoneOutlined className="text-lg" key="insta" />
    // </a>,
  ];

  function wrapTextWithMaxLineLength(inputString, maxLineLength) {
    // Teile den Eingabestring in Wörter auf
    const words = inputString.split(" ");

    console.log("inputString: ", inputString);

    let currentLine = "";
    let result = "<span>";

    for (const word of words) {
      if (currentLine.length + word.length + 1 <= maxLineLength) {
        // Füge das aktuelle Wort zur aktuellen Zeile hinzu, falls Platz vorhanden
        if (currentLine.length > 0) {
          currentLine += " ";
        }
        currentLine += word;
      } else if (false) {
      } else {
        // Füge die aktuelle Zeile mit <br> zum Ergebnis hinzu und starte eine neue Zeile
        result += `${currentLine}<br>`;
        currentLine = word;
      }
    }

    // Füge die letzte Zeile zum Ergebnis hinzu und schließe den <span>-Tag
    if (currentLine.length > 0) {
      result += currentLine + "</span>";
    }

    console.log("result: ", result);

    // return result;
    return { __html: result };
  }

  //   // Beispielaufruf
  //   const inputString =
  //     "Dies ist ein Beispieltext, der in Zeilen aufgeteilt werden soll.";
  //   const maxLineLength = 20;
  //   const wrappedText = wrapTextWithMaxLineLength(inputString, maxLineLength);
  //   console.log(wrappedText);

  return (
    <div className="card-container">
      <Card
        className="shadow-xl cursor-pointer"
        style={{
          width: cardWidth,
          height: "fit-content",
          margin: cardMargin,
          backgroundColor: "#ffffffbb",
        }}
        cover={
          <div className="p-3 h-20">
            <div
              style={{
                maxWidth: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                className="mix-blend-multiply"
                alt="example"
                src={imageUrl}
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </div>
        }
        actions={cardActions}
      >
        <Meta
          className="text-xs h-24 md:h-20"
          style={{
            hyphens: "auto",
          }}
          title={title}
          description={text}
        />
      </Card>
    </div>
  );
}

export default CustomCard;
