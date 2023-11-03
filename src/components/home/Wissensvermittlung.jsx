import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded"; // Stelle sicher, dass du den Button-Import entsprechend deinem Projekt anpasst

const Wissensvermittlung = () => {
  return (
    <div className="w-full bg-fm_helles_beige">
      <div className="max-w-screen-xl mx-auto p-4">
        <h1 className="text-2xl font-bold my-4">
          Wissensvermittlung durch die Stimmen Dritter
        </h1>
        <p className="mb-4">
          Viele Menschen helfen z.B. durch ihre Forschung, ihre Arbeit oder ihre
          Erlebnisberichte, Machtmissbrauch zu erklären und dafür zu
          sensibilisieren. Oft tun sie dies bereits seit Jahren. Dank der
          wichtigen medialen Aufmerksamkeit auf dem Thema erhalten sie nun
          verstärkt Gehör. An diesem Momentum möchten wir ansetzen. Anstatt das
          Rad neu zu erfinden, wollen wir die vielfältigen Stimmen hier zu Wort
          kommen lassen, die bereits in der Tiefe informieren und aufklären, die
          wichtige Projekte ins Leben gerufen haben, oder die sich
          öffentlichkeitswirksam positionieren.
        </p>
        <p className="mb-4">
          Auf diese Weise sollen Betroffene einfacher Zugang zu relevanten
          Informationen erhalten, um die eigene Erfahrung besser einordnen und
          objektiver betrachten zu können. Um früher zu erkennen, wo Grenzen
          überschritten werden. Und um frühestmöglich Worte für das Erlebte zu
          finden und zu handeln – denn aktuell ist das alles andere als einfach.
        </p>
        <div className="mb-8">
          <ButtonBigRounded
            buttonText="Zu unseren Interviews & Beiträgen"
            link="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Wissensvermittlung;
