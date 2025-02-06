"use client";

import { useState, useEffect } from "react";

const CalendlyWidget = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Se ejecuta solo en el cliente
  }, []);

  if (!isClient) {
    return null; // No renderiza nada en el servidor
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/agenciafbb/30min?background_color=fdfcfb&text_color=b0846a&primary_color=1b3a4b"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CalendlyWidget;

