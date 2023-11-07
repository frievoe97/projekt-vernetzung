import React, { useState, useEffect } from "react";
import {
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
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
        actions={[
          <InstagramOutlined key="insta" />,
          <MailOutlined key="mail" />,
          <PhoneOutlined key="phone" />,
        ]}
      >
        <Meta
          //   avatar={
          //     <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          //   }
          title={title}
          description={text}
        />
      </Card>
    </div>
  );
}

export default CustomCard;
