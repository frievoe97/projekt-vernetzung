import React from "react";

const warumJetztText = [
  {
    Text: "Machtmissbrauch ist ein Problem, das in vielen Bereichen unserer Gesellschaft auftritt. Es kann zu schwerwiegenden Konsequenzen führen, wie zum Beispiel Diskriminierung, Mobbing oder sogar Gewalt. In diesem Text werden wir uns damit beschäftigen, warum es so wichtig ist, gegen Machtmissbrauch vorzugehen.",
  },
  {
    Kapitel: "Was ist Machtmissbrauch?",
    Text: "Machtmissbrauch tritt auf, wenn eine Person ihre Macht nutzt, um anderen zu schaden oder zu benachteiligen. Dies kann in vielen verschiedenen Situationen passieren, zum Beispiel am Arbeitsplatz, in der Schule oder in der Politik. Machtmissbrauch kann sich auf viele verschiedene Arten manifestieren, von subtilen Formen wie Ignorieren oder Ausgrenzen bis hin zu offensichtlicher Gewalt.",
  },
  {
    Kapitel: "Warum müssen wir jetzt etwas dagegen tun?",
    Text: "Es gibt viele Gründe, warum es wichtig ist, gegen Machtmissbrauch vorzugehen. Einer der wichtigsten Gründe ist, dass Machtmissbrauch oft zu schwerwiegenden Konsequenzen führt. Menschen können dadurch verletzt werden und ihr Leben kann nachhaltig beeinträchtigt werden. Darüber hinaus kann Machtmissbrauch auch dazu führen, dass Menschen ihre Arbeit verlieren oder ihre Karrierechancen beeinträchtigt werden. Ein weiterer wichtiger Grund ist, dass Machtmissbrauch oft dazu führt, dass Menschen sich nicht mehr sicher fühlen. Sie haben Angst vor den Konsequenzen und trauen sich nicht mehr, für ihre Rechte einzustehen. Dies kann dazu führen, dass Machtmissbrauch weiterhin ungestraft bleibt und sich sogar noch verschlimmert.",
  },
  {
    Kapitel: "Was können wir tun?",
    Text: "Es gibt viele Dinge, die wir tun können, um gegen Machtmissbrauch vorzugehen. Eine Möglichkeit ist es, sich für die Rechte anderer einzusetzen und sie zu unterstützen. Wenn man sieht, dass jemand Opfer von Machtmissbrauch wird, sollte man nicht wegsehen, sondern eingreifen und helfen. Darüber hinaus ist es wichtig, dass Unternehmen und Organisationen klare Richtlinien gegen Machtmissbrauch haben und diese auch durchsetzen. Wenn Mitarbeiterinnen und Mitarbeiter wissen, dass Machtmissbrauch nicht toleriert wird und Konsequenzen hat, sind sie eher bereit, dagegen anzukämpfen.",
  },
];

function WarumJetzt() {
  return (
    <div className="p-4 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl">
      <h1 className="text-4xl font-bold mt-8">
        Machtmissbrauch - Warum müssen wir jetzt etwas dagegen tun?
      </h1>
      <div className="mt-8">
        {warumJetztText.map((kapitel, kapitelIndex) => (
          <div key={kapitelIndex} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{kapitel.Kapitel}</h2>
            <div className="text-gray-700">
              <p className="text-justify">{kapitel.Text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WarumJetzt;
