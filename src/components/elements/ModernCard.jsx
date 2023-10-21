import React from "react";
import { Card } from "flowbite-react";

export default function CustomCard({ imgSrc, imgAlt, title, text }) {
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
    </div>
  );
}
