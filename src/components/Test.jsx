import React from "react";

function Test() {
  return (
    <div className="p-4 text-center mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl text-color_font">
      <h1 className="text-4xl font-bold mt-8">
        Überschrift für einen sehr langen Inhalt...
      </h1>

      <p className="text-lg my-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et
      </p>

      <div className="bg-black w-full h-64">Hi</div>
    </div>
  );
}

export default Test;
