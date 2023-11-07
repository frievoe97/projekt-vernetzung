import React, { useState, useEffect } from "react";
import { MailOutlined, PhoneOutlined, LinkOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "./CustomCard.css";

const { Meta } = Card;

function CustomCard({ imageUrl, title, text, link, tags }) {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 840);
  const cardWidth = isWideScreen ? 300 : 160;

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
      <LinkOutlined key="insta" />,
    </a>,
    <MailOutlined key="mail" />,
    <PhoneOutlined key="phone" />,
  ];

  //   if (link) {
  //     cardActions.push(
  //       <a href={link} target="_blank" rel="noopener noreferrer">
  //         <LinkOutlined key="insta" />,
  //       </a>
  //     );
  //   }

  console.log(link);

  return (
    <div className="card-container">
      <Card
        className="shadow-xl cursor-pointer"
        style={{ width: cardWidth, height: "fit-content", margin: "1rem" }}
        cover={
          <div className="p-4 h-24">
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
                alt="example"
                src={imageUrl}
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        }
        actions={cardActions}
      >
        <Meta title={title} description={text} />
      </Card>
    </div>
  );
}

export default CustomCard;
