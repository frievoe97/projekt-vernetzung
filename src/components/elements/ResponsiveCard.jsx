import React from "react";
import { Card } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { MailOutlined, PhoneOutlined, LinkOutlined } from "@ant-design/icons";

const { Meta } = Card;

/**
 * Eine responsive Kartenkomponente, die ein Logo, einen Namen und einen Link anzeigt.
 * @param {Object} props - Die Eigenschaften für die Karte.
 * @param {string} props.logoUrl - Die URL des Logos.
 * @param {string} props.name - Der Name oder Titel.
 * @param {string} props.link - Der Link zur Anlaufstelle.
 * @param {Function} props.onClose - Eine Funktion zum Schließen der Karte.
 * @returns {JSX.Element} - Eine React-Komponente zur Anzeige der Karte.
 */
const ResponsiveCard = ({ logoUrl, name, link, onClose }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white md:w-9/12 rounded-lg shadow-md mt-16">
        <div className="relative">
          <CloseCircleOutlined
            className="text-3xl absolute top-0 left-2 cursor-pointer"
            onClick={onClose}
          />
          <img
            src={logoUrl}
            className="w-full h-20 rounded-t-lg my-4"
            alt={name}
          />
          <div className="p-4 text-left ">
            <h1 className="text-2xl text-left font-bold mb-4">{name}</h1>
            <p className="mb-4">
              Der Weiße Ring ist eine deutsche Opferschutzorganisation, die sich
              für die Unterstützung von Kriminalitätsopfern einsetzt. Gegründet
              im Jahr 1976, hat der Weiße Ring seitdem einen wichtigen Beitrag
              dazu geleistet, die Rechte und Bedürfnisse von Opfern von
              Verbrechen in Deutschland zu verteidigen und zu schützen.
              <br /> <br />
              Die Organisation setzt sich für eine Vielzahl von Opfern ein,
              unabhängig von der Art des Verbrechens, das sie erlebt haben. Dazu
              gehören Opfer von Gewaltverbrechen, sexueller Übergriffe,
              häuslicher Gewalt, Stalking und vielen anderen Formen von
              Kriminalität. Der Weiße Ring bietet Unterstützung und Hilfe für
              die physischen, emotionalen und rechtlichen Bedürfnisse der Opfer.
              <br /> <br />
              Eine der wichtigsten Aufgaben des Weißen Rings ist die Beratung
              und Begleitung von Opfern im Strafverfahren. Die Opfer werden
              darüber informiert, welche Rechte sie haben und wie sie diese
              geltend machen können. Die Organisation vermittelt auch
              professionelle Hilfe, wie psychologische Unterstützung und
              Rechtsberatung, um den Opfern bei der Bewältigung der
              traumatischen Erfahrungen zu helfen.
              <br /> <br />
              Darüber hinaus setzt sich der Weiße Ring für die Prävention von
              Kriminalität ein und bietet Programme zur Aufklärung und
              Sensibilisierung an. Ziel ist es, die Öffentlichkeit für das Thema
              Opferschutz zu sensibilisieren und das Bewusstsein für die
              Bedürfnisse von Opfern zu schärfen.
              <br /> <br />
              Der Weiße Ring finanziert sich größtenteils durch Spenden und
              Mitgliedsbeiträge. Die ehrenamtlichen Mitarbeiterinnen und
              Mitarbeiter spielen eine wichtige Rolle bei der Umsetzung der
              Ziele der Organisation.
              <br /> <br />
              Insgesamt spielt der Weiße Ring eine bedeutende Rolle in der
              Unterstützung von Opfern von Kriminalität und der Förderung von
              Opferschutz in Deutschland. Die Organisation hat im Laufe der
              Jahre Tausenden von Opfern geholfen und trägt dazu bei, dass sie
              die notwendige Unterstützung und Anerkennung erhalten, die sie
              verdienen..
            </p>
          </div>
          <hr className="border-t border-gray-200" />
          <div className="p-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <LinkOutlined className="text-lg" key="insta" />
            </a>
            ,
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
