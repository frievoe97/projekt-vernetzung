import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "./CustomCard.css";

const { Meta } = Card;

function CustomCard({ imageUrl, title, text, link, tags }) {
  return (
    <div className="card-container">
      <Card
        className="shadow-xl cursor-pointer"
        style={{ width: 300, height: "fit-content", margin: "1rem" }}
        cover={
          <img alt="example" src={imageUrl} className="h-24 object-cover" />
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
