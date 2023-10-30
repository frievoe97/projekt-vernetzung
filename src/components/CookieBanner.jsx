import React, { useState } from "react";

function CookieBanner() {
  const [acceptCookies, setAcceptCookies] = useState(false);

  const handleAcceptCookies = () => {
    setAcceptCookies(true);
    // Hier können Sie Ihre Logik für das Speichern der Cookie-Zustimmung hinzufügen
  };

  if (acceptCookies) {
    return null; // Wenn Cookies akzeptiert wurden, wird der Banner nicht angezeigt
  }

  return (
    <div className="flex justify-between items-center gap-2 bg-gray-100 px-6 py-4 fixed bottom-0 left-0 w-full">
      <p className="text-sm text-gray-700">
        Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website
        zu bieten. Lerne&nbsp;
        <a href="#" className="underline">
          hier
        </a>
        &nbsp;mehr.
      </p>
      <button
        onClick={handleAcceptCookies}
        className="text-color_font bg-green-500 hover:bg-green-600 font-bold py-2 px-4 border-2 border-black rounded"
      >
        Accept
      </button>
    </div>
  );
}

export default CookieBanner;
