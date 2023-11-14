import React from "react";
import CountUp from "react-countup";
import { Col, Card, Statistic } from "antd";
const formatter = (value) => <CountUp end={value} separator="," />;
const Numbers = () => (
  <div className="w-full bg-fm_weiss">
    <div className="py-4 max-w-screen-xl mx-auto">
      <div className="flex justify-evenly flex-wrap">
        <div className="m-4 border p-2 border-2 rounded-xl border-black shadow-xl">
          <Statistic
            title="Aktive Nutzer*innen pro Tag"
            value={1897943}
            formatter={formatter}
            valueStyle={{
              fontSize: "2rem",
            }}
          />
        </div>
        <div className="m-4 border p-2 border-2 rounded-xl border-black shadow-xl">
          <Statistic
            title="Anzahl an gelisteten Anlaufstellen"
            value={143}
            formatter={formatter}
            valueStyle={{
              fontSize: "2rem",
            }}
          />
        </div>
        <div className="m-4 border p-2 border-2 rounded-xl border-black shadow-xl">
          <Statistic
            title="Anzahl der Interviews"
            value={6735}
            formatter={formatter}
            valueStyle={{
              fontSize: "2rem",
            }}
          />
        </div>
        <div className="m-4 border p-2 border-2 rounded-xl border-black shadow-xl">
          <Statistic
            title="Wie gut ist die Seite?"
            value={75391865}
            formatter={formatter}
            valueStyle={{
              fontSize: "2rem",
            }}
          />
        </div>
        <div className="m-4 border p-2 border-2 rounded-xl border-black shadow-xl">
          <Statistic
            title="Aktive Nutzer*innen pro Tag"
            value={1897943}
            formatter={formatter}
            valueStyle={{
              fontSize: "2rem",
            }}
          />
        </div>
        <div className="m-4 border p-2 border-2 rounded-xl border-black shadow-xl">
          <Statistic
            title="Anzahl an gelisteten Anlaufstellen"
            value={143}
            formatter={formatter}
            valueStyle={{
              fontSize: "2rem",
            }}
          />
        </div>
      </div>
    </div>
  </div>
);
export default Numbers;
